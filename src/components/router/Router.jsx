import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ConnexionContextProvider from '../Context/ConnexionContext';
import ParamsContextProvider from '../Context/ParamsContext';
import ColorContextProvider from '../Context/ColorContext';
import Connexion from '../Connexion/Connexion';
import NavRoute from '../Sidebar/NavRoute';
import Slider from '../Slider/Slider';
import Nav from '../Sidebar/Nav';

// import SliderReact from '../Slider/SliderReact';

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
      <ConnexionContextProvider>
        <ColorContextProvider>
          {display ? (
            displayNav()
          ) : (
            <Switch>
              <Route exact path="/" component={Connexion} />
              <ParamsContextProvider>
                <NavRoute />
                <Route path="/networks/" component={Slider} />
                {/* <Route path="/networks/" component={SliderReact} /> */}
              </ParamsContextProvider>
            </Switch>
          )}
        </ColorContextProvider>
      </ConnexionContextProvider>
    </Router>
  );
}
