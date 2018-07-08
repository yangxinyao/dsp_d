import React, { Component } from "react"
import {
    Switch,
    Route
} from "react-router-dom"
class ReactView extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        let { routes } = this.props
        console.log(this.props)
        // console.log(routes)
        return <Switch>
            {
                routes.map((item, index) => {
                    return <Route exact={item.exact || false} path={item.path} render={()=>{
                        return <item.component item={item.children}></item.component>
                    }} key={index}></Route>
                })

            }
        </Switch>

    }



}
export default ReactView