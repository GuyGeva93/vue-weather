import Vue from 'vue';
import Vuex from 'vuex';
import { weatherService } from '@/services/weather-service';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currLocationWeather: null,
    favorites: [],
  },
  getters: {
    currLocation({ currLocationWeather }) {
      return currLocationWeather;
    },
    favorites({ favorites }) {
      return favorites;
    },
  },
  mutations: {
    setCurrLocation(state, weather) {
      state.currLocationWeather = weather;
    },
    addFavorite(state, favorite) {
      state.favorites.push(favorite);
    },
    removeFavorite(state, locationCode) {
      const idx = state.favorites.findIndex((f) => {
        return f.LocationCode === locationCode;
      });
      if (idx < 0) {
        return 'error';
      }
      state.favorites.splice(idx, 1);
    },
    isFavorite(state, locationCode) {
      const idx = state.favorites.findIndex(f => {
        return locationCode === f.LocationCode
      })
      if (idx < 0) {
        return false;
      } else return true;
    },
    setLocationName(state, locationName) {
      state.locationName = locationName;
    },
  },
  actions: {
    async fetchWeather({ commit }, { locationCode, locationName }) {
      try {
        if (!locationCode || !locationName) {
          const defWeather = await weatherService.getFiveDayForecast();
          commit('setCurrLocation', defWeather);
          return;
        }
        const weather = await weatherService.getFiveDayForecast(locationCode, locationName,);
        commit('setCurrLocation', weather);
      } catch (e) {
        console.log('Error =>', e);
      }
    },
    async toggleFavorite({ commit }, { locationCode }) {
      if (commit('isFavorite', locationCode)) {
        commit('removeFavorite', locationCode);
        return;
      }
      const favoriteToAdd = await weatherService.getCurrentWeather(locationCode);
      commit('addFavorite', favoriteToAdd);
    }
  },

});
