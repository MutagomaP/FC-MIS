// PieChartComponent.js
import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Register necessary Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

const PieChartComponent = ({ data, options }) => {
  return (
    <div style={{width:'250px', height:'250px'}}>
      <Pie data={data} options={options} />
    </div>
  );
};

export default PieChartComponent;
