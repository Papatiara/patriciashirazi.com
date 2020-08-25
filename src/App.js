
import React, { useState, useRef } from 'react';
import { css } from 'emotion'
import './App.css';


import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";




import Intro from './components/Intro';
import Body from './components/Body';


function App() {
  const introRef = useRef(null)


  const [seeMore, setSeeMore] = useState(false)


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