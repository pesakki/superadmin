import React from 'react'
import { BrowserRouter as Router, Switch,Route,redirect } from 'react-router-dom'

import Home1 from './dashboard/home1'

import Login from './login'

function Rout(){
    return(
        <Router>
            <Switch>
                <Route path='/' Component={Home1}/>
                <Route path='/login' Component={Login}/>

            </Switch>
        </Router>
    )
}

export default Rout