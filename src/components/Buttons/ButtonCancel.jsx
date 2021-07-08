import React from 'react';
import '../Cards/Card_css/CardProfile.css';
import childrenPropType from '../Proptypes/ChildrenProptypes';

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

BtnCancel.propTypes = childrenPropType;
