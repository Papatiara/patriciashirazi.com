
<<<<<<< HEAD
import React, { useState, useEffect, useRef } from 'react';
import { css } from 'emotion'
import './App.css';
=======
import React, { useState } from 'react';
import { css } from 'emotion'
import ScrollIntoView from 'react-scroll-into-view'
import './App.css';
import './index.css';

>>>>>>> fb2b7f47bfc5f9a3931b2418c9e643fc133733e2


import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";




import Header from './components/Header';
import Intro from './components/Intro';
<<<<<<< HEAD
import Body from './components/Body';
=======
import Subjects from './components/Subjects';
import Moody_text from './components/articles/Moody_text';
import Business_text from './components/articles/Business_text';
import Google_text from './components/articles/Google_text';
import Footer from './components/Footer';
import Graduation_text from './components/articles/Graduation_text';
import Math_text from './components/articles/Math_text';
import Automation_text from './components/articles/Automation_text';
import AboutMe from './components/AboutMe';
import Video from './components/Video';



>>>>>>> fb2b7f47bfc5f9a3931b2418c9e643fc133733e2

let intViewportHeight = window.innerHeight;
let toString = (intViewportHeight - 100).toString() + "px"

function App() {
<<<<<<< HEAD
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
=======
  const [clickMoody, setClickMoody] = useState(false);
  const [clickBusiness, setClickBusiness] = useState(false);
  const [clickGoogle, setCLickGoogle] = useState(false);
  const [clickGraduation, setCLickGraduation] = useState(false);
  const [clickAutomation, setClickAutomation] = useState(false);
  const [clickMath, setClickMath] = useState(false);



  if (clickMoody) {
    return (
      <Router>
        <div className={styles.body}>
          <Moody_text showMoody={setClickMoody} />
          <Footer />
        </div>
      </Router>
    )
  } else if (clickBusiness) {
    return (
      <Router>
        <div className={styles.body}>
          <Business_text showBusiness={setClickBusiness} />
          <Footer />
        </div>
      </Router>
    )
  } else if (clickAutomation) {
    return (
      <Router>
        <div className={styles.body}>
          <Automation_text showAutomation={setClickAutomation}/>
          <Footer />
        </div>
      </Router>
    )
  }  else if (clickMath) {
    return (
      <Router>
        <div className={styles.body}>
          <Math_text showMath={setClickMath} />
          <Footer />
        </div>
      </Router>
    )
  } else if (clickGoogle) {
    return (
      <Router>
        <div className={styles.body}>
          <Google_text showGoogle={setCLickGoogle} />
          <Footer />
        </div>
      </Router>
    )
  } else if (clickGraduation) {
    return (
      <Router>
        <div className={styles.body}>
          <Graduation_text showGraduation={setCLickGraduation} />
          <Footer />
        </div>
      </Router>
    )
  } else {
    return (
      <Router>
        <Route path="/">
          <div>
            <Intro />
            <div>
              <ScrollIntoView selector="#header" className={styles.scroll}>
                <button className={styles.button}> About me </button>
              </ScrollIntoView>
            </div>
          </div>
          <Header />
          <div className={styles.body}>
            <Video />
            <Subjects showMoody={setClickMoody} showSubject={setClickBusiness} showGoogle={setCLickGoogle} showGraduation={setCLickGraduation} showAutomation={setClickAutomation} showMath={setClickMath}/>
            <Footer />
            {/* <AboutMe /> */}
          </div>
        </Route>
>>>>>>> fb2b7f47bfc5f9a3931b2418c9e643fc133733e2
      </Router>
    )
  }
}

const styles = {
<<<<<<< HEAD

  body: css`
          margin-top: 0%;
          `,

=======
  body: css`
    margin-top: 5%;
    font-family: 'Zilla Slab', serif;
    overflow-x: hidden;
    font-size: 17px;
    width: 100%;
    height: 100%;
    @media (max-width: 600px) {
      overflow-x: hidden;
    }@media (max-width: 1024px) {
      overflow-x: hidden;
      // width: 100%;
      height: 100%;

    }
    
    `,
  button: css`
    position: absolute;
    font-family: 'Zilla Slab', serif;
    font-size: 17px;
    outline: 0;
    top: 80%;
    left: 35%;
    border-radius: 5px;
    padding: 14px 28px;
    cursor: pointer;
  &:hover {
          color: white;
        background-color: black;
        transition: 1s;
        border-color:#DDDDDD;
  }&:focus {
          utline: none;
        background-color: black;
        color: white;
          }
        @media (width: 1366px) {
          top: 60%;
          left: 35%;
          overflow-x: hidden;
      }
          `,
  scroll: css`
        background-color: blue;
          `
>>>>>>> fb2b7f47bfc5f9a3931b2418c9e643fc133733e2
}

export default App;