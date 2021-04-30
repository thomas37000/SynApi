/* eslint-disable react/no-unused-state */
import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import './Sidebar.css';

export default function SlideFilterHooks() {
  const [post, setPost] = useState(10);

  const handleChange = (event) => {
    setPost({ ...post, post: event.target.value });
  };

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
          onChange={(e) => handleChange(e)}
        />
      </div>
    </div>
  );
}

// SlideFilterHooks.propTypes = {
//   changePost: PropTypes.func.isRequired,
// };
