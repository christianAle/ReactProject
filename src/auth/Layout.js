import React from 'react';
import { slide as Menu } from "react-burger-menu";
import { Router, Route, Link, IndexRoute } from 'react-router-dom';
import Social from './Social.js'
import history from './history'
export default props => {
    return (
        // Pass on our props
        <Menu {...props} >
            <a className="menu-item" href="/MainPage">
                <span> Emails</span>
            </a>

            <a className="menu-item" href="/Social">
                <span>Social</span>
                           
            </a>
             
            <a className="menu-item" href="/Phone" >
               
                <span>Phones</span>
            </a>
               

             <a className="menu-item" href="/"  > 
                <span>Log out</span>
             </a>  

        </Menu>
    );
};