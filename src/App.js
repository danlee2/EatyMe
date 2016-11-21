import React, { Component } from 'react';

import logo from './logo.png';
import name from './EatyMe.png';
import phone from './phone-full2.png';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1 id='eatyme' href='http://eatyme.com'>
            {/* do not forget to add trademark symbol to image */}
            <img className='logo-name' src={name} role='presentation' />
          </h1>
          <img src={logo} className="App-logo" alt="logo" href='http://eatyme.com' role='presentation' />
          <div className='intro'>
            <p className="App-intro">
              Instantly find your favorite food trucks 
              <br />that are open right now and closest 
              <br />to where you are. just open the app 
              <br />and go. no sign in required. 
              <br />
              <div className='buttons'>
                <button className="button-docs">
                  iOS
                </button>
                <button className='button-get-app'>
                  Android
                </button>
              </div>
              <br/>
              <br />
              <br />
              <br />
              <p className='footer'>
                	&copy; <i> 2016 Eaty Me&trade; . Made in 24 Hours with</i> &#x2661;
              </p>
            </p>
          </div>
        </div>
        <div>
          <br />
          <img className='phone' src={phone} role='presentation' />
          
        </div>
      </div>
    );
  }
}

export default App;