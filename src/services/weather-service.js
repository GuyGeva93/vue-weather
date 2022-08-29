import { apiKey } from '@/assets/api-key';
import { v4 as uuidv4 } from 'uuid';

const axios = require('axios');
const DEFAULT_URL = 'https://dataservice.accuweather.com';
const TELAVIV_CODE = '215854';

export const weatherService = {
  getCurrentWeather,
  getFiveDayForecast,
  autoComplete,
};

async function getCurrentWeather(locationCode, locationName) {
  try {
    const res = await axios.get(
      `${DEFAULT_URL}/currentconditions/v1/${locationCode}?apikey=${apiKey}&details=false`
    );
    res.data[0].LocationCode = locationCode;
    res.data[0].LocationName = locationName;
    return res.data;
  } catch (e) {
    console.log('Error =>', e);
  }
}

async function getFiveDayForecast(locationCode = TELAVIV_CODE, locationName = 'Tel Aviv',) {
  try {
    let location = await axios.get(
      `${DEFAULT_URL}/forecasts/v1/daily/5day/${locationCode}?apikey=${apiKey}&metric=true`
    );
    location.data.DailyForecasts[0].Id = uuidv4();
    location.data.DailyForecasts[0].LocationName = locationName;
    location.data.DailyForecasts[0].LocationCode = locationCode;
    return location.data.DailyForecasts;
  } catch (e) {
    console.log('Error =>', e);
  }
}
async function autoComplete(query) {
  if (!query) return;
  try {
    const res = await axios.get(
      `${DEFAULT_URL}/locations/v1/cities/autocomplete?apikey=${apiKey}&q=${query}`
    );
    let locations = res.data.map((q) => {
      let city = {
        [q.Key]: q.LocalizedName,
      };
      return city;
    });
    return locations;
  } catch (e) {
    console.log('Error =>', e);
  }
}
