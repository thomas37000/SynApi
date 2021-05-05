/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-undef */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import BtnConnexion from '../Buttons/BtnConnexion';
// import PropTypes from 'prop-types';
import './Connexion.css';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const Connexion = () => {
  const styledAlert = makeStyles({
    alertStyles: {
      backgroundColor: '#f44336',
      color: 'white',
    },
  });

  const classes = styledAlert();
  console.log(classes);

  const defaultUserName = {
    userName: sessionStorage.getItem('') || 'Thomas3',
  };

  const [userName, setUserName] = useState('');
  const [userNameToken, setUserNameToken] = useState('');
  const [userToken, setUserToken] = useState('');
  const [open, setOpen] = React.useState(false);
  const [jsonObj, setJsonObj] = useState({});

  // ça donne [Object] [object] si je mets defaultUserName ?
  const handleChange = (e) => {
    setUserName(e.target.value);
  };

  const handleChangeToken = (e) => {
    setUserNameToken(e.target.value);
  };

  const handleSubmit = (e) => {
    console.log(`Bienvenue ${userName}`);
    e.preventDefault();
    setUserName('');
    const jsonUsername = JSON.stringify(jsonObj);
  };

  const handleSubmitToken = (e) => {
    console.log(`Bienvenue ${userNameToken}`);
    e.preventDefault();
    setUserNameToken('');
    setUserToken('');
    const jsonUsername = JSON.stringify(jsonObj);
  };

  useEffect(() => {
    sessionStorage.setItem('userName', userName);
    // console.log('userName', sessionStorage);
    setJsonObj({
      userName,
    });
  }, [userName]);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

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
        <div className="formulaire">
          <form onSubmit={handleSubmit}>
            <span>To see the Posts</span>
            <label htmlFor="inputidentifiant" className="label">
              Enter your slide name
              <input
                className="inputConnexion"
                // className={wrong ? 'inputConnexion' : 'error'}
                type="text"
                id="inputIdentifiant"
                name="inputMail"
                placeholder="John Doe"
                value={userName}
                onChange={handleChange}
              />
            </label>
            <div>
              {/* <BtnConnexion /> */}
              {/* <Link to="/networks">
                <input
                  type="submit"
                  value="connexion"
                  onSubmit={handleSubmit}
                />
              </Link> */}
              <input
                type="submit"
                value="connexion"
                onSubmit={handleSubmit}
                onClick={handleClick}
              />
              <Snackbar
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
              >
                <Alert
                  severity="error"
                  onClose={handleClose}
                  classeName={classes.alertStyles}
                >
                  ce champ doit être rempli !
                </Alert>
              </Snackbar>
            </div>
          </form>

          <form>
            <span>To Change the settings Slider</span>
            <label htmlFor="inputidentifiant" className="label">
              Enter your slide name
              <input
                className="inputConnexion"
                // className={wrong ? 'inputConnexion' : 'error'}
                type="text"
                id="inputIdentifiant"
                name="inputMail"
                placeholder="John Doe"
                value={userNameToken}
                required
                onChange={handleChangeToken}
              />
            </label>
            <p>
              <label htmlFor="inputidentifiant" className="label">
                Enter your Token
                <input
                  className="inputToken"
                  // className={wrong ? 'inputConnexion' : 'error'}
                  type="password"
                  id="inputToken"
                  name="inputToken"
                  placeholder="a1W4xcvb23..."
                  value={userToken}
                  required
                  onChange={handleChangeToken}
                />
              </label>
            </p>

            <p>
              <input
                type="submit"
                value="connexion"
                onSubmit={handleSubmitToken}
              />
              {/* <BtnConnexion /> */}
              {/* <Link to="/networks">
                <BtnConnexion handleClick={handleSubmit} />
              </Link> */}
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

// Connexion.propTypes = { };
export default Connexion;
