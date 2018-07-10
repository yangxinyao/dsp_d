import React, { Component,Fragment } from "react"
import { BrowserRouter as Router, Link } from "react-router-dom"
import { routes } from "./router/index.js" 
import ReactView from "./router/router.js"
class App extends Component {
    constructor(props) {
        super(props)
       
    }
    render() {
        return (
            <Router>
                <ReactView routes={routes}  />
            </Router>
        );
    }

}
export default App