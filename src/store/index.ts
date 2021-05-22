import Vue from "vue";
import Vuex, { StoreOptions } from "vuex";
import posts from "./posts";
import { rootState, RootState } from "@/store/rootState";

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
  state: rootState,
  mutations: {},
  actions: {},
  modules: {
    posts,
  },
};

export default new Vuex.Store<RootState>(store);
