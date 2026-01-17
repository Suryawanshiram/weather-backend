import axios from "axios";

const API_KEY = process.env.OPENWEATHER_API_KEY;
const BASE_URL = "https://api.openweathermap.org/data/2.5";

export async function getCurrentWeather(city) {
  const { data } = await axios.get(`${BASE_URL}/weather`, {
    params: { q: city, appid: API_KEY, units: "metric" },
  });

  return {
    location: {
      city: data.name,
      country: data.sys.country,
    },
    current: {
      tempC: data.main.temp,
      feelsLikeC: data.main.feels_like,
      condition: data.weather[0].main,
      humidity: data.main.humidity,
      windKph: +(data.wind.speed * 3.6).toFixed(1),
      updatedAt: new Date(data.dt * 1000).toISOString(),
    },
  };
}

export async function getForecast(city) {
  const { data } = await axios.get(`${BASE_URL}/forecast`, {
    params: { q: city, appid: API_KEY, units: "metric" },
  });

  return {
    location: {
      city: data.city.name,
      country: data.city.country,
    },
    forecast: data.list.slice(0, 5).map((item) => ({
      time: new Date(item.dt * 1000).toISOString(),
      tempC: item.main.temp,
      condition: item.weather[0].main,
    })),
  };
}
