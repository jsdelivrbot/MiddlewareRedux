
const API_KEY = '42a0ed0c49a0092f17154897c6c04bcb';
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather() {
  return {
    type: FETCH_WEATHER
  };
}
