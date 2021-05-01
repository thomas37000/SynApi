/* eslint-disable no-unused-vars */
import React, { useState, useContext } from 'react';
// import ParamsContext from '../Context/ParamsContext';
// import PropTypes from 'prop-types';
import './Sidebar.css';

export default function SlideFilter() {
  // const { newPost } = useContext(ParamsContext);
  const [post, setPost] = useState('10');

  const handleChange = (e) => {
    setPost(e.target.value);
  };

  console.log('context', post);

  return (
    <div>
      <div className="postFilter">
        <div className="label-slider">
          <div>Nombre de post {post}</div>
        </div>
        <input
          type="range"
          min={0}
          max={50}
          value={post}
          className="SlideFilter"
          onChange={handleChange}
        />
      </div>
    </div>
  );
}

// SlideFilter.propTypes = {
// };
