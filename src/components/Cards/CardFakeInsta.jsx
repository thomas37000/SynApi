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

export default function CardFakeInsta() {
  // const bg = `url(${post.media_url})`;
  // const bgBefore = {
  //   '--before': bg,
  // };

  // const nous = `url(${post.user.name})`;
  // const avecNous = {
  //   '--avecNousBg': nous,
  // };

  // const spanWithImg = `url(${post.content})`;
  // const spanRegex = {
  //   '--RxTr': spanWithImg,
  // };

  // const regex = /[@#]\w+/g;
  // const contentApi = `url(${post.content})`;
  // const found = contentApi.match(regex);

  // function Hashtag(match) {
  //   return match.replace(regex, (txt) => {
  //     return `<span class="txtSpanWithImgInst">${txt}</span>`;
  //   });
  // }

  return (
    <>
      <div className="cardWithImg">
        <div className="cardBodyWithImg">
          <div className="contentNoImg">
            <span className="textSpanWithImg">
              <div>lorem IPSUM</div>
            </span>
          </div>
          <div className="cardImg">
            <div className="getImg">
              <img
                src="https://img01.ztat.net/article/spp-media-p1/c4ac4b5627e7464ab3746c42af5c8bc2/4e53251913194f70abb0d460395b9e24.jpg?imwidth=762&filter=packshot"
                alt="pull"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

CardFakeInsta.propTypes = {
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
