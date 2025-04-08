// backend/server.js
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const researchRoutes = require('./routes/research-routes');
app.use('/api/research-papers', researchRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

app.listen(8000, () => {
  console.log('Server running on http://localhost:8000');
});
