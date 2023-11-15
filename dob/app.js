const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userRouter = require('./routes/users');

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/your-database-name', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use('/api/users', userRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});