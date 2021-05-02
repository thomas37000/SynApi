// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';
import '../Cards/Card_css/CardProfile.css';

function BtnConnexion(props) {
  const { handleClick } = props;
  return (
    <>
      <button
        id="btn"
        className="btn-connexion"
        type="submit"
        onClick={handleClick}
      >
        Connexion
      </button>
    </>
  );
}

export default BtnConnexion;

BtnConnexion.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

// BtnConnexion.propTypes = ChildrenPropType;
