/**
 * 对应shop功能模块的配置对象
 */
import Vue from 'vue'
import {
  reqGoods,
  reqInfo,
  reqRatings,
} from '../../api'

import {
  RECEIVE_GOODS,
  RECEIVE_INFO,
  RECEIVE_RATINGS,
  ADD_FOOD_COUNT,
  REDUCE_FOOD_COUNT
} from '../mutation-types'

const state = {
  goods: [], // 商品列表
  ratings: [], // 商家评价列表
  info: {}, // 商家信息
}
const mutations = {
  [RECEIVE_GOODS](state, { goods }) {
    state.goods = goods
  },
  [RECEIVE_INFO](state, { info }) {
    state.info = info
  },
  [RECEIVE_RATINGS](state, { ratings }) {
    state.ratings = ratings
  },
  [ADD_FOOD_COUNT](state, { food }) {
    if(!food.count) {
      // 给food添加一个新的属性: 属性名为count, 值为1
      // food.count = 1 // 不会自动更新界面: 新增加的属性没有数据绑定
      Vue.set(food, 'count', 1)
    } else {
      food.count++
    }
  },
  [REDUCE_FOOD_COUNT](state, { food }) {
    if(food.count > 0) {
      food.count--
    }
  },
}
const actions = {
  /**
   * 异步获取商家信息
   */
  async getShopInfo({ commit }, callback) {
    const result = await reqInfo()
    if (result.code === 0) {
      const info = result.data
      commit(RECEIVE_INFO, { info })
      typeof callback === 'function' && callback()
    }
  },

  /**
   * 异步获取商家评价列表
   */
  async getShopRatings({ commit }, callback) {
    const result = await reqRatings()
    if (result.code === 0) {
      const ratings = result.data
      commit(RECEIVE_RATINGS, { ratings })
      typeof callback === 'function' && callback()
    }
  },

  /**
   * 异步获取商家商品列表
   */
  async getShopGoods({commit}, callback) {
    const result = await reqGoods()
    if(result.code === 0) {
      const goods = result.data
      commit(RECEIVE_GOODS, { goods })
      typeof callback === 'function' && callback()
    }
  },

  /**
   * 更新food数量的同步action
   */
  updateFoodCount({commit}, { isAdd, food }) {
    if(isAdd) {
      commit(ADD_FOOD_COUNT, { food })
    } else {
      commit(REDUCE_FOOD_COUNT, { food })
    }
  }

}
const getters = {}

export default {
  state,
  mutations,
  actions,
  getters
}