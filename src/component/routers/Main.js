import React from 'react'
import {Route, Switch} from 'react-router-dom'
import DashBoard from '../Dashboard'
import Login from '../Login'

export default function Main() {
    return (
        <div>
            <Switch>
                <Route path="/" exact ={true}><Login/></Route>
                <Route path="/users"><DashBoard/></Route>
            </Switch>            
        </div>
    )
}
