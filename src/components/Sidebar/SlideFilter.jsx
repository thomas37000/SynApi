import React, { useState, useContext } from 'react';
import { ParamsContext } from '../Context/ParamsContext';
// import PropTypes from 'prop-types';
import './Sidebar.css';

export default function SlideFilter() {
  const { statesParams } = useContext(ParamsContext);
  const [newPost, setNewPost] = useState(statesParams.newPost);

  const handleChange = (e) => {
    setNewPost(Number(e.target.value));
    statesParams.function.setNewPost(e.target.value);
    sessionStorage.setItem('post', e.target.value);
  };

  const renderSlider = () => {
    return (
      <div className="post-filter">
        <div className="label-slider">
          <div>Nombre de post {newPost}</div>
        </div>
        <input
          type="range"
          min={1}
          max={50}
          step={1}
          value={newPost}
          className="slideFilter"
          onChange={(e) => handleChange(e)}
        />
      </div>
    );
  };

  // Return de la fonction principale ->
  return <div>{newPost ? renderSlider() : 'loading'}</div>;
}

// SlideFilter.propTypes = {
// };
