/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Connexion from '../connexion/Connexion';
import Navbar from '../Burger_Menu/NavBar';
import Profile from '../Profile/Profile';
import Slider from '../Slider/Slider';

import ParamsContextProvider from '../Context/ParamsContext';

export default function Routter() {
  const [post, setPost] = useState('10');

  console.log('provider', post);

  return (
    <Router>
      <ParamsContextProvider>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Connexion} />
          <Route path="/networks/" component={Slider} />
          <Route path="/profile" component={Profile} />
        </Switch>
      </ParamsContextProvider>
    </Router>
  );
}
