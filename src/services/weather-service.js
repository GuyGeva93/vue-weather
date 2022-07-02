import { apiKey } from '@/assets/api-key';
import { storageService } from './storage-service';
const axios = require('axios');
const DEFAULT_URL = 'http://dataservice.accuweather.com';
const TELAVIV_CODE = '215854';

export const weatherService = {
  getCurrentWeather,
  getFiveDayForecast,
  autoComplete
}

async function getDefaultLocation() {
  var defLocation = storageService.loadFromStorage('telaviv');
  if (!defLocation || !defLocation.length) {
    try {
      defLocation = getCurrentWeather(TELAVIV_CODE);

    } catch (e) {
      console.log('Error =>', e);

    }
  }
}

async function getCurrentWeather(locationCode) {
  try {
    const { data } = await axios.get(`${DEFAULT_URL}/currentconditions/v1/${locationCode}?apikey=${apiKey}&details=false`);
    console.log('Success', data);
  } catch (e) {
    console.log('Error =>', e);
  }
}
async function getFiveDayForecast(locationCode) {
  try {
    const res = await axios.get(`${DEFAULT_URL}/forecasts/v1/daily/5day/${locationCode}?apikey=${apiKey}&metric=true`);
    console.log('Success', res.data.DailyForecasts);
    return res.data.DailyForecasts
  } catch (e) {
    console.log('Error =>', e);
  }
}
async function autoComplete(query) {
  console.log('autocomplete', query)
  if (!query) return;
  try {
    const res = await axios.get(`${DEFAULT_URL}/locations/v1/cities/autocomplete?apikey=${apiKey}&q=${query}`);
    let cities = res.data.map(q => {
      let city = {
        [q.LocalizedName]: q.Key
      }
      return city
    })
    return cities
  } catch (e) {
    console.log('Error =>', e);
  }
}
