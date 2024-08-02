// src/components/DoughnutChart.tsx
import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';
import { DoughnutChartProps } from '../constants/types';

Chart.register(ArcElement, Tooltip, Legend);



const DoughnutChart: React.FC<DoughnutChartProps> = ({
  data,
  options = {},
  className = '',
}) => {
  return (
    <div className={`w-full h-full ${className}`}>
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default DoughnutChart;
