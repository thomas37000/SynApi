/* eslint-disable react/no-danger */
import React from 'react';
import './Tools.css';

export default function Tools() {
  return (
    <div className="mainTools">
      <div className="tools">
        <div className="form-group">
          <p>Change the colors of your Network :</p>
          <li>
            <label htmlFor="a">
              <input
                name="prefer"
                value="front-end-projects"
                type="checkbox"
                className="input-checkbox"
              />
              Facebook
            </label>
          </li>
          <li>
            {' '}
            <label htmlFor="b">
              <input
                name="prefer"
                value="back-end-projects"
                type="checkbox"
                className="input-checkbox"
              />
              Instagram
            </label>
          </li>
          <li>
            <label htmlFor="b">
              <input
                name="prefer"
                value="back-end-projects"
                type="checkbox"
                className="input-checkbox"
              />
              Twitter
            </label>
          </li>
        </div>
      </div>
    </div>
  );
}
