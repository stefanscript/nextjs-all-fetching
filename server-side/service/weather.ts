import { mapWeather, WeatherData } from "../mappers/weather";
import { fetchWeather } from "../network/weather";

export async function  getWeather(location: string):Promise<WeatherData> {
    const data = await fetchWeather(location);

    return mapWeather(data);
}


