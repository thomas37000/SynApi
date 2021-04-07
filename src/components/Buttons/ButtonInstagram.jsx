// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import './ButtonNetworks.css';

function BtnLoadInstagram() {
  // const [networks, setNetworks] = useState([]);
  return (
    <button
      id="btn"
      className="btnInsta"
      type="submit"
      // onClick={() => setNetworks(!networks)}
    >
      Instagram
    </button>
  );
}

export default BtnLoadInstagram;

// BtnLoadTwitter.propTypes = ChildrenPropType;
