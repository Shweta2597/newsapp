import './App.css';

import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter as Router,
  Routes,
  Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'



const App = () => {

  let apiKey = process.env.REACT_APP_NEWS_API
  let pageSize = 12;

  const [progress,setProgress] = useState(5)

  const setProgressBar = (progress) => {
    setProgress(progress)
  }

    return (
      <div>
        <Router>
          <Navbar></Navbar>
          <LoadingBar
            color='#f11946'
            progress={progress}
            height={3}
          />
          <Routes>
            <Route exact path='/' element={<News setProgress={setProgressBar} apiKey={apiKey} pageSize={pageSize} key="general" country="in" category="general"></News>}></Route>
            <Route exact path='/business' element={<News setProgress={setProgressBar} apiKey={apiKey} pageSize={pageSize} key="business" country="in" category="business"></News>}></Route>
            <Route exact path='/entertainment' element={<News setProgress={setProgressBar} apiKey={apiKey} pageSize={pageSize} key="entertainment" country="in" category="entertainment"></News>}></Route>
            <Route exact path='/general' element={<News setProgress={setProgressBar} apiKey={apiKey} pageSize={pageSize} key="general" country="in" category="general"></News>}></Route>
            <Route exact path='/health' element={<News setProgress={setProgressBar} apiKey={apiKey} pageSize={pageSize} key="health" country="in" category="health"></News>}></Route>
            <Route exact path='/science' element={<News setProgress={setProgressBar} apiKey={apiKey} pageSize={pageSize} key="science" country="in" category="science"></News>}></Route>
            <Route exact path='/sports' element={<News setProgress={setProgressBar} apiKey={apiKey} pageSize={pageSize} key="sports" country="in" category="sports"></News>}></Route>
            <Route exact path='/technology' element={<News setProgress={setProgressBar} apiKey={apiKey} pageSize={pageSize} key="technology" country="in" category="technology"></News>}></Route>
          </Routes>
        </Router>
      </div>
    )
}


export default App;
