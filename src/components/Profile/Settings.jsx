import React from 'react';
// import PropTypes from 'prop-types';
import '../Cards/Card_css/CardProfile.css';

const Settings = () => {
  return (
    <div className="settingsCategory">
      <div className="instructions">
        Change the
        <span className="spanTool">Typography</span>
      </div>
      {/* <div className="instructions">
        Change the colors
        <div>
          of your <span className="spanTool">Network</span> :
        </div>
      </div> */}
      <div className="instructions">
        Change the colors
        <div>
          of the <span className="spanTool"> Background</span> Network :
        </div>
        <div>
          <span className="spanTool2">
            (Works only when there is no image background)
          </span>
        </div>
      </div>

      <div className="instructions">
        Change the colors{' '}
        <div>
          of the <span className="spanTool"> Text</span> :
        </div>
      </div>

      <div className="instructions">
        Change the colors
        <div>
          {' '}
          of the
          <span className="spanTool"> # </span>
          and
          <span className="spanTool"> @ </span> :
        </div>
      </div>
    </div>
  );
};

export default Settings;
