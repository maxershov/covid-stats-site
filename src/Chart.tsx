import React from 'react';
import {
    PieChart, Pie, Legend, Cell, Tooltip,
} from 'recharts';


const COLORS = ['#af0404', '#2b580c', '#979797'];

function getWidth() {
    if (document.documentElement.clientWidth < 769) return document.documentElement.clientWidth * 0.9
    else return document.documentElement.clientWidth * 0.4
}

export interface ChartProps {
    data: { name: string, value: number }[];
}

const Chart: React.FC<ChartProps> = (props: ChartProps) => (
    <>
        <PieChart width={getWidth()} height={getWidth() * 0.8}>
            <Pie dataKey="value" startAngle={360} endAngle={0} data={props.data} cx={getWidth() / 2} cy={getWidth() / 3} outerRadius={getWidth() / 4} fill="#8884d8" label >
                {props.data.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]} />)}
            </Pie>
            <Tooltip contentStyle={{
                color: 'white',
                backgroundColor: '#252525',
            }} itemStyle={{
                color: 'white',
                backgroundColor: '#252525',
            }} />
            <Legend />
        </PieChart>
    </>
)


export default Chart;
