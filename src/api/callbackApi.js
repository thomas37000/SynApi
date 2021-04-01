/* eslint-disable no-console */
import axios from 'axios';

require('dotenv').config();

const {
  REACT_APP_API_URL,
  REACT_APP_API_USER,
  REACT_APP_API_TOKEN,
} = process.env;

const params = {
  s: `${REACT_APP_API_USER}`,
  t: `${REACT_APP_API_TOKEN}`,
  object: 'post',
  network: 'facebook',
  per_page: 10,
};

function findApi(onSuccess) {
  axios.get(`${REACT_APP_API_URL}`, { params }).then((res) => {
    onSuccess(res.data);
  });
}

export default findApi;
