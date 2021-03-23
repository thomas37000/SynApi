import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import SliderInstagram from '../Slider/SliderInstagram';
import SliderFacebook from '../Slider/SliderFacebook';
import SliderTwitter from '../Slider/SliderTwitter';
import Navbar from '../Burger_Menu/NavBar';
import CardFakeInsta from '../Cards/CardFakeInsta';

export default function Routter() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" />
          <Route path="/profile" />
          <Route path="/twitter" component={SliderTwitter} />
          <Route path="/facebook" component={SliderFacebook} />
          <Route path="/instagram" component={CardFakeInsta} />
        </Switch>
      </Router>
    </div>
  );
}
