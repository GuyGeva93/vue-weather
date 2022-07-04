import Vue from "vue";
import Vuex from "vuex";
import { weatherService } from '@/services/weather-service';


Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currLocationWeather: null,
    favorites: [],
    isDarkMode: false,
    snackbar:
    {
      show: true,
      variant: 'success',
      message: 'Location added to the favorites!',
    }
  },
  getters: {
    currLocation({ currLocationWeather }) { return currLocationWeather },
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
    },
    isFavorites(state, locationCode) {
      if (!state.favorites) return false
      const idx = state.favorites.findIndex(favorite => {
        return favorite.LocationCode === locationCode
      })
      if (idx < 0) return false;
      return true;
    },
    removeFromFavorites(state, locationId) {
      
    },
    toggleDarkMode(state) {
      state.isDarkMode = !state.isDarkMode
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
