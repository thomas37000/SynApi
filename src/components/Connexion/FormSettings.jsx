/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
// import PropTypes from 'prop-types';
import './Connexion.css';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const FormSettings = (props) => {
  const {
    open,
    token,
    userName,
    userNameToken,
    handleClick,
    handleChangeToken,
    handleChangeUserToken,
    handleCloseToken,
    handleSubmitToken,
  } = props;

  return (
    <form onSubmit={handleSubmitToken}>
      <span>Changer les paramètres du Slider</span>
      <label htmlFor="inputidentifiant" className="label">
        Entrez votre nom
        <input
          className="inputConnexion"
          type="text"
          id="inputIdentifiant"
          name="inputIdentifiant"
          placeholder="John Doe"
          value={userNameToken}
          onChange={handleChangeUserToken}
        />
      </label>
      <p>
        <label htmlFor="inputidentifiant" className="label">
          Entrez votre Token
          <input
            className="inputToken"
            type="password"
            id="inputToken"
            name="inputToken"
            placeholder="a1W4xcvb23..."
            value={token}
            required
            onChange={handleChangeToken}
          />
        </label>
      </p>

      <div>
        {userName && token ? (
          <Link to="/networks">
            <input
              type="submit"
              value="connexion"
              className="inputSubmit"
              onSubmit={handleSubmitToken}
            />
          </Link>
        ) : (
          <>
            <input type="submit" value="connexion" onClick={handleClick} />
            <Snackbar
              open={open}
              autoHideDuration={6000}
              onClose={handleCloseToken}
            >
              <Alert severity="error" onClose={handleCloseToken}>
                ce champ doit être rempli !
              </Alert>
            </Snackbar>
          </>
        )}
      </div>
    </form>
  );
};

// Connexion.propTypes = { };
export default FormSettings;
