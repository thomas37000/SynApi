/* eslint-disable no-console */
import React, { createContext, useState, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

export const ParamsContext = createContext(null);

const ParamsContextProvider = (props) => {
  // ---------------------------------------------------------------------------
  // STATE CONTEXT
  // ---------------------------------------------------------------------------

  const [items, setItems] = useState([]);
  const [maxItems, setMaxItems] = useState([]);
  const [newPost, setNewPost] = useState(10);

  // ---------------------------------------------------------------------------
  // RADIO BUTTONS
  // ---------------------------------------------------------------------------
  const [sorting, setSorting] = useState('DESC');
  // ---------------------------------------------------------------------------
  // ---------------------------------------------------------------------------
  // API CALL
  // ---------------------------------------------------------------------------

  const API_URL = 'https://slideyour.net/api.php';
  const API_USER = 'thomas3';
  const API_TOKEN = '8845c9cd48230070ac72191467ac1690';

  const params = {
    s: `${API_USER}`,
    t: `${API_TOKEN}`,
    object: 'post',
    network: '',
    per_page: '50',
    order: 'DESC',
    order_by: 'pub_date',
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
        }
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getApi();
  }, []);

  const statesParams = useMemo(
    () => ({
      function: {
        setNewPost,
        setItems,
        setSorting,
      },
      items,
      maxItems,
      newPost,
      sorting,
    }),
    [items, maxItems, newPost, sorting]
  );

  const { children } = props;

  return (
    <ParamsContext.Provider value={{ statesParams }}>
      {children}
    </ParamsContext.Provider>
  );
};

ParamsContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ParamsContextProvider;
