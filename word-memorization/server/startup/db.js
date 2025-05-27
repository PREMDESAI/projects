import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default prisma;


// import pkg from 'pg';

// const {Client} = pkg;

// const client = new Client({
//   user: process.env.DB_USERNAME,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_NAME,
//   host: process.env.DB_HOST,
//   port: process.env.DB_PORT
// });

// await client.connect()

// export default client;

// // module.exports = {
// //   query: function (text, params, callback) {
// //     return pool.query(text, params, callback);
// //   },
// // };