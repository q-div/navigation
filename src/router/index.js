//配置路由相关的信息
import VueRouter from 'vue-router'
import Vue from 'vue'

const ShouYe = () =>
    import ('../views/home/childCopms/ShouYe')
const GuanYu = () =>
    import ('../views/home/childCopms/GuanYu')
const KaiFa = () =>
    import ('../views/home/childCopms/KaiFa')
const QianBao = () =>
    import ('../views/home/childCopms/QianBao')
const Lam = () =>
    import ('../views/home/childCopms/Lam')
const JiShu = () =>
    import ('../views/home/childCopms/JiShu')
const GongGao = () =>
    import ('../views/home/childCopms/GongGao')
const ZhongWen = () =>
    import ('../views/home/childCopms/ZhongWen')

//1.通过Vue.use(插件),安装插件
Vue.use(VueRouter)

// 2.创建VueRouter对象
const routes = [{
        path: '',
        //redirect重定向
        redirect: ShouYe
    },
    {
        path: '/home',
        component: ShouYe
    },
    {
        path: '/about',
        component: GuanYu
    },
    {
        path: '/developer',
        component: KaiFa
    },
    {
        path: '/walletpages',
        component: QianBao
    },
    {
        path: '/ecology',
        component: Lam
    },
    {
        path: '/technologies',
        component: JiShu
    },
    {
        path: '/technologies01',
        component: GongGao
    },
    {
        path: '/technologies02',
        component: ZhongWen
    }
]
const router = new VueRouter({
    //配置路由和组件之间的应用关系
    routes,
    mode: 'history',
    linkActiveClass: 'active'
})

// 3.将router对象传入到vue实例
export default router