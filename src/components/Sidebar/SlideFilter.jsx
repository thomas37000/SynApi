/* eslint-disable no-unused-vars */
import React, { useState, useContext } from 'react';
import { ParamsContext } from '../Context/ParamsContext';
// import PropTypes from 'prop-types';
import './Sidebar.css';

export default function SlideFilter(props) {
  const { states } = useContext(ParamsContext);
  const [newPost, setNewPost] = useState(states.newPost);

  const handleChange = (e) => {
    // fonction native à JS qui convertit une String en Number
    setNewPost(Number(e.target.value));
    // typeof = return data type comme string , number
    // console.log('event', typeof e.target.value);
    states.function.setNewPost(e.target.value);
    sessionStorage.setItem('newPost', e.target.value);
    console.log('slideFilter', newPost);
  };

  return (
    <div>
      <div className="post-filter">
        <div className="label-slider">
          <div>Nombre de post {newPost}</div>
        </div>
        <input
          type="range"
          min={0}
          max={50}
          step={2}
          value={newPost}
          className="slideFilter"
          onChange={(e) => handleChange(e)}
        />
      </div>
    </div>
  );
}

// SlideFilter.propTypes = {
// };
