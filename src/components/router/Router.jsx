/* eslint-disable no-console */
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SliderInstagram from '../Slider/SliderInstagram';
import SliderFacebook from '../Slider/SliderFacebook';
import SliderTwitter from '../Slider/SliderTwitter';
import Navbar from '../Burger_Menu/NavBar';
import Profile from '../Profile/Profile';
// import ColorContext from '../Context/ColorContext';

export default function Routter() {
  // const [toggleColor, setToggleColor] = useState();
  // console.log('toggleColor context:', toggleColor);
  // const toggleChange = () => setToggleColor(!toggleColor);

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" />
        <Route path="/profile" component={Profile} />
        <Route path="/twitter" component={SliderTwitter} />
        <Route path="/facebook" component={SliderFacebook} />
        <Route path="/instagram" component={SliderInstagram} />
      </Switch>
    </Router>
  );
}
