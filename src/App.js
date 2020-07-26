import React, { Component } from 'react';
import Main from './components/MainComponent';
import './App.css';
import './shared/styles.css'
import { BrowserRouter } from 'react-router-dom';

class App extends Component {

  render () {
    return (
      <BrowserRouter>
        <div class="allComponents">
          <Main />
        </div>
      </BrowserRouter>
    );
  }
    
}

export default App;
