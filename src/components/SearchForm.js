import React, { useState } from 'react';
import { format } from 'date-fns';
import { searchQuotes } from '../api';

const searchTypes = [
  { value: 'state', label: 'State' },
  { value: 'roofType', label: 'Roof Type' },
  { value: 'projectDate', label: 'Project Date' },
  { value: 'company', label: 'Company' },
  { value: 'contractorName', label: 'Contractor Name' }
];

const roofTypes = ['Metal', 'TPO', 'Foam', 'Shingle', 'EPDM', 'PVC'];
const states = ['AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'];

export default function SearchForm() {
  const [searchType, setSearchType] = useState('state');
  const [searchValue, setSearchValue] = useState('');
  const [results, setResults] = useState([]);
  const [error, setError] = useState('');

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const quotes = await searchQuotes(searchType, searchValue);
      setResults(quotes);
      setError('');
    } catch (error) {
      setError('Error searching quotes. Please try again.');
      setResults([]);
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <form onSubmit={handleSearch} className="mb-8 space-y-4">
        <div className="flex gap-4">
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700">Search By</label>
            <select
              value={searchType}
              onChange={(e) => setSearchType(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            >
              {searchTypes.map(type => (
                <option key={type.value} value={type.value}>{type.label}</option>
              ))}
            </select>
          </div>

          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700">Search Value</label>
            {searchType === 'roofType' ? (
              <select
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              >
                <option value="">Select Roof Type</option>
                {roofTypes.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            ) : searchType === 'state' ? (
              <select
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              >
                <option value="">Select State</option>
                {states.map(state => (
                  <option key={state} value={state}>{state}</option>
                ))}
              </select>
            ) : searchType === 'projectDate' ? (
              <input
                type="date"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            ) : (
              <input
                type="text"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                placeholder={`Enter ${searchType}`}
              />
            )}
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Search
        </button>
      </form>

      {error && (
        <div className="mb-4 p-4 rounded-md bg-red-100 text-red-700">
          {error}
        </div>
      )}

      {results.length > 0 && (
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contractor</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Company</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Roof Size</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Roof Type</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Project Date</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {results.map((quote) => (
                <tr key={quote.id}>
                  <td className="px-6 py-4 whitespace-nowrap">{quote.contractorName}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{quote.company}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{quote.roofSizeSqFt} sq ft</td>
                  <td className="px-6 py-4 whitespace-nowrap">{quote.roofType}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{quote.city}, {quote.state}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{format(new Date(quote.projectDate), 'MM/dd/yyyy')}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}