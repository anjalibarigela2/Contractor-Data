import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

function AvgRoofSizeByTypeChart({ data }) {
  const typeSums = {};
  const typeCounts = {};

  data.forEach(item => {
    const type = item.roofType;
    const size = Number(item.roofSizeSqFt);
    typeSums[type] = (typeSums[type] || 0) + size;
    typeCounts[type] = (typeCounts[type] || 0) + 1;
  });

  const chartData = Object.keys(typeSums).map(type => ({
    type,
    average: (typeSums[type] / typeCounts[type]).toFixed(2),
  }));

  return (
    <div>
      <h2>Average Roof Size by Type</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={chartData}>
          <XAxis dataKey="type" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="average" fill="#f59e0b" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default AvgRoofSizeByTypeChart;
