/* eslint-disable no-console */
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const { SERVER_PORT, CLIENT_URL } = process.env;

const app = express();

app.use(
  cors({
    origin: CLIENT_URL,
  })
);

// Routes

// Port
app.listen(SERVER_PORT, () => {
  console.log(`Server is running on port ${SERVER_PORT}.`);
});
