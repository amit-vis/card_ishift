import React, { createContext, useState } from 'react';
import axios from 'axios';

export const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchWeatherData = async ({ latitude, longitude, startDate, endDate }) => {
    if (!latitude || !longitude || !startDate || !endDate) {
      setError('All fields are required.');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await axios.get('https://api.open-meteo.com/v1/forecast', {
        params: {
          latitude: parseFloat(latitude),
          longitude: parseFloat(longitude),
          start_date: startDate,
          end_date: endDate,
          daily: [
            'temperature_2m_max',
            'temperature_2m_min',
            'temperature_2m_mean',
            'apparent_temperature_max',
            'apparent_temperature_min',
            'apparent_temperature_mean'
          ].join(','),
          timezone: 'auto',
        },
      });

      if (response.data && response.data.daily) {
        setWeatherData(response.data.daily);
      } else {
        setError('No data found for the selected range.');
      }
    } catch (err) {
      console.error(err);
      setError('Failed to fetch weather data. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <WeatherContext.Provider value={{ weatherData, loading, error, fetchWeatherData }}>
      {children}
    </WeatherContext.Provider>
  );
};
