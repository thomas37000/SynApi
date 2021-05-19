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

  const undefinedNewOrder =
    sessionStorage.getItem('new_order') === 'undefined' ||
    sessionStorage.getItem('new_order') === undefined;

  const defaultOrder = {
    new_order: sessionStorage.getItem('new_order') || 'DESC',
  };

  const undefinedNewOrderBy =
    sessionStorage.getItem('new_order_by') === 'undefined' ||
    sessionStorage.getItem('new_order_by') === undefined;

  const defaultOrderBy = {
    new_order_by: sessionStorage.getItem('new_order_by') || 'pub_date',
  };

  // ---------------------------------------------------------------------------
  // STATE CONTEXT
  // ---------------------------------------------------------------------------

  const [items, setItems] = useState([]);
  const [maxItems, setMaxItems] = useState([]);
  const [newPost, setNewPost] = useState(defaultPost.newPost);
  const [newOrder, setNewOrder] = useState(defaultOrder.new_order);
  const [newOrderAsc, setNewOrderAsc] = useState(defaultOrder.new_order);
  const [newOrderContent, setNewOrderContent] = useState(
    defaultOrderBy.new_order_by
  );

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
  const API_USER = `${REACT_APP_API_USER}`;
  const API_TOKEN = `${REACT_APP_API_TOKEN}`;

  const params = {
    s: `${API_USER}`,
    t: `${API_TOKEN}`,
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
          console.log('Success', res.data, newPost);
          console.log('new_order_by', newOrder);
        }
      })
      .catch((error) => console.log(error));
  };

  const changePost = (e) => setNewPost({ value: e.target.value });
  const changeOrderBy = (e) => setNewOrder({ value: e.target.value });
  const changeOrderByAsc = (e) => setNewOrderAsc({ value: e.target.value });
  const changeOrderByContent = (e) =>
    setNewOrderContent({ value: e.target.value });

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
        setNewOrderAsc,
        changeOrderByAsc,
        setNewOrderContent,
        changeOrderByContent,
      },
      items,
      maxItems,
      newOrder,
      newOrderAsc,
      newOrderContent,
      newPost,
    }),
    [items, maxItems, newOrder, newOrderAsc, newOrderContent, newPost]
  );

  useEffect(() => {
    setNewOrder(newOrder);
    setNewOrderAsc(newOrderAsc);
    setNewOrderContent(newOrderContent);
    setNewPost(newPost);
    console.log('paramsContext', newOrder, newOrderAsc, newOrderContent);
  }, [newOrder, newOrderAsc, newOrderContent, newPost]);

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
