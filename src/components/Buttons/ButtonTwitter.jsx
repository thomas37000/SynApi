// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import './ButtonNetworks.css';

function BtnLoadTwitter() {
  // const [networks, setNetworks] = useState([]);
  return (
    <button
      id="btn"
      className="btnTwitter"
      type="submit"
      // onClick={() => setNetworks(!networks)}
    >
      Twitter
    </button>
  );
}

export default BtnLoadTwitter;

// BtnLoadTwitter.propTypes = ChildrenPropType;
