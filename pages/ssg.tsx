import React, { useEffect, useState } from "react";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import { WeatherData } from "../server-side/mappers/weather";
import { getWeather } from "../server-side/service/weather";
import { GetServerSidePropsContext, GetStaticProps } from "next";

interface Props {
    location: string,
    weather: WeatherData
}

const ServerSideGeneration:React.FC<Props> = ({location, weather}) => {
  return (
    <main className={styles.main}>
      <h1>Server Side Generation</h1>
      <Link href="/">
        <a>Back</a>
      </Link>
      <h2>{location}</h2>
      <p>
        Temperature:
        <span className={styles.temperature}>
            {weather.temperature ? `${Math.floor(weather.temperature)} °C` : "-"}
        </span>
      </p>
    </main>
  );
}

export async function getStaticProps(ctx: GetStaticProps){
    const location = "London";
    const weather = await getWeather(location);

    return {
        props:{
            weather,
            location
        }
    }
}

export default ServerSideGeneration;
