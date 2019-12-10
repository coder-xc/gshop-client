/**
 * 路由器对象模块
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
import store from '../vuex/store'
Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes
})

/**
 * 功能1: 进入a/b必须登陆, 如果没有登陆自动跳转到登陆
 */
const paths = ['/a', '/b'] // 需要进行登录检查的path的数组

// 定义全局前置守卫
router.beforeEach((to, from, next) => {
    // console.log('全局前置守卫', to, from)
    // 如果目标path在paths中, 但用户没有登录, 自动跳转到login
    if (paths.indexOf(to.path) !== -1 && !store.state.user.token) {
        next('/login')
    } else {
        // 其他情况放行
        next()
    }

})


export default router