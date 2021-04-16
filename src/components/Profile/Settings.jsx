import React from 'react';
// import PropTypes from 'prop-types';
import '../Cards/Card_css/CardProfile.css';

const Settings = () => {
  return (
    <div className="settingsCategory">
      <p className="instructions">
        Change the colors
        <p>
          of your <span className="spanTool">Network</span> :
        </p>
      </p>
      <p className="instructions">
        Change the colors
        <p>
          of the <span className="spanTool"> Background</span> Network :
        </p>
        <p>
          <span className="spanTool2">
            (Works only when there is no image background)
          </span>
        </p>
      </p>

      <p className="instructions">
        Change the colors{' '}
        <p>
          of the <span className="spanTool"> Text</span> :
        </p>
      </p>

      <p className="instructions">
        Change the colors
        <p>
          {' '}
          of the
          <span className="spanTool"> # </span>
          and
          <span className="spanTool"> @ </span> :
        </p>
      </p>
    </div>
  );
};

export default Settings;
