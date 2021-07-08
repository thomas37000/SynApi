import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ParamsContextProvider from '../Context/ParamsContext';
import ColorContextProvider from '../Context/ColorContext';
import NavRoute from '../Sidebar/NavRoute';
import Slider from '../Slider/Slider';

export default function Routter() {
  return (
    <Router>
      <ColorContextProvider>
        <Switch>
          <ParamsContextProvider>
            <NavRoute />
            <Route exact path="/" component={Slider} />
          </ParamsContextProvider>
        </Switch>
      </ColorContextProvider>
    </Router>
  );
}
