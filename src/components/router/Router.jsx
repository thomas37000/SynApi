import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from '../Burger_Menu/NavBar';
import Profile from '../Profile/Profile';
import Slider from '../Slider/Slider';

export default function Routter() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/networks/" component={Slider} />
        <Route path="/profile" component={Profile} />
      </Switch>
    </Router>
  );
}
