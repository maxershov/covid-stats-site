import React, { useEffect, useState } from 'react';
import Chart from './Chart';
import TextCarousel from "./TextCarousel";
import Contacts from "./Contacts";

function fetchToArray(res: Promise<any>): { name: string, value: number }[] {
    return [{ name: "Заразилось", value: +res.confirmed.value }, { name: "Вылечилось", value: +res.recovered.value }, { name: "Умерло", value: +res.deaths.value }]
}


const App: React.FC = () => {
    const [loading, setLoading] = useState<boolean>(true);
    const [data, setData] = useState<{ name: string, value: number }[]>([]);
    const [allData, setAllData] = useState<{ name: string, value: number }[]>([]);
    const [lastUpdate, setLastUpdate] = useState<Date>(new Date());
    const [lastUpdateRu, setLastUpdateRu] = useState<Date>(new Date());
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
                setLastUpdateRu(new Date(Date.parse(rusData.lastUpdate)))
                setLastUpdate(new Date(Date.parse(worldData.lastUpdate)))
            }).then(() => setLoading(false))
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return loading ? (<div className="loader">Loading...</div>) : (
        <>
            <div className="app">
                <h1>Cтатистика COVID-19</h1>

                <div className="app__charts">
                    <div className="app__charts-world">
                        <h2>В мире</h2>
                        <p>Последнее обновление:</p>
                        <p>{lastUpdate.toLocaleDateString("ru")} {lastUpdate.toLocaleTimeString("ru")}</p>
                        <Chart data={allData} />
                    </div>
                    <div className="app__charts-ru">
                        <h2>В России</h2>
                        <p>Последнее обновление:</p>
                        <p>{lastUpdate.toLocaleDateString("ru")} {lastUpdateRu.toLocaleTimeString("ru")}</p>
                        <Chart data={data} />
                    </div>
                </div>
                <TextCarousel />
            </div>
            <Contacts />
        </>
    );
}


export default App;