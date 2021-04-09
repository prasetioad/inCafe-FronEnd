import {Login, Profil, SignUp, Products, ProductDetails, ForgotPassword, Homepage, UserVerify, Payment} from '../../pages'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import axios from 'axios'
import {useEffect} from 'react'

import React from 'react'

function Routers() {
    const token = localStorage.getItem('token')
    useEffect(()=>{
        axios({
            method : 'GET',
            url : `${process.env.REACT_APP_SERVER}/v1/users`,
            headers : { Authorization: `Bearer ${token}` }
        })
        .then(response=>{})
        .catch(err=>{
            if(err.response.data.status == false){
                localStorage.removeItem('token')
            }
        })
    },[])
    return (
        <Router>
            <Switch>
                <Route path='/user/ProfilPage' component={Profil} />
                <Route path='/user/Login' component={Login} />
                <Route path='/user/SignUp' component={SignUp} />
                <Route path='/user/ForgotPassword' component={ForgotPassword} />
                <Route path='/verify' component={UserVerify} />
                <Route path='/user/Payment' component={Payment} />
                <Route path='/Products' component={Products} />
                <Route path='/ProductDetails' component={ProductDetails} />
                <Route path='/home' component={Homepage} />
                <Route path='/' component={Homepage} />
            </Switch>
        </Router>
    )
}

export default Routers
