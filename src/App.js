import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter as Router,
  Routes,
  Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'



export default class App extends Component {

  apiKey = process.env.REACT_APP_NEWS_API
  pageSize = 12;

  state = {
    progress:5
  }

  setProgress = (progress) => {
    this.setState({
      progress:progress
    })
  }

  render() {
    return (
      <div>
        <Router>
          <Navbar></Navbar>
          <LoadingBar
            color='#f11946'
            progress={this.state.progress}
            height={3}
          />
          <Routes>
            <Route exact path='/' element={<News setProgress={this.setProgress} apiKey={this.apiKey} pageSize={this.pageSize} key="general" country="in" category="general"></News>}></Route>
            <Route exact path='/business' element={<News setProgress={this.setProgress} apiKey={this.apiKey} pageSize={this.pageSize} key="business" country="in" category="business"></News>}></Route>
            <Route exact path='/entertainment' element={<News setProgress={this.setProgress} apiKey={this.apiKey} pageSize={this.pageSize} key="entertainment" country="in" category="entertainment"></News>}></Route>
            <Route exact path='/general' element={<News setProgress={this.setProgress} apiKey={this.apiKey} pageSize={this.pageSize} key="general" country="in" category="general"></News>}></Route>
            <Route exact path='/health' element={<News setProgress={this.setProgress} apiKey={this.apiKey} pageSize={this.pageSize} key="health" country="in" category="health"></News>}></Route>
            <Route exact path='/science' element={<News setProgress={this.setProgress} apiKey={this.apiKey} pageSize={this.pageSize} key="science" country="in" category="science"></News>}></Route>
            <Route exact path='/sports' element={<News setProgress={this.setProgress} apiKey={this.apiKey} pageSize={this.pageSize} key="sports" country="in" category="sports"></News>}></Route>
            <Route exact path='/technology' element={<News setProgress={this.setProgress} apiKey={this.apiKey} pageSize={this.pageSize} key="technology" country="in" category="technology"></News>}></Route>
          </Routes>
        </Router>
      </div>
    )
  }
}

