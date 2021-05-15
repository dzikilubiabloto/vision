import React from 'react'
import { Route } from 'react-router-dom';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';

import {useAuth} from '../../context/auth.context';

export default function PrivateRoute({component: Component, ...rest}) {
    const {currentUser} = useAuth();
    return (
        <Route {...rest} render={props=> currentUser ? <Component {...props}/> : <Redirect to='/vision/' /> } />  
    )
}
