import React, { useEffect, useState } from "react";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import { WeatherData } from "../server-side/mappers/weather";


function ClientSideRendering() {
  const [weather, setWeather] = useState<WeatherData>({});

  useEffect(() => {
    fetch("/api/weather?location=London")
      .then((response) => response.json())
      .then((data) => {
        setWeather(data);
      });
  }, []);

  return (
    <main className={styles.main}>
      <h1>Client Side Rendering</h1>
      <Link href="/">
        <a>Back</a>
      </Link>
      <h2>London</h2>
      <p>
        Temperature:
        <span className={styles.temperature}>
            {weather.temperature ? `${Math.floor(weather.temperature)} °C` : "-"}
        </span>
      </p>
    </main>
  );
}

export default ClientSideRendering;
