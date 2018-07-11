import React, { Component } from 'react';
import "./login.css"
import http from "../../tool/http.js"
class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userName: "",
            pwd: "",
            vertyCode: "",
            info: "",
            errFlag: false
        }
        this.changeVal = this.changeVal.bind(this)
        this.loginFn = this.loginFn.bind(this)
    }
    render() {
        let { userName, pwd, vertyCode } = this.state;
        return (
            <div className="login_wrap">
                <div>
                    <div className="logo">
                        <div className="logo_img">
                            <img src="http://localhost:8099/src/assets/logo.png" alt="" />
                        </div>

                        <h1>
                            <b>智能营销平台</b>
                            <span>网络新生态  智能广告助力营销</span>
                        </h1>
                    </div>
                    <div className="login">
                        <h2 className="login_title">账户登录</h2>
                        <div className="inp_box">
                            <p className="err_info" style={{ display: this.state.errFlag ? "block" : "none" }}>{this.state.info}</p>
                            <p className="login_inp">
                                <input type="text" placeholder="请输入用户名" name="userName" value={userName} onChange={this.changeVal} />
                            </p>
                            <p className="login_inp">
                                <input type="text" placeholder="请输入密码" name="pwd" value={pwd} onChange={this.changeVal} />
                            </p>
                            <p className="veryCode">
                                <input type="text" placeholder="请输入验证码" name="vertyCode" value={vertyCode} onChange={this.changeVal} />
                                <img src="https://e.zuoyebang.com/dsp-admin/captcha.jpg" alt="" />
                            </p>
                        </div>
                        <div className="login_btn"><button onClick={this.loginFn}>登录</button></div>
                    </div>
                </div>

            </div>
        )
    }
    changeVal(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    loginFn() {
        if (!this.state.userName && !this.state.pwd && !this.state.vertyCode) {
            this.setState({
                info: "请填写用户信息",
                errFlag: true
            })
            return
        }
        if (!this.state.userName) {
            this.setState({
                info: "请输入正确的用户名",
                errFlag: true
            })
            return
        }
        if (!this.state.pwd) {
            this.setState({
                info: "请输入正确的密码",
                errFlag: true
            })
            return
        }
        if (!this.state.vertyCode) {
            this.setState({
                info: "请输入验证码",
                errFlag: true
            })
            return
        }
        let { userName, pwd, vertyCode } = this.state
        http.post("/dsp-admin/user/login", { userName, pwd, vertyCode }).then((res) => {
            console.log(res)
        })
    }
}

export default Login


