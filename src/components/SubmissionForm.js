import React, { useState } from 'react';
import { submitQuote } from '../api';

const roofTypes = ['Metal', 'TPO', 'Foam', 'Shingle', 'EPDM', 'PVC'];
const states = ['AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'];

export default function SubmissionForm() {
  const [formData, setFormData] = useState({
    contractorName: '',
    company: '',
    roofSizeSqFt: '',
    roofType: '',
    city: '',
    state: '',
    projectDate: ''
  });
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await submitQuote({
        ...formData,
        roofSize: Number(formData.roofSize)
      });
      setMessage('Quote submitted successfully!');
      setFormData({
        contractorName: '',
        company: '',
        roofSizeSqFt: '',
        roofType: '',
        city: '',
        state: '',
        projectDate: ''
      });
    } catch (error) {
      setMessage('Error submitting quote. Please try again.');
    }
  };

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-2xl mx-auto p-6">
      <div>
        <label className="block text-sm font-medium text-gray-700">Contractor Name</label>
        <input
          type="text"
          name="contractorName"
          value={formData.contractorName}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-1"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Company</label>
        <input
          type="text"
          name="company"
          value={formData.company}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-1"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Roof Size (sq ft)</label>
        <input
          type="number"
          name="roofSizeSqFt"
          value={formData.roofSizeSqFt}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-1"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Roof Type</label>
        <select
          name="roofType"
          value={formData.roofType}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-1"
          required
        >
          <option value="">Select Roof Type</option>
          {roofTypes.map(type => (
            <option key={type} value={type}>{type}</option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">City</label>
        <input
          type="text"
          name="city"
          value={formData.city}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-1"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 p-1">State</label>
        <select
          name="state"
          value={formData.state}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          required
        >
          <option value="">Select State</option>
          {states.map(state => (
            <option key={state} value={state}>{state}</option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Project Date</label>
        <input
          type="date"
          name="projectDate"
          value={formData.projectDate}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          required
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        Submit Quote
      </button>

      {message && (
        <div className={`mt-4 p-4 rounded-md ${message.includes('Error') ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
          {message}
        </div>
      )}
    </form>
  );
}