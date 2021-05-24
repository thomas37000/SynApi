/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { CarouselItem } from 'reactstrap';
// import PropTypes from 'prop-types';
import Card from '../Cards/Card';

const Slides = (props) => {
  console.log('props', props);
  const [animating, setAnimating] = useState(false);

  function changeAllParams() {
    return props.items && props.items;
  }

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

// Slides.propTypes = {

// };

export default Slides;
