
//  import Home from "../components/page/home.jsx"
// import Plan from "../components/page/plan.jsx"
// import Until from "../components/page/until.jsx"
// import Idea from "../components/page/idea.jsx"
 import DataCenter from "../components/page/dataCenter.jsx"
import Index from "../components/index.jsx"
import ToolBox from "../components/page/toolBox.jsx"
import Login from "../components/login/login.jsx"
//
import Account from "../components/page/account.jsx"
import Customer from "../components/page/customer.jsx"
//按需加载
import HeightCom from "../tool/loadable.jsx"
let routerBase = {
    routes: [
        {
            path: "/",
            component: Index,
            exact: true,
        },
        {
            path: "/index",
            component: Index,
            children: [
                {
                    path: "/index/home",
                    component: HeightCom("page/home/home"),
                },

                {
                    path: "/index/plan",
                    component: HeightCom("page/plan")
                },
                {
                    path: "/index/until",
                    component: HeightCom("page/until")
                },
                {
                    path: "/index/idea",
                    component: HeightCom("page/idea")
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
                            component: Account
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



