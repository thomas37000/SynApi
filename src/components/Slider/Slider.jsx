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
import { Link } from 'react-router-dom';
import { ParamsContext } from '../Context/ParamsContext';
import Card from '../Cards/Card';
import './Slider.css';

const Slider = () => {
  const { statesParams } = useContext(ParamsContext);

  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [jsonObj, setJsonObj] = useState({});
  const [items, setItems] = useState(statesParams.items);

  const [newPost, setNewPost] = useState(statesParams.newPost);
  const [newOrder, setNewOrder] = useState(statesParams.newOrder);
  const [newOrderAsc, setNewOrderAsc] = useState(statesParams.newOrderAsc);
  const [newOrderContent, setNewOrderContent] = useState(
    statesParams.newOrderContent
  );

  useEffect(() => {
    if (statesParams.items.length > 0 && statesParams.maxItems.length > 0) {
      const test = statesParams.maxItems.slice(0, statesParams.newPost);
      console.log('ligne 41', test);
      setItems(test);
      // setTimeout(() => {
      //   setItems(test);
      // }, 2000);
    }
  }, [
    statesParams.items,
    // statesParams.newOrder,
    // statesParams.newOrderAsc,
    // statesParams.newOrderContent,
    statesParams.newPost,
  ]);

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

  const renderCarrousel = () => {
    return (
      <Carousel activeIndex={activeIndex} next={next} previous={previous}>
        <CarouselIndicators
          items={items}
          activeIndex={activeIndex}
          onClickHandler={goToIndex}
        />
        {slides()}
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

  function changeAllParams() {
    return items && items;
  }

  const slides = () => {
    // tant que il n' y a pas d' items on ne déclanche pas le map
    return changeAllParams().map((post) => {
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
  };

  function loader() {
    return (
      <div className="loader-container">
        Loading, Refresh the Page !
        <Link to="/networks">
          <button
            type="button"
            value="Rafraîchir la page"
            onClick="history.go(0)"
          >
            refresh
          </button>
        </Link>
        <div className="loader" />
      </div>
    );
  }

  setTimeout(loader, 100);

  // Return de la function principale
  // Si on a items et que c'est bien un array avec au moins un item
  // il faudrait un useEffect car si items est vide === 'loading"
  return items && items.length > 0 ? renderCarrousel() : loader();
};

export default Slider;
