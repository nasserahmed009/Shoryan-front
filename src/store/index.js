import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    baseApiUrl: "https://localhost:5001/api/",
    user: JSON.parse(localStorage.getItem("user")) || null
  },
  getters: {
    loggedIn(state) {
      return state.user != null;
    }
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    }
  },
  actions: {
    async login({ state, commit }, credentials) {
      let resposnse = await axios.post(state.baseApiUrl + "login", credentials);
      const user = resposnse.data[0];
      localStorage.setItem("user", JSON.stringify(user));
      commit("setUser", user);
    },
    async logout({ commit }) {
      localStorage.removeItem("user");
      commit("setUser", null);
    }
  }
});
