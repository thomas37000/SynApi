import React from 'react';
import PropTypes from 'prop-types';
import '../Cards/Card_css/CardProfile.css';

function BtnSubmit(props) {
  const { handleClick } = props;
  return (
    <>
      <button id="btn" className="submit" type="submit" onClick={handleClick}>
        Valider
      </button>
    </>
  );
}

export default BtnSubmit;

BtnSubmit.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

// BtnSubmit.propTypes = ChildrenPropType;
