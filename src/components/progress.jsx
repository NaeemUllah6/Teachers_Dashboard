import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
const PieChart = () => {
  const chartRef = useRef(null); 

  useEffect(() => {
    const chartDom = chartRef.current;
    const myChart = echarts.init(chartDom); 

   
    const data = [
      { value: 30, name: 'Union Ads', itemStyle: { color: '#EAECF0' } },
      { value: 80, name: 'Video Ads', itemStyle: { color: '#F04438' } },
    ];
    

    const option = {
      tooltip: {
        trigger: 'none', 
      },
      legend: {
        show: false, 
      },
      series: [
        {
          name: 'Access From',
          type: 'pie',
          radius: ['80%', '70%'], 
          avoidLabelOverlap: false,
          itemStyle: {
            borderRadius: 0,
          },
          label: {
            show: true, 
            position: 'center', 
            formatter: `{c}\n`, 
            fontSize: 10, 
          },
          emphasis: {
            label: {
              show: true,
            },
          },
          labelLine: {
            show: false, 
          },
          data, 
        },
      ],
    };

    myChart.setOption(option); 

    
    return () => {
      myChart.dispose();
    };
  }, []); 
  return (
    <div
      ref={chartRef} 
      style={{ width: '50px', height: '50px' }} 
    />
  );
};

export default PieChart;
