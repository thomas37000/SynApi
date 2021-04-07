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
  // const [status, setStatus] = useState(false);

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
    network: 'twitter' || 'facebook' || 'instagram',
    per_page: 1,
  };

  useEffect(() => {
    axios
      .get(`${API_URL}`, { params })
      .then((res) => {
        setItems(res.data);
      })
      .catch((error) => {
        let message;
        if (error) {
          message = "vous n' avez pas accès à cette page";
        } else {
          message = error.response.data.errorMessage;
          console.log(message);
          console.log(error);
        }
      });
  }, []);

  return (
    <>
      <ColorContext.Provider value={[items, toggleColor]}>
        <div className="galerie">
          {/* <Tools /> */}
          {items.map((post) => (
            <CardProfile
              {...post}
              key={post.pub_id}
              post={post}
              session={post.session_id}
            />
          ))}
        </div>
      </ColorContext.Provider>
    </>
  );
};

export default Profile;
