/* eslint-disable indent */
/* eslint-disable no-nested-ternary */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable react/no-danger */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Card_css/CardFacebook.css';
import './Card_css/CardInsta.css';
import './Card_css/Card.css';

export default function Card({ post }) {
  const [hashtagColor] = useState(sessionStorage.getItem('hashtagColor'));
  const [bgColor] = useState(sessionStorage.getItem('bgColor'));
  const [txtColor] = useState(sessionStorage.getItem('txtColor'));
  const [mentionColor] = useState(sessionStorage.getItem('mentionColor'));

  const bg = `url(${post.media_url})`;
  const bgBefore = {
    '--before': bg,
  };

  const mention = /[@]\w+/g;
  const hashtag = /[#]\w+/g;
  const retweet = /(RT @)\w+:/g;
  let originalUserName = post.user.name;
  const contentApi = post.content;
  const media = post.media_url;
  const netWork = post.network;

  function highlight(match) {
    return match
      .replace(retweet, (txt) => {
        originalUserName = txt;
        return `<span class="txtRetweet">${txt}</span>`;
      })
      .replace(hashtag, (txt) => {
        return `<span class="txtHashtag" style="color:${hashtagColor}">${txt}</span>`;
      })
      .replace(mention, (txt) => {
        return `<span class="txtMention" style="color:${mentionColor}">${txt}</span>`;
      });
  }

  function highlightFacebook(match) {
    return match.replace(hashtag, (txt) => {
      return `<span class="txtSpanWithImgFk" style="color:${hashtagColor}">${txt}</span>`;
    });
  }

  function highlightInstagram(match) {
    return match
      .replace(hashtag, (txt) => {
        return `<span class="txtSpanWithImgInst" style="color:${hashtagColor}">${txt}</span>`;
      })
      .replace(mention, (txt) => {
        return `<span class="txtSpanWithImgInst" style="color:${mentionColor}">${txt}</span>`;
      });
  }

  return (
    <>
      <div
        className={
          media
            ? 'cardWithImg'
            : netWork === 'facebook'
            ? 'cardFk'
            : netWork === 'instagram'
            ? 'cardInsta'
            : media
            ? 'cardWithImg'
            : 'cardTr'
        }
        style={media ? bgBefore : { backgroundColor: bgColor }}
      >
        <div className={post.media_url ? 'cardBodyWithImg' : 'cardBodyNoImg'}>
          <div className={post.media_url ? 'content' : 'contentNoImg'}>
            <p className="apply-font">
              <div
                dangerouslySetInnerHTML={{
                  __html:
                    netWork === 'twitter'
                      ? highlight(contentApi)
                      : netWork === 'facebook'
                      ? highlightFacebook(contentApi)
                      : netWork === 'instagram'
                      ? highlightInstagram(contentApi)
                      : null,
                }}
                style={{ color: txtColor }}
              />
            </p>
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

          <h3 className="reTweet">
            <div
              dangerouslySetInnerHTML={{
                __html: originalUserName,
              }}
            />
          </h3>
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

Card.propTypes = {
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
