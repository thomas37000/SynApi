/* eslint-disable react/no-danger */
/* eslint-disable no-plusplus */
/* eslint-disable no-console */
/* eslint-disable no-const-assign */
/* eslint-disable no-extra-boolean-cast */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Card_css/Card.css';

export default function CardTwitter({ post }) {
  const bg = `url(${post.media_url})`;
  const bgBefore = {
    '--before': bg,
  };

  const nous = `url(${post.user.name})`;
  const avecNous = {
    '--avecNousBg': nous,
  };

  const regex = /[@#]\w+/g;

  function Hashtag(match) {
    return match.replace(regex, (txt) => {
      return !!post.media_url
        ? `<span class="txtSpanWithImg">${txt}</span>`
        : `<span class="txtSpan">${txt}</span>`;
    });
  }

  return (
    <>
      <div
        className={!!post.media_url ? 'cardWithImg' : 'cardTr'}
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

CardTwitter.propTypes = {
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
