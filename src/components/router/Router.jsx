import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ParamsContextProvider from '../Context/ParamsContext';
import ColorContextProvider from '../Context/ColorContext';
import Connexion from '../Connexion/Connexion';
import NavRoute from '../Sidebar/NavRoute';
import Slider from '../Slider/Slider';

export default function Routter() {
  const [display] = useState(false);

  return (
    <Router>
      <ColorContextProvider>
        {display ? (
          <NavRoute />
        ) : (
          <Switch>
            <Route exact path="/" component={Connexion} />
            <ParamsContextProvider>
              <NavRoute />
              <Route path="/networks/" component={Slider} />
            </ParamsContextProvider>
          </Switch>
        )}
      </ColorContextProvider>
    </Router>
  );
}
