const userRoute = require('./api/v1/users');
const authRoute = require('./api/v1/auth');
const tripRoute = require('./api/v1/trips');

module.exports = (app) => {
  app.use('/users', userRoute);
  app.use('/auth', authRoute);
  app.use('/trips', tripRoute);
};
