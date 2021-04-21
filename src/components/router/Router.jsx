import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import SliderInstagram from '../Slider/SliderInstagram';
// import SliderFacebook from '../Slider/SliderFacebook';
// import SliderTwitter from '../Slider/SliderTwitter';
import Navbar from '../Burger_Menu/NavBar';
import Profile from '../Profile/Profile';
import Slider from '../Slider/Slider';

export default function Routter(post) {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" />
        <Route path="/profile" component={Profile} />
        {/* <Route path="/twitter" component={SliderTwitter} /> */}
        <Route
          path="/network/twitter"
          component={Slider}
          network={post.network}
        />
        {/* <Route path="/facebook" component={SliderFacebook} /> */}
        <Route
          path="/network/facebook"
          component={Slider}
          network={post.network}
        />
        {/* <Route path="/instagram" component={SliderInstagram} /> */}
        <Route
          path="/network/instagram"
          component={Slider}
          network={post.network}
        />
      </Switch>
    </Router>
  );
}
