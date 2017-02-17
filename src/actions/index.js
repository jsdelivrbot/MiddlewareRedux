const API_KEY = '42a0ed0c49a0092f17154897c6c04bcb';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`
  const request = axios.get(url);
  return {
    type: FETCH_WEATHER
    payload: request
  };
}
