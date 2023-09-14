import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';

//  business  entertainment  general  health  science  sports  technology

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar></Navbar>
        <News pageSize={5} country="in" category="science"></News>
      </div>
    )
  }
}

