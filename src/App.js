
import React, { useRef, useEffect } from 'react';

import Intro from './components/Intro';


function App() {
  const introRef = useRef(null)

  useEffect(() => {
    console.log(introRef.current);
  }, [introRef]);


  return (
    <div ref={introRef}>
      <Intro intro={introRef} />
    </div>
  )
}

export default App;