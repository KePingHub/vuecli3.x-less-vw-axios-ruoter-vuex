// https://vuex.vuejs.org/zh-cn/intro.html
// make sure to call Vue.use(Vuex) if using a module system
import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import isNeedRefresh from './modules/isNeedRefresh'
import {
  MODULE_USER,
  MODULE_IS_NEED_REFRESH
} from './moduleNames'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    [MODULE_USER]: {
      namespaced: true,
      ...user
    },
    [MODULE_IS_NEED_REFRESH]: isNeedRefresh
  }
})

export default store
