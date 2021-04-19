// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import SliderTwitter from '../Slider/SliderFacebook';
import './ButtonNetworks.css';

function BtnLoadTwitter() {
  const [networks, setNetworks] = useState(false);
  return (
    <>
      <button
        id="btn"
        className="btnTwitter"
        type="submit"
        onClick={() => setNetworks(!networks)}
      >
        Twitter
      </button>
      {networks ? <SliderTwitter /> : null}
    </>
  );
}

export default BtnLoadTwitter;

// BtnLoadTwitter.propTypes = ChildrenPropType;
