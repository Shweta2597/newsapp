import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter as Router,
  Routes,
  Route } from "react-router-dom";


//  business  entertainment  general  health  science  sports  technology
//   3c838f43c72d4899a199e23511e0824c
//   98d7b3ef7886423a963bec9c61312628
//   d4191243aa264adebf19ef20cb2d1722
//   87e001402f9c407ebfb8b0603f21f3a1
//  22253b169f4f4d6f994cc0b67855362c
//   d093053d72bc40248998159804e0e67d

export default class App extends Component {
  pageSize = 12;
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

