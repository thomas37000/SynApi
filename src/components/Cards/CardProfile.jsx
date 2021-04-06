/* eslint-disable indent */
/* eslint-disable no-nested-ternary */
/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
/* eslint-disable no-plusplus */
/* eslint-disable react/no-danger */
/* eslint-disable no-extra-boolean-cast */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState, useContext } from 'react';
import { CirclePicker } from 'react-color';
import PropTypes from 'prop-types';
import ColorContext from '../Context/ColorContext';
import './Card_css/CardProfile.css';

export default function CardProfile({ post }) {
  const [toggleColor, setToggleColor] = useContext(ColorContext);
  const [spanColor, setSpanColor] = useState(false);

  const bg = `url(${!!post.media_url})`;
  const bgBefore = {
    '--before': bg,
  };

  const regex = /[@#]\w+/g;

  function Hashtag(match) {
    return match.replace(regex, (txt) => {
      return post.media_url
        ? `<span class="txtSpanWithImg">${txt}</span>`
        : `<span class="txtSpan">${txt}</span>`;
    });
  }

  const changeColor = () => {
    document.getElementById('btn').addEventListener('click', () => {
      document.documentElement.style.setProperty('--change', 'green');
    });
  };

  // restore color background / text / # or @ by default
  const restore = () => {
    setSpanColor(!spanColor);
  };

  return (
    <>
      <div className="cardProfile">
        <div
          className={
            post.media_url
              ? ' cardWithImg'
              : post.user.name === 'agencenous'
              ? ' cardNous'
              : post.media_url
              ? ' cardWithImg'
              : 'cardTr'
          }
          style={{ backgroundColor: spanColor, bgBefore }}
        >
          <div className="settings">
            <div className="profileName">
              {/* <span>profil name: </span>
              <h2 className="userProfile">{post.user.name}</h2> */}
              <div className="userCard">
                <img
                  className="logoUser"
                  src={post.user.avatar_url}
                  alt={post.user.name}
                />
                <h3 className="userProfile">@{post.user.name}</h3>
              </div>
            </div>
            <div className="colorSettings">
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
                  onChange={(color) => setSpanColor(color.hex)}
                  className="circlepicker"
                />
                <div className="btnSettings">
                  <button
                    id="btn"
                    className="btnColor submit"
                    type="submit"
                    onClick=""
                  >
                    Submit
                  </button>
                  <button
                    id="btn"
                    className="btnColor cancel"
                    type="submit"
                    onClick={() => restore()}
                  >
                    Cancel
                  </button>
                </div>
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
                  className="circlepicker"
                />
                <div className="btnSettings">
                  <button
                    id="btn"
                    className="btnColor submit"
                    type="submit"
                    onClick=""
                  >
                    Submit
                  </button>
                  <button
                    id="btn"
                    className="btnColor cancel"
                    type="submit"
                    onClick={() => restore()}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="cardBodyWithImg">
            <div className="content">
              <div
                dangerouslySetInnerHTML={{ __html: Hashtag(post.content) }}
                // style={{ color: spanColor }}
              />
            </div>
          </div>
          <div className="cardImg">
            <div className={post.media_url ? 'getImg' : 'hideImg'}>
              <img src={post.media_url} alt="" />
            </div>
          </div>
          <div className="userCard">
            <img
              className="logoUser"
              src={post.user.avatar_url}
              alt={post.user.name}
            />
            <h3 className="name">@{post.user.name}</h3>
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
