// components/QuotesByMonthChart.js
import React from 'react';
import { parseISO, format } from 'date-fns';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

function QuotesByMonthChart({ data }) {
  const monthlyCounts = {};

  data.forEach(item => {
    if (item.projectDate) {
      const date = parseISO(item.projectDate); // parse "2023-09-27"
      const month = format(date, 'yyyy-MM'); // "2023-09"

      monthlyCounts[month] = (monthlyCounts[month] || 0) + 1;
    }
  });

  const chartData = Object.entries(monthlyCounts)
    .map(([month, count]) => ({ month, count }))
    .sort((a, b) => a.month.localeCompare(b.month));

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4 text-gray-700">📅 Quotes by Month</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={chartData}>
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Line dataKey="count" stroke="#3b82f6" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default QuotesByMonthChart;
