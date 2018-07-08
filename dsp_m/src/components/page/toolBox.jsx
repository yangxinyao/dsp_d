import React, { Component } from "react"
import RouterView from "../../router/router.js"
class ToolBox extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        console.log(this.props.item)
        return (
            <RouterView  routes={this.props.item}/>
        )
    }

}
export default ToolBox