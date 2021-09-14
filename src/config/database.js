// require('dotenv').config();
// module.exports = {
//   dialect: 'postgres',
//   host: '172.17.0.2',
//   username: 'root',
//   password: 'pass',
//   database: 'mydb',
//   define: {
//     timestamps: true,
//     underscored: true,
//     underscoredAll: true,
//   },
// };

module.exports = {
  dialect: 'postgres',
  host: process.env.DB_HOST,
  username: process.env.DB_USER_NAME,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};


