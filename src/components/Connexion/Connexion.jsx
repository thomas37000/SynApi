/* eslint-disable react/prop-types */
/* eslint-disable indent */
/* eslint-disable no-nested-ternary */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-undef */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SketchPicker } from 'react-color';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import BtnConnexion from '../Buttons/BtnConnexion';
import FormSettings from './FormSettings';
// import PropTypes from 'prop-types';
import './Connexion.css';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const Connexion = (props) => {
  const styledAlert = makeStyles({
    alertStyles: {
      backgroundColor: '#f44336',
      color: 'white',
    },
  });

  const [users, setUsers] = useState([]);
  const [jsonObj, setJsonObj] = useState({});
  const [error, setError] = useState(null);

  const {
    REACT_APP_API_URL,
    REACT_APP_API_USER,
    REACT_APP_API_TOKEN,
  } = process.env;

  const API_URL = `${REACT_APP_API_URL}`;
  const API_USER = `${REACT_APP_API_USER}`;
  const API_TOKEN = `${REACT_APP_API_TOKEN}`;

  // https://slideyour.net/thomas3 ou https://slideyour.net/test-connexion etc...

  const params = {
    s: `${API_USER}`,
    t: `${API_TOKEN}`,
    object: 'user',
  };

  const url = 'http://slideyour.net/api.php';

  const getApi = async (onSuccess, onError) => {
    await axios.get(`${API_URL}`, { params }).then(
      (res) => {
        setUsers(res.data);
      },
      (err) => {
        setError(err);
        console.log(error);
      }
    );
  };

  useEffect(() => {
    getApi();
  }, []);

  // log l' utlisateur de USERS
  // si oui
  // context user
  // si il coche on l' enregistre dans sessionStorage

  const classes = styledAlert();

  // SOIT faire un appel d' API pour le USER mais sans le TOKEN

  // SOIT faire un appel d' API pour les 2 pour changer les params

  const defaultUserName = {
    userName: sessionStorage.getItem('userName') || '',
  };
  const [open, setOpen] = useState(false);
  const [userName, setUserName] = useState('');
  const [userNameToken, setUserNameToken] = useState('');
  const [token, setToken] = useState('');
  const [jsonObjToken, setJsonObjToken] = useState({});

  const [bgColor, setBgColor] = useState('green');
  const handleChangeBg = (color) => {
    setBgColor(color);
    sessionStorage.setItem('bgColor', color);
  };

  // ça donne [Object] [object] si je mets defaultUserName ?
  const handleChange = (e) => {
    setUserName(e.target.value);
  };

  const handleChangeUserToken = (e) => {
    setUserNameToken(e.target.value);
  };

  const handleChangeToken = (e) => {
    setToken(e.target.value);
  };

  const handleSubmit = (e) => {
    // console.log(`Bienvenue ${userName}`);
    e.preventDefault();
    setUserName('');
    const jsonUsername = JSON.stringify(jsonObj);
  };

  // const displayUserName = () => {
  //   if (handleSubmit) {
  //     return userName;
  //   }
  // };

  const handleSubmitToken = (e) => {
    // console.log(`Bienvenue ${userNameToken}`);
    e.preventDefault();
    setToken('');
    const jsonUsername = JSON.stringify(jsonObjToken);
  };

  // stocker que si c'est bon
  useEffect(() => {
    sessionStorage.setItem('user-name', API_USER);
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

  const handleCloseToken = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const { displayUserName } = props;

  return (
    <div className="connexion">
      <div className="acceuil">
        <h1 className="h1Connexion">Slide Your Net</h1>
        <h2 className="h2Connexion">
          Une application pour retrouver vos publications favorites
        </h2>
        <h3 className="h3Connexion">
          from <span>Facebook</span> - <span>Instagram</span> -
          <span>Twitter</span>
        </h3>
        <div className="formulaire">
          {userName === API_USER ? (
            <div>
              Bienvenue
              <Link to="/networks"> {userName}</Link>
            </div>
          ) : null}

          <form onSubmit={handleSubmit}>
            <span>Pour voir les publications</span>
            <label htmlFor="inputidentifiant" className="label">
              Entrez votre nom
              <input
                className="inputConnexion"
                type="text"
                id="inputIdentifiant"
                name="inputMail"
                placeholder="John Doe"
                value={userName}
                onChange={handleChange}
              />
            </label>

            <div>
              {/* //  user est loggé ou pas  */}
              {userName === API_USER ? (
                <Link to="/networks">
                  <input
                    type="submit"
                    value="connexion"
                    className="inputSubmit"
                    onSubmit={handleSubmit}
                  />
                </Link>
              ) : (
                <>
                  <input
                    type="submit"
                    value="connexion"
                    onClick={handleClick}
                  />
                  <Snackbar
                    open={open}
                    autoHideDuration={4000}
                    onClose={handleClose}
                  >
                    <Alert
                      severity="error"
                      onClose={handleClose}
                      classeName={classes.alertStyles}
                    >
                      ...
                    </Alert>
                  </Snackbar>
                </>
              )}
            </div>
          </form>

          <FormSettings
            open={open}
            token={token}
            userName={userName}
            userNameToken={userNameToken}
            handleChangeToken={handleChangeToken}
            handleChangeUserToken={handleChangeUserToken}
            handleCloseToken={handleChangeToken}
            handleSubmit={handleSubmitToken}
            handleClick={handleClick}
          />
        </div>
      </div>
    </div>
  );
};

// Connexion.propTypes = { };
export default Connexion;
