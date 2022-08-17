import React, { useState } from "react";
import axios from "axios";
import { BsSearch } from "react-icons/bs";
import Weather from "./components/Weather";
import Spinner from "./components/Spinner";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(false);

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.REACT_APP_WEATHER_KEY}`;

  const fetchWeather = (e) => {
    e.preventDefault();
    setLoading(true);
    axios.get(url).then((response) => {
      setWeather(response.data);
      // console.log(response.data);
    });
    setCity("");
    setLoading(false);
  };

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div>
        {/* Image overlay */}
        <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/30 z-10'></div>
        {/* Background */}

        <img
          className='absolute w-full h-full object-cover'
          src='/clouds.jpg'
          alt='Weather'
        />

        {/* Search Field */}
        <div className='relative flex justify-between items-center max-w-[500px] w-full m-auto pt-4 text-white z-10 px-1'>
          <form
            onSubmit={fetchWeather}
            className='flex justify-between items-center w-full m-auto p-3 bg-transparent border border-gray-300 text-white rounded-2xl'>
            <div>
              <input
                onChange={(e) => setCity(e.target.value)}
                className='bg-transparent border-none text-white focus:outline-none text-2xl placeholder:text-white'
                type='text'
                placeholder='Search city...'
              />
            </div>
            <button
              aria-label='search Weather'
              onClick={fetchWeather}>
              <BsSearch size={20} />
            </button>
          </form>
        </div>
        {/* Weather Data */}
        {weather.main && <Weather data={weather} />}
      </div>
    );
  }
}

export default App;
