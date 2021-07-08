import React from 'react';
import '../Cards/Card_css/CardProfile.css';
import childrenPropType from '../Proptypes/ChildrenProptypes';

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

BtnSubmit.propTypes = childrenPropType;
