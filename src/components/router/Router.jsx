import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ParamsContextProvider from '../Context/ParamsContext';
import ColorContextProvider from '../Context/ColorContext';
// import Connexion from '../Connexion/Connexion';
import NavRoute from '../Sidebar/NavRoute';
import Slider from '../Slider/Slider';
import Nav from '../Sidebar/Nav';

export default function Routter(props) {
  const [display] = useState(false);
  function displayNav() {
    if (props) {
      return <Nav />;
    }
    // else 'username + token'
    return <NavRoute />;
  }

  return (
    <Router>
      <ColorContextProvider>
        {display ? (
          displayNav()
        ) : (
          <Switch>
            {/* <Route exact path="/" component={Connexion} /> */}
            <ParamsContextProvider>
              <NavRoute />
              <Route exact path="/" component={Slider} />
            </ParamsContextProvider>
          </Switch>
        )}
      </ColorContextProvider>
    </Router>
  );
}
