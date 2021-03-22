/* eslint-disable prettier/prettier */
/* eslint-disable no-extra-boolean-cast */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Card.css';

export default function CardFb({ post }) {
  const bg = `url(${post.media_url})`;
  const bgBefore = {
    '--before': bg,
  };

  return (
    <>
      {!!post.media_url ? (
        <div className="cardWithImg" style={bgBefore}>
          <div className="cardBodyWithImg">
            <div className="content">
              {!!post.content ? (
                <p>{post.content}</p>
              ) : (
                <p className="hideContent">{post.content}</p>
              )}
            </div>
            <div className="cardImg">
              <div className="getImg">
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
      ) : (
        <div className="cardFb">
          <div className="cardBodyNoImg">
            <div className="contentNoImg">
              <p>{post.content}</p>
            </div>
            <div className="cardImg">
              <div className="hideImg">
                <img src={post.media_url} alt="" />
              </div>
            </div>
          </div>
          <p className="card-text">{post.text}</p>
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
