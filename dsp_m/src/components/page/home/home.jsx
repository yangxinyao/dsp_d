import React, { Component, Fragment } from "react"
import "./home.css"
import moment from "moment"
import http from "../../../tool/http.js"
import { Spin } from 'antd';
import { DatePicker } from 'antd';
const { RangePicker } = DatePicker;
class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: true
        }
        this.option = {
            xAxis: {
                type: 'category',
                data: [],
                boundaryGap: false,
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                data: [],
                type: 'line'
            }]
        }
        this.onChange = this.onChange.bind(this)
    }
    render() {
        return (
            <Fragment>

                <div className="loading_box">
                    <div className="date">
                        <RangePicker onChange={this.onChange} />
                    </div>
                    <div className="loading" style={{display: this.state.loading ? "block" : "none" }} delay={500}>
                        <Spin size="small" />
                        <Spin />
                        <Spin size="large" />
                    </div>
                    <div className="graph" ref="graph"></div>
                </div>

            </Fragment>
        )
    }
    componentDidMount() {
        let echartsInstance = echarts.init(this.refs.graph)
        this.echartsInstance = echartsInstance
        setTimeout(() => {
            this.setState({
                loading: false
            })
            this.setDate([moment().subtract(7, "day").format("YYYY/MM/DD"), moment().format("YYYY/MM/DD")])
            
        }, 1000);

        window.onresize = function () {
            echartsInstance.resize()
        }

    }
    onChange(date, dateString) {
        // console.log(date, dateString);
        this.setDate(dateString)
    }
    setDate(date) {
        let option = this.option;
        let a=moment(new Date(date[0]))
        let b=moment(new Date(date[1]))
        let d = b.diff(a,"days")
        let arr = []
        for (let i = 1; i <= d; i++) {
            arr.unshift(moment(new Date(date[1])).subtract(i, 'days').format("YYYY/MM/DD"))
        }
        http.post('/dsp-report/index', { count: d + 1 }).then((res) => {
            option.xAxis.data = arr
            option.series[0].data = res.data.dataY1

            this.echartsInstance.setOption(option)

        })
    }

}
export default Home