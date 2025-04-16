import React, { useState } from 'react';
import { FileText, Search, BarChart3 } from 'lucide-react';
import SubmissionForm from './components/SubmissionForm';
import SearchForm from './components/SearchForm';
import Dashboard from './components/Dashboard';

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-bold text-gray-900 text-center sm:text-left">
            Contractor Quote System
          </h1>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex" aria-label="Tabs">
              {[
                { key: 'dashboard', label: 'Dashboard', icon: BarChart3 },
                { key: 'submit', label: 'Submit Quote', icon: FileText },
                { key: 'search', label: 'Search Quotes', icon: Search },
              ].map(({ key, label, icon: Icon }) => (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`w-1/3 py-4 px-1 text-center border-b-2 font-medium text-sm ${
                    activeTab === key
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <Icon className="inline-block w-5 h-5 mr-2" />
                  {label}
                </button>
              ))}
            </nav>
          </div>

          <div className="p-4">
          {activeTab === 'dashboard' && <Dashboard />}
            {activeTab === 'submit' && <SubmissionForm />}
            {activeTab === 'search' && <SearchForm />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
