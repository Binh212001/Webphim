const express = require('express');
const path = require('path');
const cor = require('cors');
const morgan = require('morgan');
const routes = require('./routes');
const { default: mongoose } = require('mongoose');

const app = express();
app.use(cor());
app.use('/img', express.static(path.join(__dirname, '/public/img')));
app.use(express.json());
app.use(morgan('combined'));
app.use(express.urlencoded({ extended: false }));
routes(app);
mongoose
  .connect(
    'mongodb+srv://Binh:Binh0987***867@hh3d.nsdlt6p.mongodb.net/?retryWrites=true&w=majority',
    { useNewUrlParser: true, useUnifiedTopology: true },
  )
  .then(() => app.listen(4000, () => console.log(`Listening at Port 4000`)))
  .catch((error) => console.log(`${error} did not connect`));
