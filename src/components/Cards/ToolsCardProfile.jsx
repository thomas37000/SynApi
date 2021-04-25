/* eslint-disable no-undef */
/* eslint-disable react/jsx-no-undef */
import React from 'react';

const ToolsCardProfile = () => {
  return (
    <div>
      <div className="settings">
        <Settings />
        <div className="colorSettings">
          {/* <div className="form-group network">
    <BtnLoadTwitter />
    <BtnLoadFacebook />
    <BtnLoadInstagram />
  </div> */}

          <div className="form-group">
            <FontPicker
              apiKey="AIzaSyBqmdg2e_R-b0vz6xutdlonOrfWUuQ0Tas"
              activeFontFamily={activeFontFamily}
              onChange={(nextFont) => setActiveFontFamily(nextFont.family)}
              className="typo"
            />

            {/* <div className="btnSettings">
      <button
        id="btn"
        className="cancel"
        type="submit"
        onClick={() => restoreFontFamily()}
      >
        Cancel
      </button>
    </div> */}
          </div>

          <div className="form-group">
            <SketchPicker
              onChange={(color) => setBgColor(color.hex)}
              className="sketchPicker"
            />
            <div className="btnSettings">
              <button
                id="btn"
                className="cancel"
                type="submit"
                onClick={() => restoreBg()}
              >
                Cancel
              </button>
            </div>
          </div>
          <div className="form-group">
            <SketchPicker onChange={(color) => setTxtColor(color.hex)} />
            <div className="btnSettings">
              <button
                id="btn"
                className="cancel"
                type="submit"
                onClick={() => restoreTxt()}
              >
                Cancel
              </button>
            </div>
          </div>

          <div className="form-group">
            <SketchPicker
              onChange={(color) =>
                setHashtagColor(color.hex) || setMentionColor(color.hex)
              }
              className="sketchPicker"
            />
            <div className="btnSettings">
              <button
                id="btn"
                className="cancel"
                type="submit"
                onClick={() => {
                  restorehashtagColor();
                  restoreMention();
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
        <button
          id="btn"
          className="submit"
          type="submit"
          onClick={() => submitColor()}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default ToolsCardProfile;
