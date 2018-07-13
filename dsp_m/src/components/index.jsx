import React, { Component, Fragment } from "react"
import { Menu, Icon, Dropdown} from 'antd';
const SubMenu = Menu.SubMenu;
import { BrowserRouter as Router, Link } from "react-router-dom"
import ReactView from "../router/router.js"
import { delCookie} from "../tool/cookie.js"
class Index extends Component {
    constructor(props) {
        super(props)
        this.state = {
            collapsed: false,
            user:""
        }
        this.handleClick=this.handleClick.bind(this)
    }
    handleClick(e){
        if(e.key=="0"){
            delCookie("token")
            this.props.history.replace("/login")
        }
    }
    render() {
        let menu = (
            <Menu onClick={(e)=>{this.handleClick(e)}}>
                <Menu.Item key="0">退出登录</Menu.Item>
            </Menu>
        );
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
                <Dropdown overlay={menu}  >
                    <h2>{this.state.user} </h2>
                </Dropdown>
                    <ReactView routes={this.props.item || []} />
                </div>
            </Fragment>

        );
    }
    componentDidMount(){
        this.setState({
            user: localStorage.getItem("username")
        })
         console.log(this.state.user)
    }

}

export default Index