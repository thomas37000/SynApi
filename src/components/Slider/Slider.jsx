/* eslint-disable indent */
/* eslint-disable no-nested-ternary */
/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
// DESC c'est normal publications récentes
// ASC publications anciennes
// order: 'ASC' && 'DESC',
// order_by: 'content' && 'pub_date',
import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap';
import { ParamsContext } from '../Context/ParamsContext';
import Card from '../Cards/Card';

const Slider = () => {
  const { states } = useContext(ParamsContext);

  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [items, setItems] = useState([]);
  const [maxItems, setMaxItems] = useState([]);
  const [jsonObj, setJsonObj] = useState({});

  const {
    REACT_APP_API_URL,
    REACT_APP_API_USER,
    REACT_APP_API_TOKEN,
  } = process.env;

  const API_URL = `${REACT_APP_API_URL}`;

  const [newPost, setNewPost] = useState('10');

  const params = {
    s: `${REACT_APP_API_USER}`,
    t: `${REACT_APP_API_TOKEN}`,
    object: 'post',
    network: '',
    per_page: '50',
  };

  const getApi = async (onSuccess, onError) => {
    await axios.get(`${API_URL}`, { params }).then(
      (res) => {
        setMaxItems(res.data);
        const dataItems = res.data;
        dataItems.length = newPost;
        setItems(res.data);
        setNewPost(states.newPost);
        // 0 à 10
        console.log('network', res.data);
      },
      (error) => onError(error)
    );
  };

  // afficher max 50 items

  useEffect(() => {
    getApi();
  }, []);

  useEffect(() => {
    // setNewPost(states.newPost);
    setItems((maxItems.length = Number(states.newPost)));
    console.log('73', states.newPost);
  }, [states.newPost]);

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

  const updatePost = () => {
    setNewPost(newPost);
  };

  // const slides = () => {
  //   console.log('items', items);
  //   return items.map((post) => {
  //     return (
  //       <CarouselItem
  //         onExiting={() => setAnimating(true)}
  //         onExited={() => setAnimating(false)}
  //         key={post.pub_id}
  //         post={post}
  //       >
  //         <Card
  //           {...post}
  //           key={post.pub_id}
  //           post={post}
  //           session={post.session_id}
  //         />
  //         <CarouselCaption
  //           captionText={post.caption}
  //           captionHeader={post.caption}
  //         />
  //       </CarouselItem>
  //     );
  //   });
  // };

  const slides = items.map((post) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={post.pub_id}
        post={post}
      >
        <Card
          {...post}
          key={post.pub_id}
          post={post}
          session={post.session_id}
        />
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
      {/* {slides()} */}
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

export default Slider;
