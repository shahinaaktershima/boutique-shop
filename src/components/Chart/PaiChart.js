import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);
const PaiChart = () => {
    const data = {
        labels: ['Loss Amount', 'Profit Amount'],
        datasets: [
          {
            label: '# of Amount',
            data: [12, 19],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
            ],
            borderWidth: 1,
          },
        ],
      };
    return (
        <div className=' max-w-[500px] mx-auto'>
            <Pie data={data} />
        </div>
    );
};

export default PaiChart;