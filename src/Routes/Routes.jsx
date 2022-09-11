import React from 'react'
import { Routes as Router, Route } from "react-router-dom"
import Description from '../Components/Description'
import Home from '../Components/Home'
import Payment from '../Components/Payment'
import Successfull from '../Components/Successfull'
import Login from '../Components/User-Authenticate/Login'
import Register from '../Components/User-Authenticate/Register'

const Routes = () => {
    return (
        <div>
            <Router>
                <Route path='/' element={< Home />} />
                <Route path='/login' element={< Login />} />
                <Route path='/register' element={< Register />} />
                <Route path='/description/:id' element={< Description />} />
                <Route path='/payment' element={< Payment />} />
                <Route path='/success' element={< Successfull />} />
            </Router>
        </div>
    )
}
export default Routes
