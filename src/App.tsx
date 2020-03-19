import React, { useEffect, useState } from 'react';
import Chart from './Chart';

function fetchToArray(res: Promise<any>): { name: string, value: number }[] {
    return [{ name: "Подтвержденных", value: +res.confirmed.value }, { name: "Вылечившихся", value: +res.recovered.value }, { name: "Умерших", value: +res.deaths.value }]
}


const App: React.FC = () => {
    const [loading, setLoading] = useState<boolean>(true);
    const [data, setData] = useState<{ name: string, value: number }[]>([]);
    const [allData, setAllData] = useState<{ name: string, value: number }[]>([]);
    const [lastUpdate, setLastUpdate] = useState<Date>(new Date());
    useEffect(() => {
        fetch('https://covid19.mathdro.id/api/countries/RU').then(res => res.json()).then(
            res => setAllData(fetchToArray(res))).catch(err => setLoading(true));

        fetch('https://covid19.mathdro.id/api').then(res => res.json()).then(res => { setData(fetchToArray(res)); setLoading(false); setLastUpdate(new Date(Date.parse(res.lastUpdate))) }).catch(err => setLoading(true));
    }, []);

    return loading ? (<div><h1>Загрузка</h1></div>) : (
        <div className="app">
            <h3>Дата полученных данных: {lastUpdate.toLocaleDateString("ru")} {lastUpdate.toLocaleTimeString("ru")}</h3>
            <div className="app__charts">
                <div className="app__charts-world">
                    <h3>Статистика в мире</h3>
                    <Chart data={data} legend={true} />
                </div>
                <div className="app__charts-ru">
                    <h3>Статистика в России</h3>
                    <Chart data={allData} legend={false} />
                </div>
            </div>
        </div>
    );
}


export default App;
