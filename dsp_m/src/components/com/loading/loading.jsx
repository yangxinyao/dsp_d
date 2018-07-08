import React, { Component } from "react"
import loadSvg from "../../../assets/circles.svg"
import "./loading.css"
class Loading extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cls: "mark"
        }
    }
    render() {
        let { spining } = this.props
        if (spining) {
            return (
                <div className={this.state.cls}>
                    <img src={loadSvg} />
                </div>)
        }else{
            return <div></div>
        }
    }
    componentDidMount() {
        this.setState({
            cls: "mark active"
        })
    }
    componentWillUnmount() {
        this.setState({
            cls: "mark"
        })
    }


}
export default Loading