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
import './Card.css';

export default function CardTwitter({ post }) {
  const bg = `url(${post.media_url})`;
  const bgBefore = {
    '--before': bg,
  };

  const nous = `url(${post.user.name})`;
  const avecNous = {
    '--avecNousBg': nous,
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
        ? `<span class="txtSpanWithImg">${txt}</span>`
        : `<span class="txtSpan">${txt}</span>`;
    });
  }

  return (
    <>
      {!!post.media_url ? (
        <div className="cardWithImg" style={bgBefore}>
          <div className="cardBodyWithImg">
            <div className="content">
              {!!post.content ? (
                <span className="textSpanWithImg">
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
            <div className="cardImg">
              {!!post.media_url ? (
                <div className="getImg">
                  <img src={post.media_url} alt="" />
                </div>
              ) : (
                <div className="hideImg">
                  <img src={post.media_url} alt="" />
                </div>
              )}
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
        <>
          {!!post.user.name === 'nous' ? (
            <div className="card" style={avecNous}>
              <div className="cardBodyNoImg">
                <div className="contentNoImg">
                  <div
                    dangerouslySetInnerHTML={{ __html: Hashtag(post.content) }}
                  />
                </div>
                <div className="hideImg">
                  <img src={post.media_url} alt="" />
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
          ) : (
            <div className="card">
              <div className="cardBodyNoImg">
                <div className="contentNoImg">
                  <div
                    dangerouslySetInnerHTML={{ __html: Hashtag(post.content) }}
                  />
                </div>
                <div className="hideImg">
                  <img src={post.media_url} alt="" />
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
          )}
        </>
      )}
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
