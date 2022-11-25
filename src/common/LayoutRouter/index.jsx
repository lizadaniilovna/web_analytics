import React from "react";
import {Switch, Route} from "react-router-dom";

import Paper from "@material-ui/core/Paper";

import {PageInProgress} from "$pages/PageInProgress";
import {Resume} from "$pages/Resume";

export const LayoutRouter = () => (
    <Paper
        component="main"
        style={{flex: 1, padding: '10px'}}
    >
        <Switch>
            <Route exact path='/' component={() => <PageInProgress/>}/>
            <Route exact path='/joblist' component={() => <PageInProgress pageName='Cписок вакансий'/>}/>
            <Route exact path='/applicants' component={() => <PageInProgress pageName='Соискателям'/>}/>
            <Route exact path='/employers' component={() => <PageInProgress pageName='Работодателям'/>}/>
            <Route exact path='/settings' component={() => <PageInProgress pageName='Настройки'/>}/>
            <Route exact path='/resume' component={Resume}/>
            <Route exact path='/logout' component={() => "Выход"}/>
        </Switch>
    </Paper>
)
