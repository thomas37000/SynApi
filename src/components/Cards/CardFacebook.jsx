/* eslint-disable react/no-danger */
/* eslint-disable prettier/prettier */
/* eslint-disable no-extra-boolean-cast */
/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Card_css/CardFacebook.css';
import './Card_css/Card.css';

export default function CardFb({ post }) {
  const bg = `url(${post.media_url})`;
  const bgBefore = {
    '--before': bg,
  };

  const bgFacebook = !!post.media_url;
  const regex = /[@#]\w+/g;

  function Hashtag(match) {
    return match.replace(regex, (txt) => {
      return !!post.media_url
        ? `<span class="txtSpanWithImgFb">${txt}</span>`
        : `<span class="txtSpan">${txt}</span>`;
    });
  }

  return (
    <>
      <div
        className={!!post.media_url ? 'cardWithImg' : 'cardFb'}
        style={bgBefore}
      >
        <div className={!!post.media_url ? 'cardBodyWithImg' : 'cardBodyNoImg'}>
          <div className={!!post.media_url ? 'content' : 'contentNoImg'}>
            <div dangerouslySetInnerHTML={{ __html: Hashtag(post.content) }} />
          </div>
          <div className="cardImg">
            <div className={!!post.media_url ? 'getImg' : 'hideImg'}>
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
    </>
  );
}

CardFb.propTypes = {
  post: PropTypes.shape({
    avatar_url: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    network: PropTypes.string.isRequired,
    pub_date: PropTypes.string.isRequired,
    pub_url: PropTypes.string.isRequired,
    search: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired,
};
