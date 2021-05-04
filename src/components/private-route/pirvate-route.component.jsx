import React from 'react'
import { Route } from 'react-router-dom';
import {useAuth} from '../../context/auth.context';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';

export default function PrivateRoute({component: Component, ...rest}) {
    const currentUser = useAuth();
    return (
        <Route {...rest} render={props=> currentUser ? <Component {...props}/> : <Redirect to='/home/' /> } />  
    )
}
