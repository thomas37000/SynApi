/* eslint-disable indent */
/* eslint-disable no-nested-ternary */
/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import React, { useState, useEffect, useContext } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap';
import { Link } from 'react-router-dom';

import { ParamsContext } from '../Context/ParamsContext';
import { defaultPost } from '../utils/helpers';
import Card from '../Cards/Card';
import './Slider.css';

const Slider = () => {
  const { statesParams } = useContext(ParamsContext);

  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [jsonObj, setJsonObj] = useState();
  const [items, setItems] = useState(statesParams.items);
  const [newPost, setNewPost] = useState(statesParams.newPost);

  useEffect(() => {
    if (items && items.length > 0) {
      setItems(sortItems(items));
      setActiveIndex(0);
    }
  }, [statesParams.sorting]);

  useEffect(() => {
    if (statesParams.items.length > 0 && statesParams.maxItems.length > 0) {
      setItems(statesParams.maxItems.slice(0, statesParams.newPost));
    }
  }, [statesParams.items, statesParams.newPost]);

  const sortItems = () => {
    return items.sort((a, b) => {
      switch (statesParams.sorting) {
        case 'ASC':
          return a.timestamp - b.timestamp;
        case 'DESC':
          return b.timestamp - a.timestamp;
        default:
          return a.timestamp - b.timestamp;
      }
    });
  };

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
        <Card key={post.pub_id} post={post} session={post.session_id} />
      </CarouselItem>
    );
  });

  const renderCarousel = () => {
    if (items && items.length > 0) {
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
    }

    return 'Loading ...';
  };

  function refresh() {
    window.history.go(0);
  }

  const loader = () => {
    return (
      <div className="loader-container">
        Loading, Refresh the Page !
        <Link to="/networks">
          <button
            type="button"
            value="Rafraîchir la page"
            onClick={() => refresh()}
          >
            refresh
          </button>
        </Link>
        <div className="loader" />
      </div>
    );
  };

  setTimeout(loader, 100);

  // Return de la function principale
  // Si on a items et que c'est bien un array avec au moins un item
  // il faudrait un useEffect car si items est vide === 'loading"
  return items && items.length > 0 ? renderCarousel() : loader();
};

export default Slider;
