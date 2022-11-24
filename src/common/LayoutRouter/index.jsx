import React from "react";
import {Switch, Route} from "react-router-dom";

import {Resume} from "pages/Resume";

export const LayoutRouter = () => (
    <Switch>
        <Route exact path='/' component={() => 'О сайте'}/>
        <Route exact path='/joblist' component={() => 'Вакансии'}/>
        <Route exact path='/applicants' component={() => 'Соискателям'}/>
        <Route exact path='/employers' component={() => 'Работодателям'}/>
        <Route exact path='/settings' component={() => 'Настройки'}/>
        <Route exact path='/resume' component={Resume}/>
        <Route exact path='/logout' component={() => 'Выход'}/>
    </Switch>
)