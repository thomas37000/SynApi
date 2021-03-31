/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap';
import CardTwitter from '../Cards/CardTwitter';

const SliderTwitter = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [items, setItems] = useState([]);

  const {
    REACT_APP_API_URL,
    REACT_APP_API_USER,
    REACT_APP_API_TOKEN,
  } = process.env;

  const API_URL = `${REACT_APP_API_URL}`;
  const params = {
    s: `${REACT_APP_API_USER}`,
    t: `${REACT_APP_API_TOKEN}`,
    object: 'post',
    network: 'twitter',
    per_page: 10,
  };

  useEffect(() => {
    axios
      .get(`${API_URL}`, { params })
      .then((res) => res.data)
      .then((data) => {
        setItems(data);
        console.log('twitter posts', data);
      })
      .catch((error) => {
        let message;
        if (error) {
          message = "vous n' avez pas accès à cette page";
        } else {
          message = error.response.data.errorMessage;
          console.log(message);
          console.log(error);
        }
      });
  }, [params.t]);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((post) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={post.pub_id}
        post={post}
      >
        <CardTwitter key={post.pub_id} post={post} session={post.session_id} />
        <CarouselCaption
          captionText={post.caption}
          captionHeader={post.caption}
        />
      </CarouselItem>
    );
  });

  return (
    <Carousel activeIndex={activeIndex} next={next} previous={previous}>
      <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Carousel>
  );
};

export default SliderTwitter;
