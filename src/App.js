
import React, { useRef } from 'react';
import './App.css';
import './index.css';


import Intro from './components/Intro';


function App() {
  const introRef = useRef(null)

  return (
    <div id="/">
      <Intro introRef={introRef} />
    </div>
  )
}

export default App;