
//  import Home from "../components/page/home.jsx"
// import Plan from "../components/page/plan.jsx"
// import Until from "../components/page/until.jsx"
// import Idea from "../components/page/idea.jsx"
// import DataCenter from "../components/page/dataCenter.jsx"

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
            path: "/home",
            component: HeightCom("home"),
        },

        {
            path: "/plan",
            component: HeightCom("plan")
        },
        {
            path: "/until",
            component: HeightCom("until")
        },
        {
            path: "/idea",
            component: HeightCom("idea")
        },
        {
            path: "/dataCenter",
            component: HeightCom("dataCenter")
        },
        {
            path: "/toolBox",
            component: ToolBox,
            children: [
                {
                    path: "/toolBox/account",
                    component: Account
                },
                {
                    path: "/toolBox/customer",
                    component: Customer
                }
            ]
        },
        {//登录
            path: "/login",
            component: Login
        },  
    ],
    




}
let { routes } = routerBase
export { routes }
export default routerBase



