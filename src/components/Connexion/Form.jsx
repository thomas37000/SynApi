/* eslint-disable react/prop-types */
/* eslint-disable indent */
/* eslint-disable no-nested-ternary */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Link } from 'react-router-dom';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
// import PropTypes from 'prop-types';
import './Connexion.css';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const Form = (props) => {
  const {
    API_USER,
    open,
    userName,
    handleChange,
    handleClick,
    handleClose,
    handleSubmit,
  } = props;

  return (
    <div>
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
              <input type="submit" value="connexion" onClick={handleClick} />
              <Snackbar
                open={open}
                autoHideDuration={4000}
                onClose={handleClose}
              >
                <Alert
                  severity="error"
                  onClose={handleClose}
                  // classeName={classes.alertStyles}
                >
                  {console.log('if', userName) && userName === ''
                    ? 'Ce champ doit être rempli !'
                    : console.log('else', !userName) && !userName
                    ? "Ce n'est pas le bon nom !"
                    : null}
                  {/* {userName
                        ? "Ce n'est pas le bon nom !"
                        : 'Ce champ doit être rempli !'} */}
                </Alert>
              </Snackbar>
            </>
          )}
        </div>
      </form>
    </div>
  );
};

// Form.propTypes = {

// };

export default Form;
