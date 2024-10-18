const dotEnv = require("dotenv");

if (process.env.NODE_ENV !== "prod") {
  const configFile = __dirname + `/../../.env.${process.env.NODE_ENV}`; 
  dotEnv.config({ path: configFile });
} else {
  const configFile = __dirname + `/../../.env`; 
  dotEnv.config({ path: configFile });
}

module.exports = {
  PORT: process.env.PORT,
  DB_URL: process.env.MONGODB_URI,
  APP_SECRET: process.env.APP_SECRET,
  MESSAGE_BROKER_URL: process.env.MESSAGE_BROKER_URL,
  EXCHANGE_NAME: 'ONLINE_BOOKING',
  CUSTOMER_BINDING_KEY: 'CUSTOMER_SERVICE',
  BOOKING_BINDING_KEY: 'BOOKING_SERVICE',
  QUEUE_NAME: 'BOOKING_QUEUE'
};
