const apiKey = process.env.OPENWEATHER_API_KEY;

export async function  fetchWeather(location: string) {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`);
    const data = await response.json();
    return data;
}