import React, { Component } from 'react';
import "./login.css"
import config from "../../router/index.js"
import ReactView from "../../router/router.js"
class Login extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="login_bg">
                <div className="login">
                    <div className="inp_box">
                        <p className="login_inp"><span>手机号:</span><input type="text" placeholder="请输入用户名" /></p>
                        <p className="login_inp"><span>密码:</span><input type="text" placeholder="请输入密码" /></p>
                    </div>
                    <div className="login_btn"><button>登录</button></div>
                </div>
            </div>
        )
    }
}
{/* <RouterView routes={this.props.item} /> */ }
export default Login


