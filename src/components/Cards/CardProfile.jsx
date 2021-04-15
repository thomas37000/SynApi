/* eslint-disable no-console */
/* eslint-disable indent */
/* eslint-disable no-nested-ternary */
/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
/* eslint-disable no-plusplus */
/* eslint-disable react/no-danger */
/* eslint-disable no-extra-boolean-cast */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CirclePicker, CompactPicker, SketchPicker } from 'react-color';
import PropTypes from 'prop-types';
import ColorContext from '../Context/ColorContext';
import BtnLoadTwitter from '../Buttons/ButtonTwitter';
import BtnLoadFacebook from '../Buttons/ButtonFacebook';
import BtnLoadInstagram from '../Buttons/ButtonInstagram';
import useLocalState from '../Context/LocalStrorage';
import './Card_css/CardProfile.css';

export default function CardProfile({ post }) {
  const [toggleColor, setToggleColor] = useContext(ColorContext);
  const [spanColor, setSpanColor] = useState();
  const [BgColor, setBgColor] = useState();
  const [TxtColor, setTxtColor] = useState();
  const [networks, setNetworks] = useState([]);

  const bg = `url(${post.media_url})`;
  const bgBefore = {
    '--before': bg,
  };

  const mention = /[@]\w+/g;
  const hashtag = /[#]\w+/g;
  const retweet = /(RT @)\w+:/g;
  // const convertHexColor = toString().spanColor;

  function Highlight(match) {
    // console.log(`MATCH`,match);
    return match
      .replace(retweet, (txt) => {
        return `<span class="txtRetweet">${txt}</span>`;
      })
      .replace(mention, (txt) => {
        // console.log('MENTION', spanColor);
        return `<span class="txtMention" ${spanColor}>${txt}</span>`;
      })
      .replace(hashtag, (txt) => {
        // console.log('SPANCOLOR', spanColor, txt);
      // si spancOlor et txt( === string )
        return `<span class="txtHashtag txtHashtagNoImg" style="color:${spanColor}">${txt}</span>`;
      });
    // il faut un autre replace pour détecter et changer les #
  }

  // console.log(Highlight);

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
    setToggleColor(BgColor);
    console.log('change BgColor', BgColor);
  };

  const SubmitSpanColor = () => {
    setToggleColor(spanColor);
    console.log('change SpanColor', spanColor);
  };

  const SubmitTxtColor = () => {
    setToggleColor(TxtColor);
    console.log('change Text Color', TxtColor);
  };

  return (
    <>
      <div className="galerie">
        <div
          className={post.media_url ? ' cardWithImg' : 'cardTr'}
          style={post.media_url ? bgBefore : { backgroundColor: BgColor }}
        >
          <div className="settings">
            <div className="profileName">
              <div className="userCard">
                <img
                  className="logoUser"
                  // warning proptypes (absent!!!!)
                  src={post.user.avatar_url}
                  alt={post.user.name}
                />
                <h3 className="userProfile">{post.user.name}</h3>
              </div>
            </div>
            <div className="colorSettings">
              <div className="form-group network">
                <p className="instructions">
                  Change the colors of your{' '}
                  <span className="spanTool">Network</span> :
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

                <CompactPicker
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
                  Change the colors of the{' '}
                  <span className="spanTool"> Text</span> :
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
                <p className="instructions">
                  Change the colors of the # and @ :
                </p>
                <SketchPicker
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

          <div className={post.media_url ? 'cardBodyWithImg' : 'cardBodyNoImg'}>
            <div className={post.media_url ? 'content' : 'contentNoImg'}>
              <div className="groupColor">
                <div className="spanGroup">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: Highlight(post.content),
                    }}
                    style={{ color: TxtColor }}
                  />
                </div>
                <div className="spanGroup">
                  <span
                    className="txtHashtag spanHashtag"
                    style={{ color: spanColor }}
                  >
                    #{post.network}
                  </span>
                  <span
                    className="txtMention spanMention"
                    style={{ color: spanColor }}
                  >
                    @{post.user.name}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="cardImg">
            <div className={post.media_url ? 'getImg' : 'hideImg'}>
              <img src={post.media_url} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

CardProfile.propTypes = {
  post: PropTypes.shape({
    avatar_url: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    media_url: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    pub_date: PropTypes.string.isRequired,
    pub_url: PropTypes.string.isRequired,
    search: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired,
};
