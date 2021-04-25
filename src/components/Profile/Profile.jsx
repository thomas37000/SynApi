/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CardProfile from '../Cards/CardProfile';
import Tools from './Tools';

const Profile = (hashtagColor) => {
  const [items, setItems] = useState([]);

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
    per_page: 1,
  };

  const getApi = async (onSuccess, onError) => {
    await axios
      .get(`${API_URL}`, { params })
      .then((res) => {
        setItems(res.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .then((res) => {
        console.log(res);
      });
  };

  useEffect(() => {
    getApi();
  }, []);

  return (
    <>
      <div>
        <Tools />
        {items.map((post) => (
          <CardProfile
            color={hashtagColor}
            key={post.pub_id}
            post={post}
            session={post.session_id}
            // onChange={() => onChange()}
          />
        ))}
      </div>
    </>
  );
};

export default Profile;
