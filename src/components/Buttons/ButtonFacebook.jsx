// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import SliderFacebook from '../Slider/SliderFacebook';
import './ButtonNetworks.css';

function BtnLoadFacebook() {
  const [networks, setNetworks] = useState(false);
  return (
    <>
      <button
        id="btn"
        className="btnFacebook"
        type="submit"
        onClick={() => setNetworks(!networks)}
      >
        Facebook
      </button>
      {networks ? <SliderFacebook /> : null}
    </>
  );
}

export default BtnLoadFacebook;

// BtnLoadTwitter.propTypes = ChildrenPropType;
