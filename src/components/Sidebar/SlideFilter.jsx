/* eslint-disable no-unused-vars */
import React, { useState, useContext, useEffect } from 'react';
import { ParamsContext } from '../Context/ParamsContext';
// import PropTypes from 'prop-types';
import './Sidebar.css';

export default function SlideFilter(props) {
  const { statesParams } = useContext(ParamsContext);
  const [newPost, setNewPost] = useState(statesParams.newPost);

  const handleChange = (e) => {
    // fonction native à JS qui convertit une String en Number
    setNewPost(Number(e.target.value));
    // typeof = return data type comme string , number, boolean etc...
    // voir https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators/typeof
    statesParams.function.setNewPost(e.target.value);
    sessionStorage.setItem('newPost', e.target.value);
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
