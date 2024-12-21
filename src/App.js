import React, { useContext } from 'react';
import WeatherForm from './components/WeatherForm';
import WeatherGraph from './components/WeatherGraph';
import WeatherTable from './components/WeatherTable';
import { WeatherContext } from './context/contextAPi';

function App() {
  const { weatherData, loading, error } = useContext(WeatherContext);

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Weather Dashboard</h1>
      <WeatherForm />
      {loading && <p className="text-center">Loading...</p>}
      {error && <p className="text-red-500 text-center">{error}</p>}
      {weatherData && (
        <>
          <WeatherGraph data={weatherData} />
          <WeatherTable data={weatherData} />
        </>
      )}
    </div>
  );
}

export default App;
