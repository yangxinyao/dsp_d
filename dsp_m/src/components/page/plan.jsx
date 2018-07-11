import React, { Component } from "react"
import http from "../../tool/http.js"
class Plan extends Component {
    constructor(props) {
        super(props)

    }
    render() {

        return (
            <h1>
                this is Plan
            </h1>
        )

    }
    componentDidMount(){
        http.post('/dsp-report/index',{}).then(res => {
            console.log(res)
        })
    }

}
export default Plan