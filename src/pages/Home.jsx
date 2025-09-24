import { useState } from "react";
import SearchBar from "../components/SearchBar";
import WeatherCard from "../components/WeatherCard";
import ErrorMessage from "../components/ErrorMessage";
import useWeather from "../hooks/useWeather";

import "../styles/App.css";
import "../styles/SearchBar.css";
import "../styles/WeatherCard.css";
import "../styles/ErrorMessage.css";

const Home = () => {
  const { weather, error, fetchWeather } = useWeather();
  const [darkMode, setDarkMode] = useState(false);

  // Function to reset app
  const resetApp = () => {
    window.location.reload(); // simple way to refresh everything
  };

  return (
    <div className={darkMode ? "dark-mode app-container" : "light-mode app-container"}>
      {/* Header with logo + toggle */}
      <div className="app-header">
        <h1 className="app-title" onClick={resetApp} style={{ cursor: "pointer" }}>
          WeatherNow<sup>™</sup>
        </h1>
        <button className="theme-toggle" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "☀️" : "🌙"}
        </button>
      </div>

      {/* Search bar */}
      <SearchBar onSearch={fetchWeather} />

      {/* Error and Weather */}
      <ErrorMessage message={error} />
      <WeatherCard weather={weather} />
    </div>
  );
};

export default Home;
