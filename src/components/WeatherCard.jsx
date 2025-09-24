const WeatherCard = ({ weather }) => {
  if (!weather) return null;

  return (
    <div className="weather-card">
      <div className="icon">{weather.icon}</div>
      <div className="info">
        <div className="city">{weather.city}</div>
        <div className="temperature">{weather.temperature}°C</div>
        <div className="condition">{weather.condition}</div>
        <div className="windspeed">💨 {weather.windspeed} km/h</div>
      </div>
    </div>
  );
};

export default WeatherCard;
