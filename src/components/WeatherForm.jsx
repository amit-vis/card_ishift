import React, { useState, useContext } from 'react';
import { WeatherContext } from '../context/contextAPi';

const WeatherForm = () => {
  const { fetchWeatherData } = useContext(WeatherContext);

  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleSubmit = () => {
    fetchWeatherData({ latitude, longitude, startDate, endDate });
  };

  return (
    <div className="p-4 bg-white rounded-md shadow-md mb-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input 
          type="number" 
          placeholder="Latitude" 
          value={latitude} 
          onChange={(e) => setLatitude(e.target.value)} 
          className="p-2 border rounded"
        />
        <input 
          type="number" 
          placeholder="Longitude" 
          value={longitude} 
          onChange={(e) => setLongitude(e.target.value)} 
          className="p-2 border rounded"
        />
        <input 
          type="date" 
          value={startDate} 
          onChange={(e) => setStartDate(e.target.value)} 
          className="p-2 border rounded"
        />
        <input 
          type="date" 
          value={endDate} 
          onChange={(e) => setEndDate(e.target.value)} 
          className="p-2 border rounded"
        />
      </div>
      <button 
        onClick={handleSubmit} 
        className="mt-4 w-full bg-blue-500 text-white p-2 rounded-md"
      >
        Fetch Weather Data
      </button>
    </div>
  );
};

export default WeatherForm;
