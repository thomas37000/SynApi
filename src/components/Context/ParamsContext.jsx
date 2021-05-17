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

  const undefinedNewOrderBy =
    sessionStorage.getItem('new_order_by') === 'undefined' ||
    sessionStorage.getItem('new_order_by') === undefined;

  const defaultOrderBy = {
    new_order_by: undefinedNewOrderBy
      ? 'DESC'
      : sessionStorage.getItem('new_order_by'),
  };

  // ---------------------------------------------------------------------------
  // STATE CONTEXT
  // ---------------------------------------------------------------------------

  const [items, setItems] = useState([]);
  const [maxItems, setMaxItems] = useState([]);
  const [newPost, setNewPost] = useState(defaultPost.newPost);
  const [newOrder, setNewOrder] = useState(defaultOrderBy.new_order_by);
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
    order: 'ASC' && 'DESC',
    order_by: 'content' && 'pub_date',
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
          // console.log('Success', res.data, newPost);
          console.log('new_order_by', newOrder);
        }
      })
      .catch((error) => console.log(error));
  };

  const changePost = (e) => setNewPost({ value: e.target.value });
  const changeOrderBy = (e) => setNewOrder({ value: e.target.value });

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
        setNewOrder,
        changeOrderBy,
      },
      items,
      maxItems,
      newOrder,
      newPost,
    }),
    [items, maxItems, newOrder, newPost]
  );

  useEffect(() => {
    setNewPost(newPost);
    setNewOrder(newOrder);
    // console.log('paramsContext', newPost);
  }, [newPost, newOrder]);

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
