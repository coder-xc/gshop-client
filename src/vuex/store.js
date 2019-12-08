/**
 * vuex最核心管理对象模块: store
 */
import Vue from 'vue'
import Vuex from 'vuex'

import state from './state'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'
import msite from './modules/msite'
import user from './modules/user'
import shop from './modules/shop'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules: {
    msite,
    user,
    shop
  }
})

/**
 * 总state的结构: 
 * {
 *    : msite的state
 *    : user的state
 *    : shop的state
 * }
 */