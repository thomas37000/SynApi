/* eslint-disable react/no-danger */
import React, { useState } from 'react';
import { CirclePicker } from 'react-color';
import './Tools.css';

export default function Tools() {
  const [colors, setColors] = useState(false);

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
          <CirclePicker onClick={() => setColors(!colors)} />
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
          <CirclePicker onClick={() => setColors(!colors)} />
        </div>
        <button type="submit">Submit</button>
      </div>
    </div>
  );
}
