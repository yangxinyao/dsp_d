
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
        import(`../components/${this.props.path}.jsx`).then((com) => {
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
function HeightCom(path) {
    return class extends Component {
        render() {
            return <DynimicCom path={path} />
        }
    }
}
export default HeightCom