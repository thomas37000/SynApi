/* eslint-disable no-console */
/* eslint-disable indent */
/* eslint-disable no-nested-ternary */
/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
/* eslint-disable no-plusplus */
/* eslint-disable react/no-danger */
/* eslint-disable no-extra-boolean-cast */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState, useEffect, useContext } from 'react';
import { SketchPicker } from 'react-color';
import PropTypes from 'prop-types';
import FontPicker from 'font-picker-react';
import ColorContext from '../Context/ColorContext';
import Settings from '../Profile/Settings';
import './Card_css/CardProfile.css';

export default function CardProfile({ post }) {
  const defaultColors = {
    txt: sessionStorage.getItem('txtColor') || '#fff',
    rxNoImg: sessionStorage.getItem('mentionColor') || '#000',
    im: sessionStorage.getItem('mentionColor') || '#e1306c',
    fk: sessionStorage.getItem('mentionColor') || '#4267b2',
    fkBackgroundNoImg: sessionStorage.getItem('bgColor') || '#4267b2',
    fkRegexColor: sessionStorage.getItem('hashtagColor') || '#4267b2',
    tr: sessionStorage.getItem('mentionColor') || '#1da1f2',
    trBackgroundNoImg: sessionStorage.getItem('bgColor') || '#1da1f2',
    trRegexColor: sessionStorage.getItem('hashtagColor') || '#1da1f2',
  };

  const defaultTypo = {
    typo: sessionStorage.getItem('activeFontFamily') || 'Arial',
  };

  const [hashtagColor, setHashtagColor] = useState(
    defaultColors.fkRegexColor ||
      defaultColors.imRegexColor ||
      defaultColors.trRegexColor
  );
  const [bgColor, setBgColor] = useState(defaultColors.trBackgroundNoImg);
  const [txtColor, setTxtColor] = useState(defaultColors.txt);
  const [mentionColor, setMentionColor] = useState(
    defaultColors.fk || defaultColors.im || defaultColors.tr
  );
  const [activeFontFamily, setActiveFontFamily] = useState(defaultTypo.typo);
  const [jsonObj, setJsonObj] = useState({});

  const bg = `url(${post.media_url})`;
  const bgBefore = {
    '--before': bg,
  };

  const mention = /[@]\w+/g;
  const hashtag = /[#]\w+/g;
  const retweet = /(RT @)\w+:/g;
  let originalUserName = post.user.name;

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

  // restore color background / text / # or @ by default
  const restorehashtagColor = () => {
    setHashtagColor(!hashtagColor);
  };

  const restoreBg = () => {
    setBgColor(!bgColor);
  };

  const restoreTxt = () => {
    setTxtColor(!txtColor);
  };

  const restoreMention = () => {
    setMentionColor(!mentionColor);
  };

  // const restoreFontFamily = () => {
  //   setActiveFontFamily(!activeFontFamily);
  // };

  const submitColor = () => {
    const jsonColor = JSON.stringify(jsonObj);
    console.log('JSON', jsonColor);

    // https://github.com/axios/axios#request-config

    const postApi = async (onSuccess, onError) => {
      await axios
        .post(`${API_URL}`, { params })
        .then((res) => {
          setItems(res.data);
          console.log('getApi', res.data);
        })
        .catch((error) => {
          console.log(error);
        })
        .then((res) => {
          console.log(res);
        });
    };
  };

  // https://github.com/axios/axios#request-config
  // POST
  // const headers = {
  //   'Content-Type': 'application/json',
  //   'Authorization': 'JWT fefege...'
  // }

  // axios.post
  // (Helper.getUserAPI(), data, {
  //     headers: headers
  //   })
  //   .then((response) => {
  //     dispatch({
  //       type: FOUND_USER,
  //       data:
  // response.data
  // [0]
  //     })
  //   })
  //   .catch((error) => {)
  // const json = JSON.stringify({ answer: 42 });
  // const res = await
  // axios.post
  // ('
  // https://httpbin.org/post
  // ', json);

  useEffect(() => {
    sessionStorage.setItem('bgColor', bgColor);
    sessionStorage.setItem('mentionColor', mentionColor);
    sessionStorage.setItem('hashtagColor', hashtagColor);
    sessionStorage.setItem('txtColor', txtColor);
    sessionStorage.setItem('fontFamily', activeFontFamily);
    console.log('json', sessionStorage);
    setJsonObj({
      bgColor,
      mentionColor,
      hashtagColor,
      txtColor,
      activeFontFamily,
    });
  }, [activeFontFamily, bgColor, mentionColor, hashtagColor, txtColor]);

  return (
    <>
      <div className="galerie">
        <div
          className={post.media_url ? ' cardWithImg' : 'cardTr'}
          style={post.media_url ? bgBefore : { backgroundColor: bgColor }}
        >
          <div className={post.media_url ? 'cardBodyWithImg' : 'cardBodyNoImg'}>
            <div className={post.media_url ? 'content' : 'contentNoImg'}>
              <p className="apply-font">
                <div
                  dangerouslySetInnerHTML={{
                    __html: highlight(post.content),
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
      </div>
    </>
  );
}

CardProfile.propTypes = {
  post: PropTypes.shape({
    avatar_url: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    media_url: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    pub_date: PropTypes.string.isRequired,
    pub_url: PropTypes.string.isRequired,
    search: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired,
};
