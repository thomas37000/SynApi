/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-undef */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BtnConnexion from '../Buttons/BtnConnexion';
// import PropTypes from 'prop-types';
import './Connexion.css';

const Connexion = () => {
  const [hover, setHover] = useState();
  // function linkToSliders() {
  //   return
  // }

  return (
    <div className="connexion">
      <div className="acceuil">
        <h1 className="h1Connexion">Slide Your Net</h1>
        <h2 className="h2Connexion">
          The Application to recover your favorite Networks post
        </h2>
        <h3 className="h3Connexion">
          from <span>Facebook</span> - <span>Instagram</span> -
          <span>Twitter</span>
        </h3>

        <form>
          <label htmlFor="inputidentifiant" className="label">
            Enter your slide name
            <input
              className="inputConnexion"
              type="text"
              id="inputIdentifiant"
              name="inputMail"
              placeholder="John Doe"
              required
              // value=""
              // onChange={() => {}}
            />
          </label>
          <Link to="/networks">
            <BtnConnexion handleClick={() => {}} />
          </Link>
        </form>
      </div>
    </div>
  );
};

// Connexion.propTypes = { };
export default Connexion;
