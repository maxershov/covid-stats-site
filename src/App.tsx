import React, { useEffect, useState } from 'react';
import {
    PieChart, Pie, Legend, Cell, Tooltip,
} from 'recharts';


// <{ title: string; message: string }>


function fetchToArray(res: Promise<any>): { name: string, value: number }[] {
    return [{ name: "Подтвержденных", value: +res.confirmed.value }, { name: "Вылечившихся", value: +res.recovered.value }, { name: "Умерших", value: +res.deaths.value }]
}

const COLORS = ['#F1C40F', '#00C49F', '#FF5733'];


function getWidth() {
    if (document.documentElement.clientWidth < 769) return document.documentElement.clientWidth * 0.9
    else return document.documentElement.clientWidth * 0.4
}



const App: React.FC = () => {
    const [loading, setLoading] = useState<boolean>(true);
    const [data, setData] = useState<{ name: string, value: number }[]>([]);
    const [allData, setAllData] = useState<{ name: string, value: number }[]>([]);
    const [lastUpdate, setLastUpdate] = useState<Date>(new Date());
    useEffect(() => {
        fetch('https://covid19.mathdro.id/api/countries/RU').then(res => res.json()).then(
            res => setData(fetchToArray(res))).catch(err => setLoading(true));

        fetch('https://covid19.mathdro.id/api').then(res => res.json()).then(res => { setAllData(fetchToArray(res)); setLoading(false); setLastUpdate(new Date(Date.parse(res.lastUpdate))) }).catch(err => setLoading(true));
    }, []);

    return loading ? (<div><h1>Загрузка</h1></div>) : (
        <div className="App">
            <h3>Дата полученны данных: {lastUpdate.toLocaleDateString("ru")} {lastUpdate.toLocaleTimeString("ru")}</h3>
            <h3>{allData[0].value}</h3>
            <PieChart width={getWidth()} height={getWidth() * 1.1}>
                <Pie dataKey="value" startAngle={360} endAngle={0} data={allData} cx={getWidth() / 2} cy={getWidth() / 2} outerRadius={getWidth() / 4} fill="#8884d8" label >{
                    allData.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]} />)}
                </Pie>
                <Tooltip />
                <Legend />
            </PieChart>
            <PieChart width={getWidth()} height={getWidth() * 1.1}>
                <Pie dataKey="value" startAngle={360} endAngle={0} data={allData} cx={getWidth() / 2} cy={getWidth() / 2} outerRadius={getWidth() / 4} fill="#8884d8" label >{
                    data.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]} />)}
                    </Pie>
                <Tooltip />
            </PieChart>
        </div>
    );
}


export default App;

