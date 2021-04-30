// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';
import '../Cards/Card_css/CardProfile.css';

function BtnCancel(props) {
  const { handleClick } = props;
  return (
    <>
      <button id="btn" className="cancel" type="submit" onClick={handleClick}>
        Annuler
      </button>
    </>
  );
}

export default BtnCancel;

BtnCancel.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

// BtnSubmit.propTypes = ChildrenPropType;
