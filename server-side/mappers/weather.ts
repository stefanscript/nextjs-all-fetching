export interface WeatherData {
    temperature?: number
}

export function mapWeather(data: any): WeatherData {
    return {
        temperature: data.main.temp
    }
}