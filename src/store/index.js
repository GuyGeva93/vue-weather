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
    isFavorite({ favorites, currLocationWeather }) {
      const idx = favorites.findIndex(fav => {
        return fav[0].LocationCode === currLocationWeather[0].LocationCode
      })
      if (idx < 0) return false;
      return true;
    }
  },
  mutations: {
    setCurrLocation(state, weather) {
      state.currLocationWeather = weather;
    },
    addFavorite(state, favorite) {
      state.favorites.push(favorite);
    },
    removeFavorite(state, locationCode) {
      const idx = state.favorites.findIndex((fav) => {
        return fav.LocationCode === locationCode;
      });
      if (idx < 0) {
        return 'error';
      }
      state.favorites.splice(idx, 1);
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
    async toggleFavorite({ commit }, { locationCode, locationName }) {
      if (commit('isFavorite', locationCode)) {
        commit('removeFavorite', locationCode);
        return;
      }
      const favoriteToAdd = await weatherService.getCurrentWeather(locationCode, locationName);
      commit('addFavorite', favoriteToAdd);
    }
  },

});
