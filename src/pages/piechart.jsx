import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';
import axios from 'axios';
import { Link } from 'react-router-dom';

//const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042','#a54a02','#196c80','#c1fcca'];

const generateRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const COLORS = Array.from({ length: 100 }, () => generateRandomColor());


const RADIAN = Math.PI / 180;

const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export default function Piechart() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/offre')
      .then((response) => {
        const newData = response.data.filter(item => item.Postulant !== 0).map(item => ({ name: item.name, value: item.Postulant, color: generateRandomColor() }));
        setData(newData);
      })
      .catch((error) => {
        console.error('Erreur : ' + error);
      });
  }, []); 

  return (
    <div className='bg-white p-6 rounded-sm border-gray-200 flex flex-col shadow-md mt-0 ml-0'>
               <div className='w-full flex-1 flex-col text-xs'> 
        <ResponsiveContainer width="100%" height="100%">
          <PieChart width={8000} height={8000}>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Legend align="right" verticalAlign="middle" layout="vertical" />
          </PieChart>

        </ResponsiveContainer>
      </div>
    </div>
  );
}
