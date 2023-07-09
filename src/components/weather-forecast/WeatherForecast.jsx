import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";
import styles from "./weather-forecast.module.css";

const WEEK_DAYS = [
  "Воскресенье",
  "Понедельник",
  "Вторник",
  "Среда",
  "Четверг",
  "Пятница",
  "Суббота",
];

const WeatherForecast = ({ data }) => {
  const dayInAWeek = new Date().getDay();
  const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, dayInAWeek)
  );

  console.log(forecastDays);

  return (
    <>
      <label className={styles.label}>Прогноз на неделю</label>
      <Accordion allowZeroExpanded>
        {data.list.splice(0, 7).map((item, index) => (
          <AccordionItem key={item.dt + item.wind.speed}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className={styles.item}>
                  <img
                    className={styles.icon}
                    alt="weather"
                    src={`icons/${item.weather[0].icon}.png`}
                  />
                  <label className={styles.day}>{forecastDays[index]}</label>
                  <label className={styles.description}>
                    {item.weather[0].description.charAt(0).toUpperCase() +
                      item.weather[0].description.slice(1)}
                  </label>
                  <label className={styles.min_max}>
                    {Math.round(item.main.temp_min) +
                      "°С / " +
                      Math.round(item.main.temp_max) +
                      "°С"}
                  </label>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div className={styles.details_grid}>
                <div className={styles.details_grid_item}>
                  <label>Давление</label>
                  <label>{item.main.pressure} кПа</label>
                </div>
                <div className={styles.details_grid_item}>
                  <label>Влажность</label>
                  <label>{item.main.humidity} %</label>
                </div>
                <div className={styles.details_grid_item}>
                  <label>Облачность</label>
                  <label>{item.clouds.all} %</label>
                </div>
                <div className={styles.details_grid_item}>
                  <label>Скрость ветра</label>
                  <label>{item.wind.speed} м/с</label>
                </div>
                <div className={styles.details_grid_item}>
                  <label>Уровень моря</label>
                  <label>{item.main.sea_level} м</label>
                </div>
                <div className={styles.details_grid_item}>
                  <label>Ощущается как</label>
                  <label>{Math.round(item.main.feels_like)} °С</label>
                </div>
              </div>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
};

export default WeatherForecast;
