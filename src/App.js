import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter as Router,
  Routes,
  Route } from "react-router-dom";


//  business  entertainment  general  health  science  sports  technology
//   3c838f43c72d4899a199e23511e0824c

export default class App extends Component {
  pageSize = 11;
  render() {
    return (
      <div>
        <Router>
          <Navbar></Navbar>
          <Routes>
            <Route exact path='/' element={<News pageSize={this.pageSize} key="general" country="in" category="general"></News>}></Route>
            <Route exact path='/business' element={<News pageSize={this.pageSize} key="business" country="in" category="business"></News>}></Route>
            <Route exact path='/entertainment' element={<News pageSize={this.pageSize} key="entertainment" country="in" category="entertainment"></News>}></Route>
            <Route exact path='/general' element={<News pageSize={this.pageSize} key="general" country="in" category="general"></News>}></Route>
            <Route exact path='/health' element={<News pageSize={this.pageSize} key="health" country="in" category="health"></News>}></Route>
            <Route exact path='/science' element={<News pageSize={this.pageSize} key="science" country="in" category="science"></News>}></Route>
            <Route exact path='/sports' element={<News pageSize={this.pageSize} key="sports" country="in" category="sports"></News>}></Route>
            <Route exact path='/technology' element={<News pageSize={this.pageSize} key="technology" country="in" category="technology"></News>}></Route>
          </Routes>
        </Router>
      </div>
    )
  }
}

