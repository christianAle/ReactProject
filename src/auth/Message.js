import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';


export default class Message extends React.Component{ 
    
   render(){
        return( <div className="alert alert-warning" role="alert">
        <strong>{this.props.message}</strong> 
      </div>);
   }
}