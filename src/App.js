
import React, { useState, useRef } from 'react';
import { css } from 'emotion'
import './App.css';


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
        <div ref={introRef} className={styles.body}>
          <Intro introRef={introRef} />
        </div>
      </Route>
    </Router>
  )
}

const styles = {

  body: css`
    scroll-behavior: smooth;
    -webkit-overflow-scrolling: touch;
   `,

}

export default App;