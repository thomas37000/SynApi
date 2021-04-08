/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ColorContext from '../Context/ColorContext';
import CardProfile from '../Cards/CardProfile';
// import Tools from './Tools';

const Profile = () => {
  const [items, setItems] = useState([]);
  console.log('color:', items);
  const toggleColor = () => setItems(!items);
  const [status, setStatus] = useState(null);

  const {
    REACT_APP_API_URL,
    // REACT_APP_API_USER,
    // REACT_APP_API_TOKEN,
    REACT_APP_API_INSTA,
    REACT_APP_API_INSTAA,
  } = process.env;

  const API_URL = `${REACT_APP_API_URL}`;
  const params = {
    // s: `${REACT_APP_API_USER}`,
    // t: `${REACT_APP_API_TOKEN}`,
    s: `${REACT_APP_API_INSTA}`,
    t: `${REACT_APP_API_INSTAA}`,
    object: 'post',
    // onClick qui permet d' avoir la valeur Fb par ex
    network: 'facebook' && 'instagram' && 'twitter',
    per_page: 1,
  };

  const getApi = async (onSuccess, onError) => {
    await axios.get(`${API_URL}`, { params }).then(
      (res) => {
        setItems(res.data);
      },
      (error) => onError(error)
    );
  };

  useEffect(() => {
    getApi();
  }, []);

  const onChange = () => {
    setStatus(status);
  };
  return (
    <>
      <ColorContext.Provider value={[items, toggleColor]}>
        <div className="galerie">
          {/* <Tools /> */}
          {items.map((post) => (
            <CardProfile
              key={post.pub_id}
              post={post}
              session={post.session_id}
              onChange={() => onChange()}
              value={status}
            />
          ))}
        </div>
      </ColorContext.Provider>
    </>
  );
};

export default Profile;
