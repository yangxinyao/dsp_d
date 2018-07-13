import React, { Component } from "react"
import http from "../../tool/http.js"
import { Table } from "antd"
class Plan extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dataSource: []
        }
    }
    render() {
        const columns = [{
            title: '计划ID',
            dataIndex: 'key'
        }, {
            title: '计划名称',
            dataIndex: 'name'
        }, {
            title: '投放目的',
            dataIndex: 'promotionType'
        }, {
            title: '日预算',
            dataIndex: 'dayBudget'
        },
        {
            title: '今日消耗',
            dataIndex: 'clickPrice'
        },
        {
            title: '总消耗',
            dataIndex: 'consumed',
            key: 'consumed',
        },
        {
            title: '曝光量',
            dataIndex: 'exposeNum'
        },
        {
            title: '点击量',
            dataIndex: 'clickNum'
        },
        {
            title: '点击率',
            dataIndex: 'clickRate'
        },
        {
            title: '状态',
            dataIndex: 'status'
        },
        {
            title: 'Action',
            render: () => <span>删除</span>,
        }];
        return (
            <Table dataSource={this.state.dataSource} columns={columns} />
        )

    }
    componentDidMount() {
        http.post('/dsp-advert/campaigns/list').then((res) => {
            console.log(res)
            this.setState({
                dataSource: res.data.list
            })
        })
    }

}
export default Plan