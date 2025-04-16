import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';

import ProjectsByStateChart from './ProjectsByStateChart';
import AvgRoofSizeByTypeChart from './AvgRoofSizeByTypeChart';
import SummarySection from './SummarySection';
import QuotesByMonthChart from './QuotesByMonthChart';
import RoofTypeByStateChart from './RoofTypeByStateChart';

function Dashboard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchQuotes = async () => {
      const querySnapshot = await getDocs(collection(db, 'quotes'));
      const rows = querySnapshot.docs.map(doc => doc.data());
      setData(rows);
    };
    fetchQuotes();
  }, []);

  return (
    <div className="space-y-8">
          <div className="flex flex-col lg:flex-row gap-4">
      <div className="lg:w-1/2 w-full">
        <SummarySection data={data} />
      </div>
      <div className="lg:w-1/2 w-full">
        <RoofTypeByStateChart data={data} />
      </div>
    </div>
      <ProjectsByStateChart data={data} />
      <AvgRoofSizeByTypeChart data={data} />
      <QuotesByMonthChart data={data} />
    </div>
  );
}

export default Dashboard;
