import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Connexion from '../connexion/Connexion';
import Navbar from '../Burger_Menu/NavBar';
import Profile from '../Profile/Profile';
import Slider from '../Slider/Slider';

export default function Routter() {
  const [postUpdate, setPostUpdate] = useState(10);

  const updatePost = () => {
    setPostUpdate(postUpdate);
  };

  console.log(postUpdate);

  return (
    <Router>
      <Navbar update={updatePost} />
      <Switch>
        <Route exact path="/" component={Connexion} />
        <Route path="/networks/" component={Slider} />
        <Route path="/profile" component={Profile} />
      </Switch>
    </Router>
  );
}
