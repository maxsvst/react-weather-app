import Search from "./components/search/Search";
import styles from "./app.module.css";
import { useState } from "react";
import CurrentWeather from "./components/current-weather/CurrentWeather";

const App = () => {
  const [data, setData] = useState("");

  const handleSearchChange = (searchData) => {
    console.log(searchData);
  };

  return (
    <div className={styles.container}>
      <Search onSearchChange={handleSearchChange} />
      <CurrentWeather />
    </div>
  );
};

export default App;
