// import Msite from '@/pages/Msite/Msite.vue'
// import Order from 'pages/Order/Order.vue'
// import Search from '../pages/Search/Search.vue'
// import Profile from '../pages/Profile/Profile.vue'

/**
 * import(): 动态导入模块, 它会对被导入的模块进行单独打包 (code split)
 * 定义的组件为一个返回promise的函数: 第一次请求路由对应的路径时会请求后台获取对应的路由打包文件
 */
const Msite = () => import('@/pages/Msite/Msite.vue')
const Order = () => import('@/pages/Order/Order.vue')
const Search = () => import('@/pages/Search/Search.vue')


import Login from '../pages/Login/Login.vue'
import Shop from '../pages/Shop/Shop.vue'
import Goods from '../pages/Shop/Goods.vue'
import Ratings from '../pages/Shop/Ratings.vue'
import Info from '../pages/Shop/Info.vue'

import A from '../pages/test/A.vue'
import B from '../pages/test/B.vue'
import B1 from '../pages/test/B1.vue'
import B2 from '../pages/test/B2.vue'

export default [
    {
        path: '/',
        redirect: '/msite',
    },
    {
        path: '/msite',
        component: Msite,
        meta: {
            isShowFooter: true
        }
    },
    {
        path: '/search',
        component: Search,
        meta: {
            isShowFooter: true
        }
    },
    {
        path: '/order',
        component: Order,
        meta: {
            isShowFooter: true
        }
    },
    {
        path: '/profile',
        component: () => import('@/pages/Profile/Profile.vue'),
        meta: {
            isShowFooter: true
        }
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/shop',
        component: Shop,
        children: [
            {
                path: '/shop/goods',
                component: Goods
            },
            {
                path: '/shop/ratings',
                component: Ratings
            },
            {
                path: '/shop/info',
                component: Info
            },
            {
                path: '',
                redirect: '/shop/goods'
            },
        ]
    },
    {
        path: '/a',
        component: A
    },
    {
        path: '/b',
        component: B,
        children: [
            {
                path: '/b/b1',
                component: B1
            },
            {
                path: '/b/b2',
                component: B2
            },
        ]
    },
    
]