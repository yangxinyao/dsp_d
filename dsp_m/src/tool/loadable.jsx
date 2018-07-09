
import React, { Component, Fragment } from "react"

import Loading from "../components/com/loading/loading.jsx"
//const Home = () => { import("../components/page/home.jsx")}
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
        return<Fragment>
            <Loading spining={!this.state.Com}></Loading>
            {Com && <Com />}
        </Fragment>
    }
  
    componentDidMount() {
        import(/*webpackChunkName:'home'*/`../components/${this.props.path}.jsx`).then((com) => {
            setTimeout(() => {
                this.setState({
                    Com: com.default
                })
            }, 2000);
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