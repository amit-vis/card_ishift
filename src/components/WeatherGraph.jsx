import React, { useContext, useEffect, useRef } from 'react';
import { WeatherContext } from '../context/contextAPi';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables); // Register all necessary Chart.js components

const WeatherChart = () => {
  const { weatherData } = useContext(WeatherContext);
  const chartRef = useRef(null);

  console.log(weatherData)

  useEffect(() => {
    if (weatherData && weatherData.time) {
      const ctx = chartRef.current.getContext('2d');
      if (chartRef.current.chart) {
        chartRef.current.chart.destroy(); // Destroy existing chart instance
      }

      chartRef.current.chart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: weatherData.time, // Ensure time data is correctly passed
          datasets: [
            {
              label: 'Max Temperature (°C)',
              data: weatherData.temperature_2m_max,
              borderColor: 'rgba(255, 99, 132, 1)',
              backgroundColor: 'rgba(255, 99, 132, 0.2)',
              fill: true,
            },
            {
              label: 'Min Temperature (°C)',
              data: weatherData.temperature_2m_min,
              borderColor: 'rgba(54, 162, 235, 1)',
              backgroundColor: 'rgba(54, 162, 235, 0.2)',
              fill: true,
            },
          ],
        },
        options: {
          responsive: true,
          scales: {
            x: {
              type: 'category', // Explicitly set x-axis to 'category'
              title: {
                display: true,
                text: 'Date',
              },
            },
            y: {
              title: {
                display: true,
                text: 'Temperature (°C)',
              },
            },
          },
        },
      });
    }
  }, [weatherData]);

  return (
    <div>
      <canvas ref={chartRef}></canvas>
    </div>
  );
};

export default WeatherChart;
