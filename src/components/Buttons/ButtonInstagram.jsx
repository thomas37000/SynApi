// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import SliderInstagram from '../Slider/SliderInstagram';
import './ButtonNetworks.css';

function BtnLoadInstagram() {
  const [networks, setNetworks] = useState(false);
  return (
    <>
      <button
        id="btn"
        className="btnInsta"
        type="submit"
        onClick={() => setNetworks(!networks)}
      >
        Instagram
      </button>
      {networks ? <SliderInstagram /> : null}
    </>
  );
}

export default BtnLoadInstagram;

// BtnLoadTwitter.propTypes = ChildrenPropType;