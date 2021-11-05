import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import app from './modules/app' //公共
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    app
  },
  getters
})
