// import  'dotenv/config';
// dotenv.config();

// import './loadEnv';
import app from './app';
//  require('dotenv').config();


// if (process.env.NODE_ENV !== 'production') {
//   // eslint-disable-next-line global-require
//   require('dotenv').config();
// }

// const { app } = require('./app');  

// console.log(
//   process.env.DB_USER,
//   // process.env.DB_HOST,
//   process.env.DB_PORT,
//   process.env.DB_USER_NAME,
//   process.env.DB_PASS,
// );
const port = 3001;
//  console.log(process.env.DB_HOST)
// eslint-disable-next-line no-console
app.listen(port, () => console.log(`Server On ...  PORT: ${port} `));
