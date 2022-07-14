import React from "react";
import { FiWind } from "react-icons/fi";
import { WiHumidity } from "react-icons/wi";

const Weather = ({ data }) => {
  console.log(data);
  return (
    <div className="relative flex flex-col justify-between max-w-[500px] w-full h-[90vh] m-auto p-4 text-white z-10">
      <p className="text-4xl text-center">Weather in {data.name}</p>
      <div className="relative flex justify-between">
        <div className="flex flex-col items-center">
          <img
            src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
            alt="/"
            width={100}
            height={100}
          />
          <p className="text-2xl">{data.weather[0].main}</p>
        </div>
        <p className="text-9xl">{data.main.temp.toFixed(0)}°C</p>
      </div>

      <div className="bg-black/70 relative mb-40 p-8 rounded-md">
        <p className="text-4xl text-center pb-6">{data.name}</p>
        <div className="flex justify-between text-center">
          <div className="flex flex-col items-center mt-[30px]">
            <p className="text-xl">Feels Like</p>
            <p className="font-bold text-2xl">
              {data.main.feels_like.toFixed(0)}°C
            </p>
          </div>
          <div className="flex flex-col items-center justify-center text-center">
            <p>
              <WiHumidity size={30} />
            </p>
            <p className="text-xl">Humidity</p>
            <p className="font-bold text-2xl">{data.main.humidity}%</p>
          </div>
          <div className="flex flex-col items-center justify-center text-center">
            <p>
              <FiWind size={30} />
            </p>
            <p className="text-xl">Winds</p>
            <p className="font-bold text-2xl">
              {data.wind.speed.toFixed(0)}km/h
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
