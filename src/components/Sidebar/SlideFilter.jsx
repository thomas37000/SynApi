/* eslint-disable no-unused-vars */
import React, { useState, useContext } from 'react';
import { ParamsContext } from '../Context/ParamsContext';
// import PropTypes from 'prop-types';
import './Sidebar.css';

export default function SlideFilter(props) {
  const [post, setPost] = useState('10');

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
