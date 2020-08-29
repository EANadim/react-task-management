import React from 'react';
import ReactDOM from 'react-dom'
import './nav.css';

export default class Nav extends React.Component{
    constructor(){
      super();
    }
    render(){
      return (
        <div className="header">
            <a class="navbar-brand">
              <img width="100" height="100" src={require("../assets/logo.png")}/>
              <h1 style={{margin:0,display:"inline-block", color:"white"}}>TASK MANAGEMENT</h1>
            </a>
      </div>
      );
    }
  }