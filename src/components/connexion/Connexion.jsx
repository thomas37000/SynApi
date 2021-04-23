/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-undef */
import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import './Connexion.css';

const Connexion = () => {
  const [hover, setHover] = useState();
  return (
    <div className="connexion">
      <div className="main">
        <h1>Slide Your Net</h1>
        <h2>The Application to recover your favorite Networks post</h2>
        <h3>
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
              name="inputEmail"
              placeholder="John Doe"
              required
              // value=""
              // onChange={() => {}}
            />
          </label>
          <button
            id="btn"
            className="btnConnexion"
            type="submit"
            onClick={() => {}}
          >
            Connexion
          </button>
        </form>
      </div>
    </div>
  );
};

// Connexion.propTypes = { };
export default Connexion;
