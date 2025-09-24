import { useState } from "react";

const weatherCodeMap = {
  0: ["Clear sky", "☀️"],
  1: ["Mainly clear", "🌤"],
  2: ["Partly cloudy", "⛅"],
  3: ["Overcast", "☁️"],
  45: ["Fog", "🌫"],
  48: ["Rime fog", "🌫"],
  51: ["Light drizzle", "🌦"],
  53: ["Moderate drizzle", "🌦"],
  55: ["Dense drizzle", "🌧"],
  61: ["Slight rain", "🌧"],
  63: ["Moderate rain", "🌧"],
  65: ["Heavy rain", "🌧"],
  71: ["Slight snow", "🌨"],
  73: ["Moderate snow", "🌨"],
  75: ["Heavy snow", "❄️"],
  80: ["Slight showers", "🌦"],
  81: ["Moderate showers", "🌦"],
  82: ["Violent showers", "🌧"],
  95: ["Thunderstorm", "⛈"],
  96: ["Thunderstorm + slight hail", "⛈"],
  99: ["Thunderstorm + heavy hail", "⛈"],
};

const useWeather = () => {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  const fetchWeather = async (city) => {
    try {
      setError("");
      setWeather(null);

      // Geocoding
      const geoRes = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${city}`
      );
      const geoData = await geoRes.json();
      if (!geoData.results?.length) {
        setError("City not found");
        return;
      }

      const { latitude, longitude, name } = geoData.results[0];

      // Weather
      const weatherRes = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
      );
      const { current_weather } = await weatherRes.json();
      if (!current_weather) throw new Error();

      const [label, icon] = weatherCodeMap[current_weather.weathercode] || [
        "Unknown",
        "❓",
      ];

      setWeather({
        city: name,
        temperature: current_weather.temperature,
        windspeed: current_weather.windspeed,
        condition: label,
        icon,
      });
    } catch {
      console.error(error);
      setError("Failed to fetch weather");
      
    }
  };

  return { weather, error, fetchWeather };
};

export default useWeather;
