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

  // const spanRegex = {
  //   '--Regex': regex,
  // };

  const regex = /@\w+/g;
  const contentApi = `url(${post.content})`;
  const found = contentApi.match(regex);
  console.log('regex', found);

  function Hashtag(str) {
    return str.replace(regex, (txt) => {
      return txt.contentApi;
      // return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  }

  // PHP REGEX
  //   function hashtag_detect($content) {
  //     $content = str_replace('#', ' #', $content);
  //     preg_match_all('#[\n\t\r\s  \: \.]\#([a-zA-Z0-9_]+)[\n\t\r\s\:\.\/,  \?; ]#i', ' ' . $content . ' ', $array, PREG_PATTERN_ORDER);
  //     if (is_array($array)) {
  //         foreach ($array[1] as $hastag) {
  //             $html = ' <span class="hashtag">';
  //             $html.='#' . $hastag . '</span>';
  //             $content = str_replace('#' . $hastag, $html, $content);
  //         }
  //     }
  //     return $content;
  // }

  // JS Exemple REGEX

  return (
    <>
      {!!post.media_url ? (
        <div className="cardWithImg" style={bgBefore}>
          <div className="cardBodyWithImg">
            <div className="content">
              <p>{post.content}</p>
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
          {!!post.user.name === 'avecnous' ? (
            <div className="card" style={avecNous}>
              <div className="cardBodyNoImg">
                <div className="content">
                  <p>{post.content}</p>
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
                <div className="content">
                  <p>{Hashtag(post.content)}</p>
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
