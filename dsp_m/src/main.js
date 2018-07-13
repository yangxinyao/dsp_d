import React, { Component } from "react"
import ReactDom from "react-dom"
import App from "./App.jsx"
import  "./App.css"
import 'antd/dist/antd.css'
import "./assets/demo.css"
import {Provider} from "react-redux"
import store from "./store/index.js"
ReactDom.render(<Provider store={store}><App /></Provider>, document.querySelector(".app"))