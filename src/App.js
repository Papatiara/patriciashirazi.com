
import React, { useState, useEffect, useRef } from 'react';
import { css } from 'emotion'
import './App.css';


import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

import Intro from './components/Intro';
import Body from './components/Body';

let intViewportHeight = window.innerHeight;
let toString = (intViewportHeight - 100).toString() + "px"

function App() {
  const introRef = useRef(null)


  const [seeMore, setSeeMore] = useState(false)


  if (!seeMore) {
    return (
      <Router>
        <Route path="/">
          <div ref={introRef} className={styles.firstbody}>
            <Intro arrowClick={setSeeMore} />
            <div className={styles.body}>
              <Body introRef={introRef}/>
            </div>
          </div>
        </Route>
      </Router>
    )
  }
  else {
    return (
      <Router>
        <div ref={introRef} className={styles.firstbody}>
          <Intro arrowClick={setSeeMore} />
          <div className={styles.body}>
            <Body introRef={introRef}/>
          </div>
        </div>
      </Router>
    )
  }
}

const styles = {

  body: css`
          margin-top: 0%;
          `,

}

export default App;