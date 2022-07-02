import Vue from "vue";
import Vuex from "vuex";
import { weatherService } from '@/services/weather-service';


Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currLocationWeather: null,
    favorites: []
  },
  getters: {
    getFavorites({ favorites }) { return favorites }
  },
  mutations: {
    setCurrLocation({ state }, weather) {
      state.currLocationWeather = weather;
    },
    addFavorite({ state }, newFavorite) {
      state.favorites.push(newFavorite)
    }
  },
  actions: {
    async fetchWeather({ commit }, { locationCode }) {
      try {
        const weather = await weatherService.getFiveDayForecast(locationCode);
        commit('setCurrLocation', weather)
      } catch (e) {
        console.log('Error =>', e);
      }
    }
  },
  modules: {},
});
