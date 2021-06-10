import React from 'react';
import PropTypes from 'prop-types';

function BtnClose(props) {
  const { handleClick } = props;
  return (
    <>
      <button className="close" type="button" onClick={handleClick}>
        X
      </button>
    </>
  );
}

export default BtnClose;

BtnClose.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

// BtnClose.propTypes = ChildrenPropType;
