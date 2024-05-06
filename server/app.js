require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT;
require('./db/connection');

app.use(
  cors({
    origin: 'http://127.0.0.1:5173/',
    methods: 'GET,POST,PUT,DELETE',
    credentials: true,
  })
);
app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).json('server start');
});

app.listen(PORT, () => {
  console.log(`server start at port №${PORT}`);
});
