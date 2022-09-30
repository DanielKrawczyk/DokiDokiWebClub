import Vue from "vue";
import Vuex from "vuex";

let player = "";

if ("dokidoki-playername" in localStorage) {
  player = JSON.parse(localStorage.getItem("dokidoki-playername") as string);
}

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    PlayerName: player,
    Assets: {
      Images: {

      },
      Audio: []
    },
    BlackScreen: false,
  },
  mutations: {
    ChangeName(state, NewName) {
      state.PlayerName = NewName;
    },
    BlackScreenState(state, value) {
      state.BlackScreen = value;
    }
  },
  actions: {},
  modules: {},
});
