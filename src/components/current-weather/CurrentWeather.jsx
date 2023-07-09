import styles from "./current-weather.module.css";

const CurrentWeather = () => {
  return (
    <div className={styles.weather}>
      <div className={styles.top}>
        <div className={styles}>
          <p className={styles.city}>Москва</p>
          <p className={styles.weather_description}>Солнечно</p>
        </div>
        <img className={styles.weather_icon} alt="Погода" src="icons/01n.png" />
      </div>
      <div className={styles.bottom}>
        <p className={styles.temperature}>18°С</p>
        <div className={styles.details}>
          <div className={styles.parameter_row}>
            <span className={styles.parameter_label}>Ощущается как</span>
            <span className={styles.parameter_value}>22°С</span>
          </div>
          <div className={styles.parameter_row}>
            <span className={styles.parameter_label}>Ветер</span>
            <span className={styles.parameter_value}>12 м/c</span>
          </div>
          <div className={styles.parameter_row}>
            <span className={styles.parameter_label}>Влажность</span>
            <span className={styles.parameter_value}>90%</span>
          </div>
          <div className={styles.parameter_row}>
            <span className={styles.parameter_label}>Давление</span>
            <span className={styles.parameter_value}>10 кПа</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
