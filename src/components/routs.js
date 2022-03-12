import React from 'react'
import { Switch, Route } from "react-router-dom";
import CategoriesComponent from './categories';
import CatsPage from './catsPage';
import StartPage from './startPage';

const Routs = ( ) =>{
    return(
        <Switch>
            <Route path='/' component={StartPage} exact></Route>
            <Route path='/cats/:slug' component= {CatsPage}></Route>
        </Switch>
    )
}
export default Routs