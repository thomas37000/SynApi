/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CardProfile from '../Cards/CardProfile';
import Tools from './Tools';

const Profile = () => {
  const [items, setItems] = useState([]);

  const API_URL = `https://slideyour.net/api.php`;
  const params = {
    s: 'thomas2',
    t: '414d4d57e4577ea404ff0ebdfe25c680',
    // s: 'thomas3',
    // t: '8845c9cd48230070ac72191467ac1690',
    object: 'post',
    network: 'facebook',
    per_page: 1,
  };

  useEffect(() => {
    axios
      .get(`${API_URL}`, { params })
      .then((res) => res.data)
      .then((data) => {
        setItems(data);
        console.log('Facebook posts', data);
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
  }, [params.t]);

  return (
    <>
      <div className="galerie">
        <Tools />
        {items.map((post) => (
          <CardProfile
            key={post.pub_id}
            post={post}
            session={post.session_id}
          />
        ))}
      </div>
    </>
  );
};

export default Profile;
