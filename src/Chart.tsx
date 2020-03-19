import React, { useEffect, useState } from 'react';
import {
    PieChart, Pie, Legend, Cell, Tooltip,
} from 'recharts';


const COLORS = ['#ff0000', '#2b580c', '#979797'];

function getWidth() {
    if (document.documentElement.clientWidth < 769) return document.documentElement.clientWidth * 0.9
    else return document.documentElement.clientWidth * 0.4
}

// function getWidth() {
//     if (window.innerWidth < 769) return window.innerWidth * 0.9
//     else return window.innerWidth * 0.4
// }


export interface ChartProps {
    data: { name: string, value: number }[];
    legend: boolean;
}

const Chart: React.FC<ChartProps> = (props: ChartProps) => {
    console.log(props.data);
    return (
        <>
            <PieChart width={getWidth()} height={getWidth() * 1.1}>
                <Pie dataKey="value" startAngle={360} endAngle={0} data={props.data} cx={getWidth() / 2} cy={getWidth() / 2} outerRadius={getWidth() / 4} fill="#8884d8" label >
                    {props.data.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]} />)}
                </Pie>
                <Tooltip contentStyle={{
                    color: 'white',
                    backgroundColor: '#252525',
                }} itemStyle={{
                    color: 'white',
                    backgroundColor: '#252525',
                }} />
                {props.legend ? <Legend /> : undefined}
            </PieChart>
        </>
    )
}

export default Chart;
