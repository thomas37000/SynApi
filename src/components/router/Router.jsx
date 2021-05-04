/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ColorContextProvider from '../Context/ColorContext';
import ParamsContextProvider from '../Context/ParamsContext';
import Connexion from '../connexion/Connexion';
import Navbar from '../Burger_Menu/NavBar';
import Slider from '../Slider/Slider';

export default function Routter() {
  return (
    <Router>
      <ColorContextProvider>
        {/* <ParamsContextProvider> */}
        <Navbar />
        <Switch>
          <Route exact path="/" component={Connexion} />
          <Route path="/networks/" component={Slider} />
        </Switch>
        {/* </ParamsContextProvider> */}
      </ColorContextProvider>
    </Router>
  );
}
