import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    favorites: [{},{},{}]
  },
  getters: {
    getFavorites({ favorites }) { return favorites }
  },
  mutations: {
    addFavorite({ state }, newFavorite) {
      state.favorites.push(newFavorite)
    }
  },
  actions: {},
  modules: {},
});
