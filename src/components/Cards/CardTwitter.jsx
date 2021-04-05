/* eslint-disable indent */
/* eslint-disable no-nested-ternary */
/* eslint-disable prefer-template */
/* eslint-disable react/no-danger */
/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Card_css/Card.css';

export default function CardTwitter({ post }) {
  const bg = `url(${post.media_url})`;
  const bgBefore = {
    '--before': bg,
  };

  // const avecNous = {
  //   '--avecNousBg': nous,
  // };

  const regex = /[@#]\w+/g;

  // function Hashtag(match) {
  //   return match.replace(regex, (txt) => {
  //     return post.media_url
  //       ? `<span class="txtSpanWithImg">${txt}</span>`
  //       : `<span class="txtSpan">${txt}</span>`;
  //   });
  // }

  // const nous = `url(${post.user.name})`;

  function Hashtag(match) {
    return match.replace(regex, (txt) => {
      // eslint-disable-next-line no-extra-boolean-cast
      if (post.media_url) {
        return `<span class="txtSpanWithImg">${txt}</span>`;
      }
      if (post.user.name === 'agencenous') {
        return `<span class="txtSpanNous">${txt}</span>`;
      }
      return `<span class="txtSpan">${txt}</span>`;
    });
  }

  // function changeColorBg(txt) {
  //   if (post.media_url) {
  //     return `<div class="cardWithImg">${txt}</div>`;
  //   }
  //   if (post.media_url || post.user.name === 'agencenous') {
  //     return `<div class="cardNous">${txt}</div>`;
  //   }
  //   return `<div class="cardTr">${txt}</div>`;
  // }

  return (
    <>
      <div
        className={post.media_url ? 'cardWithImg' : 'cardNous'}
        style={bgBefore}
      >
        {/* <div
          className={
            post.media_url === 3
              ? ' cardWithImg'
              : post.media_url === 4
              ? ' cardWithImg'
              : 'cardNous'
          }
          style={bgBefore}
        /> */}
        <div className={post.media_url ? 'cardBodyWithImg' : 'cardBodyNoImg'}>
          <div className={post.media_url ? 'content' : 'contentNoImg'}>
            <div dangerouslySetInnerHTML={{ __html: Hashtag(post.content) }} />
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
