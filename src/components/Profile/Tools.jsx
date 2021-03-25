/* eslint-disable no-console */
/* eslint-disable no-return-assign */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-danger */
import React, { useState, useContext } from 'react';
import axios from 'axios';
import { CirclePicker } from 'react-color';
import ColorContext from '../Context/ColorContext';
import './Tools.css';

export default function Tools(props) {
  const [background, setBackgroundColor] = useState();
  const [spanColor, setSpanColor] = useState('#4267b2');
  const [toggleColor, setToggleColor] = useContext(ColorContext);

  return (
    <div className="mainTools">
      <div className="tools">
        <div className="form-group">
          <p>
            Change the colors of your <span className="spanTool">Network</span>{' '}
            :
          </p>
          <li>
            <label htmlFor="a">
              <input
                name=""
                value=""
                type="checkbox"
                className="input-checkbox"
              />
              Facebook
            </label>
          </li>
          <li>
            <label htmlFor="b">
              <input
                name=""
                value=""
                type="checkbox"
                className="input-checkbox"
              />
              Instagram
            </label>
          </li>
          <li>
            <label htmlFor="b">
              <input
                name=""
                value=""
                type="checkbox"
                className="input-checkbox"
              />
              Twitter
            </label>
          </li>
        </div>
        <div className="form-group">
          <p>
            Change the colors of the
            <span className="spanTool spanHashtag"> #</span> or
            <span className="spanTool spanHashtag"> @</span> :
          </p>
          <CirclePicker
            color={spanColor}
            onChange={(color) => setSpanColor(color.hex)}
            onClick={(color) => setToggleColor(color.hex)}
            className="circlepicker"
          />
          <span className="spanTest" style={{ color: spanColor }}>
            #Change #Me #Please, @JohnDoe
          </span>

          <button type="submit">Submit</button>
        </div>
        <div className="form-group">
          <p>
            Change the colors of the
            <span className="spanTool"> Background</span> Network :
            <p>
              <span className="spanTool2">
                ( Works only when there is no image background )
              </span>
            </p>
          </p>

          <CirclePicker
            color={background}
            onChangeComplete={(color) => setBackgroundColor(color.hex)}
            className="circlepicker"
          />

          <div className="area" style={{ backgroundColor: background }} />
        </div>
        <button type="submit">Submit</button>
      </div>
    </div>
  );
}
