import {Route} from "react-router-dom"
import Home from "../Home"
import React from "react"


export default () => {
    return (
        <Route path="/" component={Home}/>
    )
}