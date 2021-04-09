/* eslint-disable indent */
/* eslint-disable no-nested-ternary */
/* eslint-disable prefer-template */
/* eslint-disable react/no-danger */
/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import './Card_css/Card.css';

export default function CardTwitter({ post }) {
  const bg = `url(${post.media_url})`;
  const bgBefore = {
    '--before': bg,
  };

  const mention = /[@]\w+/g;
  const hashtag = /[#]\w+/g;
  const retweet = /(RT @)\w+:/g;

  function Highlight(match) {
    return match
      .replace(retweet, (txt) => {
        return `<span class="txtRetweet">${txt}</span>`;
      })
      .replace(mention, (txt) => {
        return `<span class="txtMention">${txt}</span>`;
      })
      .replace(hashtag, (txt) => {
        return `<span class="txtHashtag txtHashtagNoImg">${txt}</span>`;
      });
  }

  function RT(match) {
    return match
      .replace(retweet, (txt) => {
        return `<h3 id="reTweet">@ ${txt}</h3>`;
      })
      .replace(mention, (txt) => {
        return `<h3 id="name">@ ${txt}</h3>`;
      });
  }

  return (
    <>
      <div
        className={post.media_url ? ' cardWithImg' : 'cardTr'}
        style={bgBefore}
      >
        <div className={post.media_url ? 'cardBodyWithImg' : 'cardBodyNoImg'}>
          <div className={post.media_url ? 'content' : 'contentNoImg'}>
            <div
              dangerouslySetInnerHTML={{ __html: Highlight(post.content) }}
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
          {/* <h3 className="name">@{post.user.name}</h3> */}
          <div dangerouslySetInnerHTML={{ __html: RT(post.user.name) }} />
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
