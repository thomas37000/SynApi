/* eslint-disable react/require-default-props */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { createContext, useState, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';

export const ParamsContext = createContext(null);

const ParamsContextProvider = (props) => {
  const defaultPost = {
    newPost:
      sessionStorage.getItem('newPost') === 'undefined' ||
      sessionStorage.getItem('newPost') === undefined
        ? '10'
        : sessionStorage.getItem('newPost'),
  };

  const [newPost, setNewPost] = useState(defaultPost.newPost);

  const changePost = (e) => {
    setNewPost({ value: e.target.value });
  };

  const states = useMemo(
    () => ({
      function: {
        setNewPost,
        changePost,
      },
      newPost,
    }),
    [newPost]
  );

  useEffect(() => {
    setNewPost(newPost);
    console.log('paramsContext', newPost);
  }, [newPost]);

  console.log('PARAMS newPOST', newPost);

  return (
    <ParamsContext.Provider value={{ states }}>
      {props.children}
    </ParamsContext.Provider>
  );
};

ParamsContextProvider.propTypes = {
  children: PropTypes.node,
};

export default ParamsContextProvider;
