import React, { Component } from 'react';
import "./login.css"
import http from "../../tool/http.js"
import {setCookie} from "../../tool/cookie.js"
import Store, { actions,SAVETOKEN} from '../../store/index.js'
import {connect} from "react-redux"
class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            password: "",
            vertyCode: "",
            info: "",
            errFlag: false,
            loginClass:"login",
            cont:1531268906783
        }
        this.changeVal = this.changeVal.bind(this)
        this.loginFn = this.loginFn.bind(this)
    }
    render() {
        let { username, password, vertyCode } = this.state;
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
                    <div className={this.state.loginClass}>
                        <h2 className="login_title">账户登录</h2>
                        <div className="inp_box">
                            <p className="err_info" style={{ display: this.state.errFlag ? "block" : "none" }}>{this.state.info}</p>
                            <p className="login_inp">
                                <input type="text" placeholder="请输入用户名" name="username" value={username} onChange={this.changeVal} />
                            </p>
                            <p className="login_inp">
                                <input type="text" placeholder="请输入密码" name="password" value={password} onChange={this.changeVal} />
                            </p>
                            <p className="veryCode">
                                <input type="text" placeholder="请输入验证码" name="vertyCode" value={vertyCode} onChange={this.changeVal} />
                                <img src={`https://e.zuoyebang.com/dsp-admin/captcha.jpg?${this.state.cont}`}
                                onClick={()=>{this.setState({cont:++this.state.cont})}} alt="" />
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
        if (!this.state.username && !this.state.password && !this.state.vertyCode) {
            this.setState({
                info: "请填写用户信息",
                errFlag: true,
                loginClass:"login login_bor"
            })
            return
        }
        if (!this.state.username) {
            this.setState({
                info: "请输入正确的用户名",
                errFlag: true,
                loginClass: "login login_bor"
            })
            return
        }
        if (!this.state.password) {
            this.setState({
                info: "请输入正确的密码",
                errFlag: true,
                loginClass: "login login_bor"
            })
            return
        }
        if (!this.state.vertyCode) {
            this.setState({
                info: "请输入验证码",
                errFlag: true,
                loginClass: "login login_bor"
            })
            return
        }
        let { username, password, vertyCode } = this.state
        http.post("/dsp-admin/user/login", { username, password, vertyCode }).then((res) => {
            if(res.success==0){
                setCookie("token",res.token)
                localStorage.setItem("username",res.user.name)
                 this.props.history.replace("/index/home")
                 Store.dispatch(actions[SAVETOKEN](res.user.name))
            }else{
                alert(res.info)
            }
            
        })
    }
}
let mapStateToProps=(state)=>{
    return {
       username:state.username
    }
}
export default connect(mapStateToProps)(Login)


