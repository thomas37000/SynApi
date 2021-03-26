/* eslint-disable no-use-before-define */
/* eslint-disable no-plusplus */
/* eslint-disable react/no-danger */
/* eslint-disable no-extra-boolean-cast */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable react/prop-types */
import React, { useState, useContext } from 'react';
import { CirclePicker } from 'react-color';
import PropTypes from 'prop-types';
import ColorContext from '../Context/ColorContext';
import './Card_css/CardProfile.css';

export default function CardProfile({ post }) {
  const [toggleColor, setToggleColor] = useContext(ColorContext);
  const bg = `url(${post.media_url})`;
  const bgBefore = {
    '--before': bg,
  };

  const spanChange = `url(${post.content})`;
  const spanRxColor = {
    '--changeRx': spanChange,
  };

  const spanWithImg = `url(${post.content})`;
  const spanRegex = {
    '--RxTr': spanWithImg,
  };

  const regex = /[@#]\w+/g;
  const contentApi = `url(${post.content})`;
  const found = contentApi.match(regex);

  function Hashtag(match) {
    return match.replace(regex, (txt) => {
      return !!post.media_url
        ? `<span class="txtSpanWithImgFb">${txt}</span>`
        : `<span class="txtSpan">${txt}</span>`;
    });
  }

  const [spanColor, setSpanColor] = useState();

  return (
    <>
      {!!post.media_url ? (
        <div className="cardProfile">
          <CirclePicker
            onChange={(color) => setSpanColor(color.hex)}
            className="circlepicker"
          />
          <div className="cardBodyWithImg">
            <div className="content">
              {!!post.content ? (
                <span style={{ color: spanColor }}>
                  <div
                    dangerouslySetInnerHTML={{ __html: Hashtag(post.content) }}
                  />
                </span>
              ) : (
                <span className="hideContent">
                  <div
                    dangerouslySetInnerHTML={{ __html: Hashtag(post.content) }}
                  />
                </span>
              )}
            </div>
          </div>
          <div className="cardImg">
            <div className="getImg">
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
      ) : (
        <div className="cardFb">
          <div className="cardBodyNoImg">
            <div className="contentNoImg">
              <div
                dangerouslySetInnerHTML={{ __html: Hashtag(post.content) }}
              />
            </div>
            <div className="cardImg">
              <div className="hideImg">
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
      )}
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
