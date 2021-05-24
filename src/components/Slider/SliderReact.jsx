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
import Carousel from 'react-bootstrap/Carousel';
import { ParamsContext } from '../Context/ParamsContext';
import Card from '../Cards/Card';

const SliderReact = () => {
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

  return (
    <Carousel>
      {items.map((post) => (
        <Carousel.Item key={post.id}>
          <Card
            {...post}
            key={post.pub_id}
            post={post}
            session={post.session_id}
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

// Return de la function principale
// Si on a items et que c'est bien un array avec au moins un item
// il faudrait un useEffect car si items est vide === 'loading"

export default SliderReact;
