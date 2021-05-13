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
  const { statesParams } = useContext(ParamsContext);

  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [jsonObj, setJsonObj] = useState({});
  const [items, setItems] = useState(statesParams.items);

  const [newPost, setNewPost] = useState(statesParams.newPost);

  useEffect(() => {
    if (statesParams.items.length > 0 && statesParams.maxItems.length > 0) {
      setItems(statesParams.maxItems.slice(0, statesParams.newPost));
    }
  }, [statesParams.newPost, statesParams.items]);

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

  const renderCarrousel = () => {
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

  const slides =
    items &&
    items.map((post) => {
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

  // Return de la function principale
  // Si on a items et que c'est bien un array avec au moins un item
  return items && items.length > 0 ? renderCarrousel() : 'loading';
};

export default Slider;
