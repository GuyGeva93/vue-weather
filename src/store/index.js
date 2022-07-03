import Vue from "vue";
import Vuex from "vuex";
import { weatherService } from '@/services/weather-service';


Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currLocationWeather: null,
    // locationName: null,
    favorites: null
  },
  getters: {
    currLocation({ currLocationWeather }) { return currLocationWeather },
    // locationName({locationName}){return locationName},
    favorites({ favorites }) { return favorites }
  },
  mutations: {
    setCurrLocation(state, weather) {
      state.currLocationWeather = weather;
    },
    addFavorite(state, newFavorite) {
      state.favorites.push(newFavorite)
    },
    setLocationName(state, locationName) {
      state.locationName = locationName;
    }
  },
  actions: {
    async fetchWeather({ commit }, { locationCode, locationName }) {
      try {
        if (!locationCode || !locationName) {
          const defWeather = await weatherService.getFiveDayForecast();
          commit('setCurrLocation', defWeather)
          return;
        }
        const weather = await weatherService.getFiveDayForecast(locationCode, locationName);
        commit('setCurrLocation', weather)
      } catch (e) {
        console.log('Error =>', e);
      }
    }
  },
  modules: {},
});
