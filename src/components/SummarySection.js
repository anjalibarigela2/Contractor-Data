import React from 'react';

function SummarySection({ data }) {
  const totalQuotes = data.length;

  const uniqueStates = new Set(data.map(item => item.state)).size;

  const typeCounts = data.reduce((acc, curr) => {
    acc[curr.roofType] = (acc[curr.roofType] || 0) + 1;
    return acc;
  }, {});
  const mostCommonRoofType = Object.entries(typeCounts).reduce((a, b) => a[1] > b[1] ? a : b, ['', 0])[0];

  return (
    <div className="bg-white p-6 rounded-lg shadow space-y-4">
      <h2 className="text-xl font-semibold text-gray-700">Summary</h2>

      <div className="text-gray-600">✅ Total Quotes: <strong>{totalQuotes}</strong></div>
      <div className="text-gray-600">🗺️ Unique States: <strong>{uniqueStates}</strong></div>
      <div className="text-gray-600">🏗️ Most Common Roof Type: <strong>{mostCommonRoofType}</strong></div>

      <div className="pt-4">
        <h3 className="text-lg font-medium text-gray-700 mb-2">🧱 Quotes by Roof Type</h3>
        <ul className="list-disc list-inside text-gray-600">
          {Object.entries(typeCounts).map(([type, count]) => (
            <li key={type}>
              <strong>{type}</strong>: {count}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SummarySection;
