import React from "react";
import { WeatherData } from "../server-side/mappers/weather";
import styles from "../styles/Home.module.css";

interface Props {
    weather: WeatherData
}

const Temperature:React.FC<Props> = ({weather}) => {
  return (
    <p>
      Temperature:
      <span className={styles.temperature}>
        {weather.temperature ? `${Math.floor(weather.temperature)} °C` : "-"}
      </span>
    </p>
  );
}

export default Temperature;