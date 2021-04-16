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
import BtnSubmit from '../Buttons/ButtonSubmit';
import useLocalState from '../Context/LocalStrorage';
import Settings from '../Profile/Settings';
import './Card_css/CardProfile.css';

export default function CardProfile({ post }) {
  const [toggleColor, setToggleColor] = useContext(ColorContext);
  const [spanColor, setSpanColor] = useState(sessionStorage.getItem('SpanColor'));
  const [BgColor, setBgColor] = useState(sessionStorage.getItem('BgColor'));
  const [TxtColor, setTxtColor] = useState(sessionStorage.getItem('TxtColor'));
  const [mentionColor, setMentionColor] = useState(
    sessionStorage.getItem('MentionColor')
  );
  const [displayColorPicker, setDisplayColorPicker] = useState(false);
  const [networks, setNetworks] = useState([]);

  const bg = `url(${post.media_url})`;
  const bgBefore = {
    '--before': bg,
  };

  const mention = /[@]\w+/g;
  const hashtag = /[#]\w+/g;
  const retweet = /(RT @)\w+:/g;
  const originalUserName = post.user.name;

  function Highlight(match) {
    return match
      .replace(retweet, (txt) => {
        return `<span class="txtRetweet">${txt}</span>`;
      })
      .replace(hashtag, (txt) => {
        return `<span class="txtHashtag" style="color:${spanColor}">${txt}</span>`;
      })
      .replace(mention, (txt) => {
        return `<span class="txtMention" style="color:${mentionColor}">${txt}</span>`;
      });
  }

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

  const restoreMention = () => {
    setMentionColor(!mentionColor);
  };

  const SubmitColor = () => {
    setToggleColor(BgColor, mentionColor, spanColor, TxtColor);
    // sessionStorage.setItem('text', TxtColor);
    // console.log(sessionStorage);
    console.log(
      'BG Color',
      BgColor,
      'Mention Color',
      mentionColor,
      'Span Color',
      spanColor,
      'Text Color',
      TxtColor
    );
  };

  useEffect(() => {
    sessionStorage.setItem('BgColor', BgColor);
    sessionStorage.setItem('MentionColor', mentionColor);
    sessionStorage.setItem('SpanColor', spanColor);
    sessionStorage.setItem('TxtColor', TxtColor);
    console.log(sessionStorage);
  }, [BgColor, mentionColor, spanColor, TxtColor]);

  const handleClick = () => {
    setDisplayColorPicker(!displayColorPicker);
  };

  const popover = {
    position: 'absolute',
    zIndex: '2',
  };
  const cover = {
    position: 'fixed',
    top: '0px',
    right: '0px',
    bottom: '0px',
    left: '0px',
  };
  return (
    <>
      <div className="galerie">
        <div
          className={post.media_url ? ' cardWithImg' : 'cardTr'}
          style={post.media_url ? bgBefore : { backgroundColor: BgColor }}
        >
          <div className="settings">
            <Settings />
            <div className="colorSettings">
              <div className="form-group network">
                <BtnLoadTwitter />
                <BtnLoadFacebook />
                <BtnLoadInstagram />
              </div>

              <div className="form-group">
                <SketchPicker
                  onChange={(color) => setBgColor(color.hex)}
                  onSubmit={(e) => SubmitBg(e)}
                  className="circlepicker"
                />
                <div className="btnSettings">
                  <button
                    id="btn"
                    className="submit"
                    type="submit"
                    value={BgColor}
                    onClick={() => SubmitColor(BgColor)}
                  >
                    Submit
                  </button>

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
                <SketchPicker
                  onChange={(color) => setTxtColor(color.hex)}
                  onSubmit={(e) => SubmitBg(e)}
                  className="circlepicker"
                />
                <div className="btnSettings">
                  {/* <BtnSubmit value={TxtColor} onClick={() => SubmitColor(TxtColor)}/> */}
                  <button
                    id="btn"
                    className="submit"
                    type="submit"
                    value={TxtColor}
                    onClick={() => SubmitColor(TxtColor)}
                  >
                    Submit
                  </button>

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
                  // color={mentionColor}
                  onChange={(color) =>
                    setSpanColor(color.hex) || setMentionColor(color.hex)
                  }
                  onSubmit={(e) => SubmitColor(e)}
                  className="circlepicker"
                />
                <div className="btnSettings">
                  <button
                    id="btn"
                    className="submit"
                    type="submit"
                    value={spanColor}
                    onClick={() => SubmitColor(spanColor)}
                  >
                    Submit
                  </button>

                  <button
                    id="btn"
                    className="cancel"
                    type="submit"
                    onClick={() => {
                      restoreSpanColor();
                      restoreMention();
                    }}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className={post.media_url ? 'cardBodyWithImg' : 'cardBodyNoImg'}>
            <div className={post.media_url ? 'content' : 'contentNoImg'}>
              <div
                dangerouslySetInnerHTML={{
                  __html: Highlight(post.content),
                }}
                style={{ color: TxtColor }}
              />
            </div>
            <div className="cardImg">
              <div className={post.media_url ? 'getImg' : 'hideImg'}>
                <img src={post.media_url} alt="" />
              </div>
            </div>
          </div>
          <div className="userCard">
            <img
              className="logoUser"
              src={post.user.avatar_url}
              alt={post.user.name}
            />
            <h3 className="reTweet">
              <div
                dangerouslySetInnerHTML={{
                  __html: originalUserName,
                }}
              />
            </h3>
          </div>
          <div className="footerCard">
            <h3 className="hashtag">{post.user.name}</h3>
            <img
              className="logoUser"
              src={post.user.avatar_url}
              alt={post.search}
            />
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
