import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Invoices from "./Invoices";

class App extends Component {
  render() {
      return <div className="App">
                    {/*  <header className="App-header">
                          <img src={logo} className="App-logo" alt="logo"/>
                          <h1 className="App-title">Welcome to React</h1>
                      </header>
                      <p className="App-intro">
                          To get started, edit <code>src/App.js</code> and save to reload.
                      </p>
                      <h1>Something</h1>
                      <a href="mailto:naga@gmail.com">naga@gmail.com</a>*/}
                  <Invoices/>
      </div>
  }
}

export default App;
