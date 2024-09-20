import React, { useState } from 'react';
import Homeblack from '../images/icons/homeblack.svg';
import ReactApexChart from 'react-apexcharts';
import { Link } from 'react-router-dom'
import UpcomingAssignments from './upcoming_assignment';
import Submissions from '../components/Reuse components/submissions'


export default function Dashboard() {
  const [chartData] = useState({
    series: [
      {
        name: 'Accuracy',
        data: [40, 90, 40],
      },
      {
        name: 'Communication',
        data: [70, 60, 60]
      },
      {
        name: 'Safety',
        data: [100, 50, 100]
      }
    ],
    options: {
      chart: {
        type: 'bar',
        height: 350,
        stacked: false,
        toolbar: {
          show: false,
        }
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '95%',
          endingShape: 'rounded'
        }
      },
      xaxis: {
        categories: ['Course 1', 'Course 2', 'Course 3'],
        labels: {
          style: {
            fontSize: '14px',
          }
        }
      },
      yaxis: {
        title: {
          text: ''
        },
        max: 100,
      },
      colors: ['#00CADC', '#49C3FB', '#3572D4'],
      dataLabels: {
        enabled: false
      },
      legend: {
        position: 'bottom',
        horizontalAlign: 'center',
        labels: {
          colors: '#000',
        },
        markers: {
          radius: 12
        }
      },
      grid: {
        show: true
      },
      fill: {
        opacity: 1
      }
    },
  });

  return (
    <div className='md:p-4'>
      <div className='border rounded-lg p-4'>





        <div className='flex flex-wrap  md:flex-wrap lg:flex-nowrap gap-1 items-center'>
          <img src={Homeblack} alt='img' />
          <h2 className='text-[24px] text-[#344054] font-semibold calibri'>Dashboard</h2>
        </div>





        <div className='flex flex-wrap lg:flex-nowrap justify-between py-4 gap-4'>


          <div className='w-full lg:w-[60%]'>
            <div className='p-4 border rounded-lg mb-3'>

              <div className=''>
                <div className='flex flex-wrap items-center justify-between w-full'>
                  <div>
                    <h2 className='text-[20px] font-medium font-sans'>Analytics</h2>
                  </div>
                  <div>
                    <Link to=""><h4 className='text[16px font-medium text-[#475467]'>See Courses <i className='fa fa-arrow-right'></i></h4></Link>
                  </div>
                </div>
                <p>Present</p>
                <div>
                  <div id="chart">
                    <ReactApexChart
                      options={chartData.options}
                      series={chartData.series}
                      type="bar"
                      height={350}
                    />
                  </div>
                </div>
              </div>
            </div>
            <UpcomingAssignments />

          </div>
          {/* ////////////2nd section///////////////// */}
          <Submissions />
          {/* ////////////2nd section///////////////// */}
        </div>
      </div>
    </div>

  );
}
