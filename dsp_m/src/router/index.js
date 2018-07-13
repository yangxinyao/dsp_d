
//  import Home from "../components/page/home.jsx"
// import Plan from "../components/page/plan.jsx"
// import Until from "../components/page/until.jsx"
// import Idea from "../components/page/idea.jsx"
import { Redirect } from "react-router-dom"
import DataCenter from "../components/page/dataCenter.jsx"
import Index from "../components/index.jsx"
import ToolBox from "../components/page/toolBox.jsx"
import Login from "../components/login/login.jsx"
//
// import Account from "../components/page/account.jsx"
import Customer from "../components/page/customer.jsx"
//按需加载
import HeightCom from "../tool/loadable.jsx"
let routerBase = {
    routes: [
        {
            path: "/",
            component: () =><Redirect from="/" to="/index/home"></Redirect>,
            exact: true,
        },
        {
            path: "/index",
            component: Index,
            children: [
                {
                    path: "/index/home",
                    component: HeightCom(()=>import(/*webpackChunkName:"home"*/ '../components/page/home/home.jsx'))
                },

                {
                    path: "/index/plan",
                    component: HeightCom(() => import(/*webpackChunkName:"plan"*/ '../components/page/plan.jsx'))
                },
                {
                    path: "/index/until",
                    component: HeightCom(() => import(/*webpackChunkName:"until"*/ '../components/page/until.jsx'))
                },
                {
                    path: "/index/idea",
                    component: HeightCom(() => import(/*webpackChunkName:"idea"*/ '../components/page/idea.jsx'))
                },
                {
                    path: "/index/dataCenter",
                    component: DataCenter
                },
                {
                    path: "/index/toolBox",
                    component: ToolBox,
                    children: [
                        {
                            path: "/index/toolBox/account",
                            component: HeightCom(() => import(/*webpackChunkName:"account"*/ '../components/page/account.jsx'))
                        },
                        {
                            path: "/index/toolBox/customer",
                            component: Customer
                        }
                    ]
                },
            ]
        },

        {//登录
            path: "/login",
            component: Login
        },

    ]
}
let { routes } = routerBase
export { routes }
export default routerBase



