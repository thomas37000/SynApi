/* eslint-disable react/require-default-props */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-console */
import React, { createContext, useState, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

export const ParamsContext = createContext(null);

const ParamsContextProvider = (props) => {
  const undefinedNewPost =
    sessionStorage.getItem('newPost') === 'undefined' ||
    sessionStorage.getItem('newPost') === undefined;

  const defaultPost = {
    newPost: undefinedNewPost ? '10' : sessionStorage.getItem('newPost'),
  };

  // ---------------------------------------------------------------------------
  // STATE CONTEXT
  // ---------------------------------------------------------------------------
  const [newPost, setNewPost] = useState(defaultPost.newPost);
  const [items, setItems] = useState([]);
  const [maxItems, setMaxItems] = useState([]);
  // ---------------------------------------------------------------------------
  // ---------------------------------------------------------------------------
  // API CALL
  // ---------------------------------------------------------------------------
  const {
    REACT_APP_API_URL,
    REACT_APP_API_USER,
    REACT_APP_API_TOKEN,
  } = process.env;

  const API_URL = `${REACT_APP_API_URL}`;

  const params = {
    s: `${REACT_APP_API_USER}`,
    t: `${REACT_APP_API_TOKEN}`,
    object: 'post',
    network: '',
    per_page: '50',
  };

  const getApi = () => {
    return axios
      .get(`${API_URL}`, { params })
      .then((res) => {
        if (res.data.length > 0) {
          // stock le retour de l'api (50 items)
          setMaxItems(res.data);
          // ne conserve que item * newPost ( le nombre de post du slider)
          setItems(res.data.slice(0, newPost));
          console.log('Success', res.data.slice(0, newPost));
        }
      })
      .catch((error) => console.log(error));
  };

  const changePost = (e) => setNewPost({ value: e.target.value });

  useEffect(() => {
    getApi();
    console.log('CALL API');
  }, []);

  const statesParams = useMemo(
    () => ({
      function: {
        setNewPost,
        changePost,
        setItems,
      },
      newPost,
      items,
      maxItems,
    }),
    [newPost, items, maxItems]
  );

  useEffect(() => {
    setNewPost(newPost);
    // console.log('paramsContext', newPost);
  }, [newPost]);

  return (
    <ParamsContext.Provider value={{ statesParams }}>
      {props.children}
    </ParamsContext.Provider>
  );
};

ParamsContextProvider.propTypes = {
  children: PropTypes.node,
};

export default ParamsContextProvider;
