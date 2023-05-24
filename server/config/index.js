require('dotenv').config();

const DB_HOST = process.env.DB_HOST;
const DB_PORT = process.env.DB_PORT;
const DB_NAME = process.env.DB_NAME;
const AUTH_SECRET=process.env.AUTH_SECRET

module.exports = {
    DB_HOST,
    DB_PORT,
    DB_NAME,
    AUTH_SECRET
}