import { GetterTree, Module } from "vuex";
import { RootState } from "@/store/rootState";

export interface PostState {
  _id: string;
  created_at: string;
  title: string;
  content: string;
  source: string;
  url: string;
  categories: string[];
  tags: string[];
  raw_html: string;
  published_at: string;
}

export interface PostModuleState {
  list: PostState[];
}

const getters: GetterTree<PostModuleState, RootState> = {
  testMessage(): string {
    return "This is a test message for getters.";
  },
};

const module: Module<PostModuleState, RootState> = {
  namespaced: true,
  state: {
    list: [],
  },
  getters,
};

export default module;
