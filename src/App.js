import React, { Component } from 'react';
import {Login} from './Login.js';
import {Categorym1} from './Categorym1.js';
import {Style} from './Style.js';
//import './css/bootstrap.css';
import './bulma.css'
import './App.css'


class App extends Component {
  render() {
    return (
      <div style={{padding:"75px 30px 30px 30px", height:"100vh"}}>
          <Login/>
      </div>
    );
  }
}

export default App;
