/* eslint-disable indent */
/* eslint-disable no-nested-ternary */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable react/no-danger */
/* eslint-disable react/prop-types */
import React, { useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import './Card_css/CardFacebook.css';
import './Card_css/CardInsta.css';
import './Card_css/Card.css';
import { ColorContext } from '../Context/ColorContext';

export default function Card({ post }) {
  const { states } = useContext(ColorContext);

  const [activeFontFamily, setActiveFontFamily] = useState(
    states.activeFontFamily || sessionStorage.getItem('font_family')
  );

  const [background, setBackground] = useState(
    states.background || sessionStorage.getItem('background')
  );
  const [hashtagColor, setHashtagColor] = useState(
    states.hashtagColor || sessionStorage.getItem('hashtag')
  );
  const [mentionColor, setMentionColor] = useState(
    states.mentionColor || sessionStorage.getItem('mention')
  );
  const [txtColor, setTxtColor] = useState(
    states.txtColor || sessionStorage.getItem('text')
  );

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
  const getInstagram = post.timestamp;

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

  useEffect(() => {
    setActiveFontFamily(states.activeFontFamily);
    setBackground(states.background);
    setHashtagColor(states.hashtagColor);
    setMentionColor(states.mentionColor);
    setTxtColor(states.txtColor);
  }, [
    states.activeFontFamily,
    states.background,
    states.hashtagColor,
    states.mentionColor,
    states.txtColor,
  ]);

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
        style={media ? bgBefore : { backgroundColor: background }}
      >
        <div className={post.media_url ? 'cardBodyWithImg' : 'cardBodyNoImg'}>
          <div className={post.media_url ? 'content' : 'contentNoImg'}>
            <div className="apply-font">
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
            </div>
          </div>
          <div className="cardImg">
            <div className={post.media_url ? 'getImg' : 'hideImg'}>
              <img src={post.media_url} alt={post.media_url} />
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
    content: PropTypes.string.isRequired,
    network: PropTypes.string.isRequired,
    pub_date: PropTypes.string.isRequired,
    pub_url: PropTypes.string.isRequired,
    search: PropTypes.string.isRequired,
  }).isRequired,
  user: PropTypes.shape({
    avatar_url: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};
