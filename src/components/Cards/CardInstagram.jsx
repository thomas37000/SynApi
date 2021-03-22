/* eslint-disable no-extra-boolean-cast */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Card.css';

export default function CardInstagram({ post }) {
  const bg = `url(${post.media_url})`;
  const bgBefore = {
    '--before': bg,
  };

  return (
    <>
      <div className="card">
        <div className="cardBody">
          <div className="content">
            <p>{post.user_description}</p>
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
        <p className="card-text">{post.text}</p>
        <div className="userCard">
          <img className="logoUser" src={post.avatar_url} alt={post.name} />
          <h3 className="name">@{post.name}</h3>
        </div>
        <div className="footerCard">
          <h3 className="hashtag">{post.name}</h3>
          <img className="logoUser" src={post.avatar_url} alt={post.search} />
        </div>
      </div>
    </>
  );
}

CardInstagram.propTypes = {
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
