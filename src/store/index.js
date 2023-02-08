import Vue from "vue";
import Vuex from "vuex";
import pagination from "./modules/pagination";
import formdata from "./modules/formdata";

Vue.use(Vuex);


export default new Vuex.Store({
  modules: {
    formdata,
    pagination,
  }
});
