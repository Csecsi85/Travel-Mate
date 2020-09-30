require('dotenv').config();

module.exports = {
  port: process.env.PORT || 5000,
  isProduction: process.env.NODE_ENV === 'production',
  token_exp: process.env.TOKEN_EXP,
  secret:
    process.env.NODE_ENV === 'production'
      ? process.env.JWT_SECRET
      : 'my-secret',
  mongodbUri: process.env.MONGODB_URI,
};
