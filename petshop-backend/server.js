const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());
app.use(routes);
const PORT = process.env.PORT || 3000;


mongoose.connect('mongodb://localhost:27017/v1', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.log(err));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));