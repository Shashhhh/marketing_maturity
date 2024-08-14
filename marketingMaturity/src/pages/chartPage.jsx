import React from 'react';
import RadarChart from '../components/radarChart';
import BarChart from '../components/barChart';
const ChartPage = ({formData}) => {
  return (
    <div>
      <h1>Nivo Radar Chart Example</h1>
      <RadarChart formData = {formData}/>
      <BarChart formData = {formData} />
    </div>
  );
};

export default ChartPage;
