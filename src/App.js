
import React, { useRef } from 'react';
// import { css } from 'emotion'
import './App.css';
import './index.css';



import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";




import Intro from './components/Intro';


function App() {
  const introRef = useRef(null)

  return (
    <Router>
      <Route path="/">
        <div ref={introRef}>
          <Intro introRef={introRef} />
        </div>
      </Route>
    </Router>
  )
}

export default App;