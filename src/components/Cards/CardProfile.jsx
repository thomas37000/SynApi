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
import { Link } from 'react-router-dom';
import { CirclePicker, CompactPicker, SketchPicker } from 'react-color';
import PropTypes from 'prop-types';
import ColorContext from '../Context/ColorContext';
import BtnLoadTwitter from '../Buttons/ButtonTwitter';
import BtnLoadFacebook from '../Buttons/ButtonFacebook';
import BtnLoadInstagram from '../Buttons/ButtonInstagram';
import BtnSubmit from '../Buttons/ButtonSubmit';
import useLocalState from '../Context/LocalStrorage';
import Settings from '../Profile/Settings';
import './Card_css/CardProfile.css';

// pour les avatars qui ne se laod parseFloat, ça mal était formaté dans l' Api
// https://scontent-cdg2-1.xx.fbcdn.net/v/t1.0-1/cp0/c19.0.50.50a/p50x50/41065264_297658571027640_1439194432233537536_n.png

export default function CardProfile({ post }) {
  const defaultColors = {
    txt: sessionStorage.getItem('txtColor') || '#fff',
    tr: '#1da1f2',
    fb: '#4267b2',
    im: '#e1306c',
    bgNoImgTr: sessionStorage.getItem('bgColor') || '#1da1f2',
    bgNoImgFb: '#4267b2',
    rxTr: sessionStorage.getItem('mentionColor') || '#1da1f2',
    rxFb: '#4267b2',
    rxIm: '#e1306c',
    rxNoImg: '#000',
    hashtagColor: sessionStorage.getItem('hashtagColor') || '#1da1f2',
  };

  const [hashtagColor, setHashtagColor] = useState(defaultColors.hashtagColor);
  const [bgColor, setBgColor] = useState(defaultColors.bgNoImgTr);
  const [txtColor, setTxtColor] = useState(defaultColors.txt);
  const [mentionColor, setMentionColor] = useState(defaultColors.rxTr);
  const [jsonObj, setJsonObj] = useState({});
  const [networks, setNetworks] = useState([]);

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

  const submitColor = () => {
    // setToggleColor(bgColor, mentionColor,hashtagColor, txtColor);

    const jsonColor = JSON.stringify(jsonObj);
    console.log('JSON', jsonColor);
    // sessionStorage.setItem('text', txtColor);
    // console.log(sessionStorage);

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
    sessionStorage.setItem('BgColor', bgColor);
    sessionStorage.setItem('MentionColor', mentionColor);
    sessionStorage.setItem('hashtagColor',hashtagColor);
    sessionStorage.setItem('TxtColor', txtColor);
    // console.log(sessionStorage);
    setJsonObj({
      bgColor,
      mentionColor,
      hashtagColor,
      txtColor,
    });
    // console.log('POST JSON STATE', setJsonObj);
  }, [bgColor, mentionColor,hashtagColor, txtColor]);

  return (
    <>
      <div className="galerie">
        <div
          className={post.media_url ? ' cardWithImg' : 'cardTr'}
          style={post.media_url ? bgBefore : { backgroundColor: bgColor }}
        >
          <div className="settings">
            <Settings />
            <div className="colorSettings">
              <div className="form-group network">
                <BtnLoadTwitter />
                <BtnLoadFacebook />
                <BtnLoadInstagram />
              </div>

              <div className="form-group">
                <SketchPicker
                  onChange={(color) => setBgColor(color.hex)}
                  onSubmit={(e) => submitBg(e)}
                  className="circlepicker"
                />
                <div className="btnSettings">
                  <button
                    id="btn"
                    className="cancel"
                    type="submit"
                    onClick={() => restoreBg()}
                  >
                    Cancel
                  </button>
                </div>
              </div>
              <div className="form-group">
                <SketchPicker
                  onChange={(color) => setTxtColor(color.hex)}
                  onSubmit={(e) => submitBg(e)}
                  className="circlepicker"
                />
                <div className="btnSettings">
                  <button
                    id="btn"
                    className="cancel"
                    type="submit"
                    onClick={() => restoreTxt()}
                  >
                    Cancel
                  </button>
                </div>
              </div>

              <div className="form-group">
                <SketchPicker
                  // color={mentionColor}
                  onChange={(color) =>
                    setHashtagColor(color.hex) || setMentionColor(color.hex)
                  }
                  onSubmit={(e) => submitColor(e)}
                  className="circlepicker"
                />
                <div className="btnSettings">
                  <button
                    id="btn"
                    className="cancel"
                    type="submit"
                    onClick={() => {
                      restorehashtagColor();
                      restoreMention();
                    }}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
            <button
              id="btn"
              className="submit"
              type="submit"
              value={txtColor}
              onClick={() => submitColor(txtColor)}
            >
              Submit
            </button>
          </div>
          <div className={post.media_url ? 'cardBodyWithImg' : 'cardBodyNoImg'}>
            <div className={post.media_url ? 'content' : 'contentNoImg'}>
              <div
                dangerouslySetInnerHTML={{
                  __html: highlight(post.content),
                }}
                style={{ color: txtColor }}
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
