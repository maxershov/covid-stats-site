import React, { useEffect, useState } from 'react';
import Chart from './Chart';
import TextCarousel from "./TextCarousel"

function fetchToArray(res: Promise<any>): { name: string, value: number }[] {
    return [{ name: "Заболевшие", value: +res.confirmed.value }, { name: "Выздоровевшие", value: +res.recovered.value }, { name: "Умершие", value: +res.deaths.value }]
}


const App: React.FC = () => {
    const [loading, setLoading] = useState<boolean>(true);
    const [data, setData] = useState<{ name: string, value: number }[]>([]);
    const [allData, setAllData] = useState<{ name: string, value: number }[]>([]);
    const [lastUpdate, setLastUpdate] = useState<Date>(new Date());
    // const [loading, setLoading] = useState<boolean>(false);
    // const [data, setData] = useState<{ name: string, value: number }[]>(    [{"name":"Заболевшие","value":147},{"name":"Выздоровевшие","value":9},{"name":"Умершие","value":1}]);
    // const [allData, setAllData] = useState<{ name: string, value: number }[]>(    [{"name":"Заболевшие","value":227310},{"name":"Выздоровевшие","value":84532},{"name":"Умершие","value":9311}]);
    // const [lastUpdate, setLastUpdate] = useState<Date>(new Date(Date.parse("2020-03-19T14:53:06.000Z")));

    useEffect(() => {
        Promise.all([
            fetch("https://covid19.mathdro.id/api/countries/RU").then(res => res.json()),
            fetch('https://covid19.mathdro.id/api').then(res => res.json())
        ])
            .then(([rusData, worldData]) => {
                setData(fetchToArray(rusData));
                setAllData(fetchToArray(worldData));
                setLastUpdate(new Date(Date.parse(worldData.lastUpdate)))
            }).then(() => setLoading(false))
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return loading ? (<div><h1>Загрузка</h1></div>) : (
        <div className="app">
            <div className="app__charts">
                <div className="app__charts-world">
                    <h2>Статистика в мире</h2>
                    <Chart data={allData} />
                </div>
                <div className="app__charts-ru">
                    <h2>Статистика в России</h2>
                    <Chart data={data} />
                </div>
            </div>
            <p>Дата полученных данных: {lastUpdate.toLocaleDateString("ru")} {lastUpdate.toLocaleTimeString("ru")}</p>
            <TextCarousel></TextCarousel>
        </div>
    );
}


export default App;