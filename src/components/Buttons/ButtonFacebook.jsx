// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import './ButtonNetworks.css';

function BtnLoadFacebook() {
  const [networks, setNetworks] = useState([]);
  return (
    <button
      id="btn"
      className="btnFacebook"
      type="submit"
      onClick={() => setNetworks(!networks)}
    >
      Facebook
    </button>
  );
}

export default BtnLoadFacebook;

// BtnLoadTwitter.propTypes = ChildrenPropType;
