import axios from "axios";
import Vue from "vue";
import Vuex from "vuex";
import { normalizeString } from "../utils/normalize";

Vue.use(Vuex);

const state = {
  search: "",
  isLoading: false,
  result: {},
};

const mutations = {
  UPDATE_SEARCH(state, search) {
    state.search = search;
  },
  RESET_SEARCH(state) {
    state.search = "";
  },
  SET_RESULT(state, result) {
    state.result = result;
  },
  SET_ISLOADING(state, value) {
    state.isLoading = value;
  },
  SET_ERROR(state, value) {
    state.error = value;
  },
};

const actions = {
  updateSearch({ commit }, value) {
    commit("UPDATE_SEARCH", value);
  },
  resetSearch({ commit }) {
    commit("RESET_SEARCH");
  },
  async getCompanyInfos({ commit, state }) {
    commit("SET_ISLOADING", true);
    try {
      const response = await axios.get(
        `${
          process.env.VUE_APP_API_URL
        }/company/societedotcom?name=${normalizeString(state.search)}`
      );
      commit("SET_RESULT", response.data);
    } catch (error) {
      commit("SET_ERROR", error);
    }
    commit("SET_ISLOADING", false);
  },
};

export default new Vuex.Store({
  state,
  actions,
  mutations,
});
