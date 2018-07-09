import React, { Component } from "react"
import "./home.css"
import moment from "moment"
class Home extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="graph" ref="graph"></div>
        )
    }
    componentDidMount() {
        let echartsInstance = echarts.init(this.refs.graph)
        let date = new Date()
        console.log(moment().month(date.getMonth()).format("YYYY-MM-DD"))
        console.log(moment([2018, 7, 9]).subtract(7, 'days').format("YYYY/MM/DD"))
        let arr = []
        for (let i = 1; i <= 7; i++) {
            arr.unshift(moment().subtract(i, 'days').format("YYYY/MM/DD"))
        }
        let option = {
            xAxis: {
                type: 'category',
                data: arr
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                data: [820, 932, 901, 934, 1290, 1330, 1320],
                type: 'line'
            }]
        };
        echartsInstance.setOption(option)
        window.onresize = function () {
            echartsInstance.resize()
        }
    }

}
export default Home