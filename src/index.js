import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Router, Route, Link , IndexRoute} from 'react-router-dom';
import history from './auth/history';
import MainPage from './auth/MainPage'
import  LoginPage from './auth/LoginPage';
import Social from './auth/Social';
import Phone from './auth/Phone';
import SignUp from './auth/SignUp';

ReactDOM.render([
       
      <App/>,  
      <Router history={history}>
          


          <Route exact path="/" component={LoginPage}/>

         <Link to ="/MainPage"></Link>
        <Route path="/MainPage" component={MainPage}/>
        <Route path="/Social" component={Social}/>
        <Route path="/Phone"  component={Phone}/>
        <Route path="/SignUp"  component={SignUp}/>
            
      </Router>
          
    ,document.getElementById('root')
]);

///ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
