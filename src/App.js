
import React from 'react';
import { css } from 'emotion'
import Header from './components/Header';

import Intro from './components/Intro';
import Subjects from './components/Subjects';
import './App.css';

function App() {
  return (
    <div className="App">
        <header>
          <Intro />
        </header>
      <div>
        < Header />
        <Subjects />
      </div>
      </div>

  );
}

const styles = {
  header: css`
    border: 2px black solid;
    width: 100%;
    height: 100%;
  `
}

export default App;