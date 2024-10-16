import React from 'react';
import PieChartComponent from './piechartdashboard';

function Piechart() {
  const labels = ['Club A', 'Club B', 'Club C', 'Club D', 'Club E']; // Labels for football clubs
  const data = {
    labels: labels,
    datasets: [
      {
        label: 'My Dataset',
        data: [300, 50, 100, 40, 40],
        backgroundColor: ['#75ACFF', '#3B77D2', '#3F71BC', '#2057A5', '#14356E'],
        borderColor: ['#75ACFF', '#75ACFF', '#75ACFF', '#2057A5', '#14356E'],
        borderWidth: 1,
      },
    ],
  };

  // Optional chart options (hide default legend)
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false, // Disable the default legend
      },
    },
  };

  return (
    <div className=''>
      <div className='flex flex-row space-x-11'>
        {/* Pie chart */}
        <PieChartComponent data={data} options={options} />

        {/* Description and Custom Legend */}
        <div className='flex justify-center mt-4'>
          <div className='space-y-8'>
            <h1 className='text-xl font-semibold text-[#2057A5]'>
              List of all football clubs
            </h1>
            <p className='w-[300px] ml-7'>
              Football clubs with corresponding percentage of fans registered
              under it.
            </p>

            {/* Manually rendered legend */}
            <div className='grid grid-cols-3'>
              {labels.map((label, index) => (
                <li key={index} className='flex items-center mt-2'>
                  <span
                    className='w-4 h-4 mr-2'
                    style={{ backgroundColor: data.datasets[0].backgroundColor[index] }}
                  ></span>
                  {label}
                </li>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Piechart;
