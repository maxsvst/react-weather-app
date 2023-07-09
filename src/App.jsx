import Search from "./components/search/Search";
import styles from "./app.module.css";
import { useState } from "react";
import CurrentWeather from "./components/current-weather/CurrentWeather";
import { GeoService } from "./services/geo.service";
import WeatherForecast from "./components/weather-forecast/WeatherForecast";

const App = () => {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [weatherForecast, setWeatherForecast] = useState(null);

  const handleSearchChange = async (searchData) => {
    const [lat, lon] = searchData.value.split(" ");

    setCurrentWeather({
      city: searchData.label,
      ...(await GeoService.getWeatherByCity(lat, lon)),
    });
    
    setWeatherForecast({
      city: searchData.label,
      ...(await GeoService.getWeatherForecast(lat, lon)),
    });
  };

  return (
    <div className={styles.container}>
      <Search onSearchChange={handleSearchChange} />
      {currentWeather && <CurrentWeather data={currentWeather} />}
      {weatherForecast && <WeatherForecast data={weatherForecast} />}
    </div>
  );
};

export default App;
