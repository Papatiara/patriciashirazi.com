
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


  // if (!seeMore) {
  //   return (
  //   <Router>
  //     <Route path="/">
  //       <div ref={introRef} className={styles.firstbody}>
  //         <Intro arrowClick={setSeeMore} />
  //         <div className={styles.body}>
  //           <Body introRef={introRef}/>
  //         </div>
  //       </div>
  //     </Route>
  //   </Router>
  // )
  // }
  // else {
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
// }

const styles = {

  // body: css`
  //   margin-top: 0%;
  // `,

}

export default App;