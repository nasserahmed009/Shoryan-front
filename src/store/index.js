import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    baseApiUrl: "https://localhost:5001/api/",
    baseUrl: "https://localhost:5001/",
    user: JSON.parse(localStorage.getItem("user")) || null,
    cartListingsIds: []
  },
  getters: {
    loggedIn(state) {
      return state.user != null;
    }
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
      localStorage.setItem("user", JSON.stringify(user));
    },
    setCartListingsIds(state, cartListingsIds) {
      state.cartListingsIds = cartListingsIds;
    }
  },
  actions: {
    async login({ state, commit }, credentials) {
      let resposnse = await axios.post(state.baseApiUrl + "login", credentials);
      const user = resposnse.data[0];
      commit("setUser", user);
    },
    async logout({ commit }) {
      localStorage.removeItem("user");
      commit("setUser", null);
    },
    addCartListingId({ state, commit }, listingId) {
      let cartListingsIds = state.cartListingsIds;
      cartListingsIds.push(listingId);
      commit("setCartListingsIds", cartListingsIds);
    }
  }
});
