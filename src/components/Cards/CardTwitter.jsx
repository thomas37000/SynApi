/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable react/no-danger */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Card_css/Card.css';

export default function CardTwitter({ post }) {
  const [spanColor, setSpanColor] = useState(
    sessionStorage.getItem('SpanColor')
  );
  const [BgColor, setBgColor] = useState(sessionStorage.getItem('BgColor'));
  const [TxtColor, setTxtColor] = useState(sessionStorage.getItem('TxtColor'));
  const [mentionColor, setMentionColor] = useState(
    sessionStorage.getItem('MentionColor')
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
  const test = (`${TxtColor}`, contentApi);
  // const mentionSlice = contentApi.slice(2, contentApi.indexOf(':'));
  // const mentionSplit = mentionSlice.toString().split(',');

  // console.log('slice', mentionSlice);
  // console.log('split', mentionSplit);

  function Highlight(match) {
    return match
      .replace(retweet, (txt) => {
        originalUserName = txt;
        return `<span class="txtRetweet">${txt}</span>`;
      })
      .replace(hashtag, (txt) => {
        return `<span class="txtHashtag" style="color:${spanColor}">${txt}</span>`;
      })
      .replace(mention, (txt) => {
        return `<span class="txtMention" style="color:${mentionColor}">${txt}</span>`;
      });
  }

  return (
    <>
      <div
        className={post.media_url ? ' cardWithImg' : 'cardTr'}
        style={post.media_url ? bgBefore : { backgroundColor: BgColor }}
      >
        <div className={post.media_url ? 'cardBodyWithImg' : 'cardBodyNoImg'}>
          <div className={post.media_url ? 'content' : 'contentNoImg'}>
            <div
              dangerouslySetInnerHTML={{
                __html: Highlight(contentApi),
              }}
              style={{ color: TxtColor }}
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
