import styles from "./current-weather.module.css";

const CurrentWeather = ({ data }) => {
  return (
    <div className={styles.weather}>
      <div className={styles.top}>
        <div className={styles.middle}>
          <p className={styles.city}>{data.city.split(",")[0]}</p>
          <p className={styles.weather_description}>
            {data.weather[0].description.charAt(0).toUpperCase() +
              data.weather[0].description.slice(1)}
          </p>
        </div>
        <img
          className={styles.weather_icon}
          alt="Погода"
          src={`icons/${data.weather[0].icon}.png`}
        />
      </div>
      <div className={styles.bottom}>
        <p className={styles.temperature}>{Math.round(data.main.temp)}°С</p>
        <div className={styles.details}>
          <div className={styles.parameter_row}>
            <span className={styles.parameter_label}>Ощущается как</span>
            <span className={styles.parameter_value}>
              {Math.round(data.main.feels_like)}°С
            </span>
          </div>
          <div className={styles.parameter_row}>
            <span className={styles.parameter_label}>Ветер</span>
            <span className={styles.parameter_value}>
              {data.wind.speed} м/c
            </span>
          </div>
          <div className={styles.parameter_row}>
            <span className={styles.parameter_label}>Влажность</span>
            <span className={styles.parameter_value}>
              {data.main.humidity} %
            </span>
          </div>
          <div className={styles.parameter_row}>
            <span className={styles.parameter_label}>Давление</span>
            <span className={styles.parameter_value}>
              {data.main.pressure} кПа
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
