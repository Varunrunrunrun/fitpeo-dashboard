
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import Icon from './Icon';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const data = {
    labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30"],
    datasets: [
        {
            label: 'Activity',
            data: [
                11667, 13333, 17667, 3000, 5667, 11000, 18333, 9667,
                7000, 15000, 5000, 7667, 13000, 14333, 8333, 5000,
                7000, 16333, 3667, 10333, 12333, 17000, 6333, 15667,
                14332, 16000, 12323, 10001, 14300, 7890
            ],
            backgroundColor: 'rgba(100, 149, 237)',
            borderRadius: Number.MAX_VALUE
        },
    ],
};

const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            display: false,
        },
    },
    scales: {
        x: {
            ticks: {
                stepSize: 4,
            },
        },
        y: {
            beginAtZero: false,
            ticks: {
                stepSize: 5000,
            },
        },
    },
};

const BarChart = () => {
    return (
        <div className='w-full'>
            <div className='mb-4 flex w-full justify-between items-center gap-4'>
                <h1 className='text-3xl font-semibold '>Activity</h1>
                <div className='bg-slate-400 bg-opacity-40 rounded-2xl py-2 px-4 flex justify-center gap-1 items-center cursor-pointer'>
                    <p className='text-xs'>Weekly</p>
                    <Icon name='ChevronDown' className='w-4' />
                </div>
            </div>
            <div className='h-64 w-full'>
                <Bar data={data} options={options} />
            </div>
        </div>
    );
}

export default BarChart