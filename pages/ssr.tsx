import React, { useEffect, useState } from "react";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import { WeatherData } from "../server-side/mappers/weather";
import { getWeather } from "../server-side/service/weather";
import { GetServerSidePropsContext } from "next";

interface Props {
    location: string,
    weather: WeatherData
}

const ServerSideRendering:React.FC<Props> = ({location, weather}) => {
  return (
    <main className={styles.main}>
      <h1>Server Side Rendering</h1>
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

export async function getServerSideProps(ctx: GetServerSidePropsContext){
    const location = ctx.query.location ?? "London";
    const weather = await getWeather(location as string);

    return {
        props:{
            weather,
            location
        }
    }
}

export default ServerSideRendering;
