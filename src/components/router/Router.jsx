/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ParamsContextProvider from '../Context/ParamsContext';
import ColorContextProvider from '../Context/ColorContext';
import Connexion from '../connexion/Connexion';
import Navbar from '../Burger_Menu/NavBar';
import Slider from '../Slider/Slider';

export default function Routter() {
  const [display, setDisplay] = useState(false);
  return (
    <Router>
      <ColorContextProvider>
        {display ? (
          <Navbar />
        ) : (
          <Switch>
            <Route exact path="/" component={Connexion} />
            <ParamsContextProvider>
              <Navbar />
              <Route path="/networks/" component={Slider} />
            </ParamsContextProvider>
          </Switch>
        )}
      </ColorContextProvider>
    </Router>
  );
}
