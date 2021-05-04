/* eslint-disable no-unused-vars */
import React, { useState, useContext } from 'react';
import { ColorContext } from '../Context/ColorContext';
// import PropTypes from 'prop-types';
import './Sidebar.css';

export default function SlideFilter(props) {
  const { states } = useContext(ColorContext);

  const [post, setPost] = useState();

  const handleChange = (e) => {
    setPost(e.target.value);
  };

  console.log('slideFilter', post);

  return (
    <div>
      <div className="post-filter">
        <div className="label-slider">
          <div>Nombre de post {post}</div>
        </div>
        <input
          type="range"
          min={0}
          max={50}
          step={2}
          value={post}
          className="slideFilter"
          onChange={handleChange}
        />
      </div>
    </div>
  );
}

// SlideFilter.propTypes = {
// };
