import React, { Component } from 'react';

import logo from './logo.png';
import name from './EatyMe.png';
import phone from './phone.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1 id='eatyme' href='#'>
            <img className='logo-name' src={name} />
          </h1>
          <img src={logo} className="App-logo" alt="logo" href='#' />
          <div className='intro'>
            <p className="App-intro">
              Instantly find your favorite food trucks 
              <br />that are open right now and closest 
              <br />to where you are. just open the app 
              <br />and go. no sign in required. 
              <br />
              <br /> Or explore our open-source api and 
              <br /> create your own app.
              <br />
              <div className='buttons'>
                <button className="button-docs">
                  DOCS
                </button>
                <button className="button-get-app">
                  GET APP
                </button>
              </div>
              <br/>
              <p className='footer'>
                	&copy; <i> 2016 Eaty Me. Made in 24 Hours with</i> &#x2661;
              </p>
            </p>
          </div>
        </div>
        <div>
          <br />
          <img className='phone' src={phone} />
          
        </div>
      </div>
    );
  }
}


export default App;
