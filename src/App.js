import React, { Component } from 'react';

import appStore from './AppStoreButton.gif';
import logo from './logo.png';
import name from './EatyMe.png';
import phone from './phone-full2.png';
import playStore from './PlayStoreButton.gif';

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
          {/*
          <a href="https://github.com/danlee2/EatyMe">
            <img className='github-ribbon' src="https://camo.githubusercontent.com/a6677b08c955af8400f44c6298f40e7d19cc5b2d/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f677261795f3664366436642e706e67" alt="Fork me on GitHub" data-canonical-src="https://s3.amazonaws.com/github/ribbons/forkme_right_gray_6d6d6d.png" />
          </a>
          */}
          <div className='intro'>
            <p className="App-intro">
              Instantly find your favorite food trucks 
              <br />that are open right now and closest 
              <br />to where you are. just open the app  
              <br />and go. no sign in required. 
              <br />
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