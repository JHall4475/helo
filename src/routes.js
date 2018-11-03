import {Route, Switch} from 'react-router-dom';
import React from 'react';
import Dashboard from './component/Dashboard/Dashboard';
import Auth from './component/Auth/Auth';
import Form from './component/Form/Form';
import Post from './component/'

export default (
    <Switch>
        <Route exact path="/" component={Auth}></Route>
        <Route path="/dashboard" component={Dashboard}></Route>
        <Route path="/post/:postid" component={Post}></Route>
        <Route path="/new" component={Form}></Route>


    </Switch>
)