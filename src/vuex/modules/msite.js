/**
 * 对应msite功能模块的配置对象
 */
import {
  reqAddress,
  reqFoodCategorys,
  reqShops,
} from '../../api'

import {
  RECEIVE_ADDRESS,
  RECEIVE_SHOPS,
  RECEIVE_CATEGORYS,
} from '../mutation-types'

const state = {
  latitude: 40.10038, // 纬度
  longitude: 116.36867, // 经度
  address: {}, // 地址信息对象
  categorys: [], // 分类数组
  shops: [], //商家数组
}
const mutations = {
  [RECEIVE_ADDRESS](state, { address }) {
    state.address = address
  },
  [RECEIVE_SHOPS](state, { shops }) {
    state.shops = shops
  },
  [RECEIVE_CATEGORYS](state, { categorys }) {
    state.categorys = categorys
  },
}
const actions = {
    /**
   * 请求获取当前地址信息的异步action
   */
  async getAddress({ commit, state }, callback) {
    // 1. 发异步ajax请求
    const { longitude, latitude } = state
    const result = await reqAddress(longitude, latitude)
    // 2. 请求成功后, 提交mutation
    if (result.code === 0) {
      const address = result.data
      commit(RECEIVE_ADDRESS, { address })
      typeof callback === 'function' && callback()
    }
  },


  /**
   * 请求获取商品分类列表的异步action
   */
  async getCategorys({ commit, state }, callback) {
    // 1. 发异步ajax请求
    const result = await reqFoodCategorys()
    // 2. 请求成功后, 提交mutation
    if (result.code === 0) {
      const categorys = result.data
      commit(RECEIVE_CATEGORYS, { categorys })
      typeof callback === 'function' && callback()
    }
  },


  /**
   * 请求获取商家列表的异步action
   */
  async getShops({ commit, state }, callback) {
    // 1. 发异步ajax请求
    const { longitude, latitude } = state
    const result = await reqShops({ longitude, latitude })
    // 2. 请求成功后, 提交mutation
    if (result.code === 0) {
      const shops = result.data
      commit(RECEIVE_SHOPS, { shops })
      // 在commit()更新状态数据之后调用回调函数
      typeof callback === 'function' && callback()
    }
  },

}
const getters = {}

export default {
  state,
  mutations,
  actions,
  getters
}