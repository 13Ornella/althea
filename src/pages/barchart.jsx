import React, { useState, useEffect } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';
import axios from 'axios';

export default function Barchart() {
    const generateRandomColor = () => {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
      };
      
    const colors = Array.from({ length: 100 }, () => generateRandomColor());
    const [offre, setOffre] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/offre')
      .then((response) => {
        setOffre(response.data);
      })
      .catch((error) => {
        console.error('Erreur' + error);
      });
  }, []);

  // Utilisez la valeur d'offre pour initialiser le tableau data
  const data = offre.map((item, index) => ({
    name: item.name, // Remplacez item.name par le champ approprié de votre objet offre
    uv: item.Postulant, // Remplacez item.uv par le champ approprié de votre objet offre
  }));

  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
    Z`;
  };

  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };

  return (
    <div className='bg-white p-6 rounded-sm border-gray-200 flex flex-col shadow-md mt-0 ml-0'>
      
    <BarChart
      width={640}
      height={300}
      data={data}
      margin={{
        top: 20,
        right: 30,
        left: -30,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Bar dataKey="uv" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index % 20]} />
        ))}
      </Bar>
    </BarChart>
    </div>
  );
}
