require('dotenv').config()

const TOKEN_SECRET = process.env.TOKEN_SECRET

const FRONTEND_URL = process.env.FRONTEND_URL

const DB_HOST = process.env.DB_HOST

const PORT = process.env.PORT

module.exports = {
    TOKEN_SECRET,
    FRONTEND_URL,
    DB_HOST,
    PORT
}