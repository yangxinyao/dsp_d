
import React, { Component } from "react"

import Loading from "../components/com/loading/loading.jsx"
// const Home = () => { import("../components/page/home.jsx")}
// console.log(Home)
//异步加载，，，
class DynimicCom extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Com: null
        }
    }
    render() {
        const { Com } = this.state
        if (!this.state.Com) {
            return (<Loading></Loading>)
        } else {
            return <Com />
        }
    }
    componentDidMount() { 
        this.props.comFn().then((com) => {
            setTimeout(() => {
                this.setState({
                    Com: com.default
                })
            }, 2000);
        }).catch((err)=>{
            console.log(err)
        })
    }
}
function HeightCom(comFn) {
    return class extends Component {
        render() {
            return <DynimicCom comFn={comFn} />
        }
    }
}
export default HeightCom