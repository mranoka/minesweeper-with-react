import React from 'react';
import Landing from './Components/Landing.js'
import './App.css';
import Game from './Components/Game'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from './Components/Navbar.js';
import Help from './Components/Help.js'


function App() {
  return (
    <Router>
      <div>
        <Route exact={true} path='/' render={() =>
          <>
            <Navbar />
            <Landing />
          </>
        } />
         <Route exact={true} path='/Game' render={() =>
          <>
            <Navbar />
            <Game />
          </>
        } />
         <Route exact={true} path='/Help' render={() =>
          <>
            <Navbar />
            <Help />
          </>
        } />
      </div>
    </Router>

  );
}

export default App;
