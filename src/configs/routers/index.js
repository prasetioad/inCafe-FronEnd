import {Login, Profil, SignUp} from '../../pages'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import React from 'react'

function Routers() {
    return (
        <Router>
            <Switch>
                <Route path='/user/profilPage' component={Profil} />
                <Route path='/user/login' component={Login} />
                <Route path='/user/SignUp' component={SignUp} />
            </Switch>
        </Router>
    )
}

export default Routers
