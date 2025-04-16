// components/RoofTypeByStateChart.js
import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

function RoofTypeByStateChart({ data }) {
  const [selectedState, setSelectedState] = useState('');

  const states = [...new Set(data.map(d => d.state))].sort();

  const filteredData = data.filter(d => d.state === selectedState);

  const typeCounts = filteredData.reduce((acc, curr) => {
    acc[curr.roofType] = (acc[curr.roofType] || 0) + 1;
    return acc;
  }, {});

  const chartData = Object.entries(typeCounts).map(([type, count]) => ({
    type,
    count
  }));

  return (
    <div className="bg-white p-6 rounded-lg shadow space-y-4">
      <div>
        <label className="block mb-2 font-medium text-gray-700">Select a State:</label>
        <select
          value={selectedState}
          onChange={e => setSelectedState(e.target.value)}
          className="w-full border rounded p-2"
        >
          <option value="">-- Choose State --</option>
          {states.map(state => (
            <option key={state} value={state}>{state}</option>
          ))}
        </select>
      </div>

      {selectedState && chartData.length > 0 && (
        <>
          <h3 className="text-lg font-semibold text-gray-700">
            Quotes by Roof Type in <span className="text-blue-600">{selectedState}</span>
          </h3>
          <ResponsiveContainer width="100%" height={230}>
            <BarChart data={chartData}>
              <XAxis dataKey="type" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="count" fill="#10b981" />
            </BarChart>
          </ResponsiveContainer>
        </>
      )}
    </div>
  );
}

export default RoofTypeByStateChart;
