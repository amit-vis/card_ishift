import React from 'react';

const WeatherTable = ({ data }) => {
  return (
    <div className="bg-white p-4 rounded-md shadow-md">
      <h2 className="text-xl font-bold mb-4">Weather Data Table</h2>
      <table className="w-full table-auto border-collapse border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            <th>Date</th>
            <th>Max Temp</th>
            <th>Min Temp</th>
            <th>Mean Temp</th>
          </tr>
        </thead>
        <tbody>
          {data.time.map((date, index) => (
            <tr key={index} className="text-center">
              <td>{date}</td>
              <td>{data.temperature_2m_max[index]}°C</td>
              <td>{data.temperature_2m_min[index]}°C</td>
              <td>{data.temperature_2m_mean[index]}°C</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default WeatherTable;
