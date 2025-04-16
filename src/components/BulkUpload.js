import React from 'react';
import Papa from 'papaparse';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase';

function BulkUpload() {
  const handleFileUpload = (event) => {
    const file = event.target.files[0];

    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: async function (results) {
        const quotesCollection = collection(db, 'quotes');

        for (let row of results.data) {
          try {
            const formatted = {
              contractorName: row['Contractor Name'],
              company: row['Company'],
              roofSizeSqFt: row['Roof Size (sq ft)'],
              roofType: row['Roof Type'],
              city: row['City'],
              state: row['State'],
              projectDate: row['Project Date'],
              uploadedAt: new Date(),
            };

            await addDoc(quotesCollection, formatted);
          } catch (err) {
            console.error('Upload error:', err, row);
          }
        }

        alert('Upload complete!');
      },
    });
  };

  return (
    <div className="p-4">
      <label className="block mb-2 text-sm font-medium text-gray-700">
        Upload CSV of Quotes
      </label>
      <input
        type="file"
        accept=".csv"
        onChange={handleFileUpload}
        className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:border-0 file:text-sm file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
      />
    </div>
  );
}

export default BulkUpload;
