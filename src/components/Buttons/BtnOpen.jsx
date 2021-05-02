import React from 'react';
import PropTypes from 'prop-types';

function BtnOpen(props) {
  const { handleClick } = props;
  return (
    <>
      <button className="btn-sidebar" type="button" onClick={handleClick}>
        <i className="fa fa-cog fa-2x" />
      </button>
    </>
  );
}

export default BtnOpen;

BtnOpen.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

// BtnOpen.propTypes = ChildrenPropType;
