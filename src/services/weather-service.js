import { apiKey } from '@/assets/api-key';
import { storageService } from './storage-service';
const axios = require('axios');
const DEFAULT_URL = 'http://dataservice.accuweather.com';

export const weatherService = {
  getCurrentWeather,
  getFiveDayForecast
}

async function getCurrentWeather() {
  try {
    const { data } = await axios.get(`${DEFAULT_URL}/currentconditions/v1/215854?apikey=${apiKey}&details=false`);
    console.log('Success', data);
  } catch (e) {
    console.log('Error =>', e);
  }
}
async function getFiveDayForecast() {
  try {
    const res = storageService.loadFromStorage('telaviv');
    if (!res || !res.length) {
      const res = await axios.get(`${DEFAULT_URL}/forecasts/v1/daily/5day/215854?apikey=${apiKey}&metric=true`);
      console.log('Success', res.data.DailyForecasts);
      return res.data.DailyForecasts
    }
    return res
  } catch (e) {
    console.log('Error =>', e);
  }
}
