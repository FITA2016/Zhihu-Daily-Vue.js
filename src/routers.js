import Vue from 'vue'
import VueRouter from 'vue-router'
import Root from './Root'
import App from './pages/App'
import Description from './components/Description'
import NewsDetail from './pages/NewsDetail'
import Themes from './pages/Themes'
import ThemeList from './pages/ThemeList'

Vue.use(VueRouter)

const routers = [{
    path: '/',
    component: App
},{
    path: '/description',
    component :Description
},{
    path: '/news-detail/:id',
    name: 'news-detail',
    component: NewsDetail
},{
    path: '/themes',
    component: Themes
},{
    path: '/themes-list/:id',
    name: 'themes-list',
    component: ThemeList
}]

export const router = new VueRouter({
    mode: 'history',
    routes: routers,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return { x: 0, y: 0 }
        }
    }
})
