import React, { createContext, useState, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

export const ConnexionContext = createContext(null);

const ConnexionContextProvider = (props) => {
  // ---------------------------------------------------------------------------
  // STATE CONTEXT
  // ---------------------------------------------------------------------------
  const [users, setUsers] = useState([]);
  const [setError] = useState(null);
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
  };

  const getApi = async () => {
    await axios.get(`${API_URL}`, { params }).then(
      (res) => {
        setUsers(res.data);
      },
      (err) => {
        setError(err);
      }
    );
  };

  useEffect(() => {
    getApi();
  }, []);

  const statesParams = useMemo(
    () => ({
      function: {
        setUsers,
      },
      users,
    }),
    [users]
  );

  useEffect(() => {
    setUsers(users);
  }, [users]);

  const { children } = props;
  return (
    <ConnexionContext.Provider value={{ statesParams }}>
      {children}
    </ConnexionContext.Provider>
  );
};

ConnexionContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ConnexionContextProvider;
