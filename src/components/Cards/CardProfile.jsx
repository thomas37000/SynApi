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
  const [spanColor, setSpanColor] = useState();

  const bg = `url(${!!post.media_url})`;
  const bgBefore = {
    '--before': bg,
  };

  const regex = /[@#]\w+/g;

  function Hashtag(match) {
    return match.replace(regex, (txt) => {
      return !!post.media_url
        ? `<span class="txtSpanWithImg">${txt}</span>`
        : `<span class="txtSpan">${txt}</span>`;
    });
  }

  const changeColor = () => {
    document.getElementById('btn').addEventListener('click', () => {
      document.documentElement.style.setProperty('--change', 'green');
    });
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
          <div className="profileName">
            <span>profil name: </span>
            <h2 className="userProfile">{post.user.name}</h2>
          </div>

          <CirclePicker
            onChange={(color) => setSpanColor(color.hex)}
            className="circlepicker"
          />

          {/* <button id="btn" className="btnColor" type="submit">
          change color #
        </button>

        <p className="test">#lorem ipsum</p> */}

          <div className="cardBodyWithImg">
            <div className="content">
              <div
                dangerouslySetInnerHTML={{ __html: Hashtag(post.content) }}
                // style={{ color: spanColor }}
              />
            </div>
          </div>
          <div className="cardImg">
            <div className="getImg">
              <img src={!!post.media_url} alt="" />
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
