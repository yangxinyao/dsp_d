import React, { Component } from "react"
import {
    Switch,
    Route,
    Redirect
} from "react-router-dom"
 import { getCookie } from "../tool/cookie.js"
// function getCookie(){
//     return true
// }
class ReactView extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        let { routes } = this.props
        // console.log(routes)
        return <Switch>
            {
                routes.map((item, index) => {
                    return <Route exact={item.exact || false} path={item.path} render={() => {
                        if (item.path == "/login" || getCookie("token")) {
                            return <item.component item={item.children} render={() => {
                                return <item.children items={item.children.children}></item.children>
                            }} ></item.component>
                        } else {
                            return <Redirect to="/login"></Redirect>
                        }

                    }} key={index}></Route>
                })

            }
        </Switch>

    }



}
export default ReactView