import ReactDOM from "react-dom"
import React from 'react'
import App from './components/homepageApp'
import '../../style/2-page/homepageStyle.sass'
import {Provider} from "react-redux";
ReactDOM.render(
    <App/>
    ,document.getElementById("root"))