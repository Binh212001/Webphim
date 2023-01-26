const uploadRoute = require('./upload.route');
const auth = require('./auth.route');
const slide = require('./slide.route');
const film = require('./film.route');

const routes = (app) => {
  app.use('/auth', auth);
  app.use('/slide', slide);
  app.use('/film', film);

  app.use('/upload', uploadRoute);
};

module.exports = routes;
