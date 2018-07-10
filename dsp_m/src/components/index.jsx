import React, { Component, Fragment } from "react"
import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;
import { BrowserRouter as Router, Link } from "react-router-dom"
import ReactView from "../router/router.js"
class Index extends Component {
    constructor(props) {
        super(props)
        this.state = {
            collapsed: false
        }
    }
    render() {
        return (
            <Fragment>
                {/* 左侧导航 */}
                <div style={{ width: "240px", height: "100%" }}>
                    <Menu style={{ height: "100%" }}
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        mode="inline"
                        theme="dark"
                        inlineCollapsed={this.state.collapsed}>
                        <Menu.Item key="1">
                            <Icon type="pie-chart" />
                            <span><Link to="/index/home">首页</Link></span>
                        </Menu.Item>
                        <SubMenu key="sub1" title={<span><Icon type="mail" /><span>广告管理</span></span>}>
                            <Menu.Item key="5"><Link to="/index/plan">广告计划</Link></Menu.Item>
                            <Menu.Item key="6"><Link to="/index/until">广告单元</Link></Menu.Item>
                            <Menu.Item key="7"><Link to="/index/idea">广告创意</Link></Menu.Item>
                        </SubMenu>
                        <Menu.Item key="2">
                            <Icon type="desktop" />
                            <span><Link to="/index/dataCenter">数据中心</Link></span>
                        </Menu.Item>
                        <SubMenu key="sub2" title={<span><Icon type="mail" /><span><Link to="/index/toolBox">工具箱</Link></span>></span>}>
                            <Menu.Item key="8"><Link to="/index/toolBox/account">账号管理</Link></Menu.Item>
                            <Menu.Item key="9"><Link to="/index/toolBox/customer">客户管理</Link></Menu.Item>
                        </SubMenu>

                    </Menu>
                </div>
                {/* 右侧内容 */}
                <div className="right">
                    <ReactView routes={this.props.item || []} />
                </div>
            </Fragment>

        );
    }

}
export default Index