/* eslint-disable no-console */
/* eslint-disable no-return-assign */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-danger */
import React, { useState, useContext } from 'react';
import axios from 'axios';
import { CirclePicker } from 'react-color';
import ColorContext from '../Context/ColorContext';
import BtnLoadTwitter from '../Buttons/ButtonTwitter';
import BtnLoadFacebook from '../Buttons/ButtonFacebook';
import BtnLoadInstagram from '../Buttons/ButtonInstagram';
import '../Cards/Card_css/CardProfile.css';

export default function Tools() {
  const [toggleColor, setToggleColor] = useContext(ColorContext);
  const [spanColor, setSpanColor] = useState();
  const [BgColor, setBgColor] = useState();
  const [TxtColor, setTxtColor] = useState();
  const [networks, setNetworks] = useState([]);

  const changeColor = document.getElementById('btn');

  // restore color background / text / # or @ by default
  const restoreSpanColor = () => {
    setSpanColor(!spanColor);
  };

  const restoreBg = () => {
    setBgColor(!BgColor);
  };

  const restoreTxt = () => {
    setTxtColor(!TxtColor);
  };

  const SubmitBg = () => {
    setBgColor(BgColor);
    console.log('change BgColor', BgColor);
  };

  const SubmitSpanColor = () => {
    setSpanColor(spanColor);
    console.log('change SpanColor', spanColor);
  };

  const SubmitTxtColor = () => {
    setTxtColor(TxtColor);
    console.log('change Text Color', TxtColor);
  };

  return (
    <div className="settings">
      <div className="colorSettings">
        <div className="form-group network">
          <p className="instructions">
            Change the colors of your <span className="spanTool">Network</span>{' '}
            :
          </p>
          <BtnLoadTwitter />
          <BtnLoadFacebook />
          <BtnLoadInstagram />
        </div>
        <div className="form-group">
          <p className="instructions">
            Change the colors of the
            <span className="spanTool"> Background</span> Network :
            <p>
              <span className="spanTool2">
                ( Works only when there is no image background )
              </span>
            </p>
          </p>

          <CirclePicker
            onChange={(color) => setBgColor(color.hex)}
            onSubmit={(e) => SubmitBg(e)}
            className="circlepicker"
          />
          <div className="btnSettings">
            <button
              id="btn"
              className="btnColor submit"
              type="submit"
              value={BgColor}
              onClick={() => SubmitBg(BgColor)}
            >
              Submit
            </button>

            <button
              id="btn"
              className="btnColor cancel"
              type="submit"
              onClick={() => restoreBg()}
            >
              Cancel
            </button>
          </div>
        </div>
        <div className="form-group">
          <p className="instructions">
            Change the colors of the <span className="spanTool"> Text</span> :
          </p>

          <CirclePicker
            onChange={(color) => setTxtColor(color.hex)}
            onSubmit={(e) => SubmitBg(e)}
            className="circlepicker"
          />
          <div className="btnSettings">
            <button
              id="btn"
              className="btnColor submit"
              type="submit"
              value={TxtColor}
              onClick={() => SubmitTxtColor(TxtColor)}
            >
              Submit
            </button>

            <button
              id="btn"
              className="btnColor cancel"
              type="submit"
              onClick={() => restoreTxt()}
            >
              Cancel
            </button>
          </div>
        </div>

        <div className="form-group">
          <p className="instructions">Change the colors of the # and @ :</p>
          <CirclePicker
            color={spanColor}
            onChange={(color) => setSpanColor(color.hex)}
            onSubmit={(e) => SubmitSpanColor(e)}
            className="circlepicker"
          />
          <div className="btnSettings">
            <button
              id="btn"
              className="btnColor submit"
              type="submit"
              value={spanColor}
              onClick={() => SubmitSpanColor(spanColor)}
            >
              Submit
            </button>

            <button
              id="btn"
              className="btnColor cancel"
              type="submit"
              onClick={() => restoreSpanColor()}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
