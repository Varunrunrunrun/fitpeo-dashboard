
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import Icon from './Icon';
import { barChartData, barChartOptions } from '../constants';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart = () => {
    return (
        <div className='w-full'>
            <div className='mb-4 flex w-full justify-between items-center gap-4'>
                <h1 className='text-3xl font-semibold '>Activity</h1>
                <div className='bg-slate-400 bg-opacity-40 rounded-2xl py-1 px-6 flex justify-center gap-1 items-center cursor-pointer'>
                    <p className='text-xs'>Weekly</p>
                    <Icon name='ChevronDown' className='w-4' />
                </div>
            </div>
            <div className='h-64  w-full'>
                <Bar data={barChartData} options={barChartOptions} />
            </div>
        </div>
    );
}

export default BarChart