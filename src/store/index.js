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
    favorites({ favorites }) { return favorites },
    isFavorite({ currLocationWeather }) { return currLocationWeather.isFavorite }
  },
  mutations: {
    setCurrLocation(state, weather) {
      state.currLocationWeather = weather;
    },
    addFavorite(state, newFavorite) {
      newFavorite.IsFavorite = true
      state.favorites.push(newFavorite)
    },
    removeFavorite(state, locationId) {
      const idx = state.favorites.findIndex(f => {
        return f.Id === locationId
      });
      if (idx < 0) {
        return 'error'
      }
      state.favorites[idx].isFavorite = false
      state.favorites.splice(idx, 1);
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
