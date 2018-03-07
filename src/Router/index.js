import {Route, Switch} from "react-router-dom"
import Home from "../Home"
import React from "react"
import DicePage from "../Dice/DicePage"


export default () => {
    return (
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/dice/:diceSet?" component={DicePage}/>
        </Switch>
    )
}