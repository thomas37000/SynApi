/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SliderInstagram from '../Slider/SliderInstagram';
import SliderFacebook from '../Slider/SliderFacebook';
import SliderTwitter from '../Slider/SliderTwitter';
import Navbar from '../Burger_Menu/NavBar';
import Profile from '../Profile/Profile';

export default function Routter() {
  // eslint-disable-next-line no-unused-vars

  const [status, setStatus] = useState(null);
  return (
    // faire la méthode Redux ou Context
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" />
          <Route path="/profile" component={Profile} />
          <Route path="/twitter" component={SliderTwitter} status={status} />
          {/* <Route
            path="/twitter"
            render={(props) => <SliderTwitter {...props} />}
          /> */}
          <Route path="/facebook" component={SliderFacebook} />
          <Route path="/instagram" component={SliderInstagram} />
        </Switch>
      </Router>
    </div>
  );
}
