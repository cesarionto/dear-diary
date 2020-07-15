import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isAuthenticated } from '../services/auth';

export default function PublicRoute({ ...props }) {  
    if(isAuthenticated()){
        return <Redirect to="/home"/>;
    }
      return <Route {...props}/>;
}