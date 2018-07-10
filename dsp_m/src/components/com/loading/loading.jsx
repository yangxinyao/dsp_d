import React, { Component } from "react"
import loadSvg from "../../../assets/circles.svg"
import "./loading.css"
class Loading extends Component {
    render() {
        return (
            <div className="mark">
            <img src={loadSvg}  />  
        </div>)
    }


}
export default Loading