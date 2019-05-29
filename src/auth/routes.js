import LoginPage from '/LoginPage';
import App from '../App';
import MainPage from '/MainPage'
import {Router, Route, hashHistory, IndexRoute } from "react-router";


const app = document.getElementById('app');

export default (
    <Route history={hashHistory}>
        <Route path="/MainPage" component={LoginPage} />
    </Route>
     
    
   
)

