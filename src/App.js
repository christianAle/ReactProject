import React from 'react';
import './App.css';
import LoginPage from './auth/LoginPage';
import './auth/css/LoginPage.css';
import './auth/css/util.css';

class App extends React.Component {
constructor(props){
  super(props) 
}
 

  render() {
    
    return (
      
     <LoginPage/>
    );
 }
}
export default App;
