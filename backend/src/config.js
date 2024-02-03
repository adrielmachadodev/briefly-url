const TOKEN_SECRET = process.env.TOKEN_SECRET || 'secreto de adriel'

const FRONTEND_URL = process.env.FRONTEND_URL || 'http://localhost:5173'

const DB_HOST = process.env.DB_HOST || "mongodb+srv://adrielmachado:GBNXMj3kd932Q0I9@shorturl.kv9vlnl.mongodb.net/"

const PORT = process.env.PORT || 5000

module.exports = {
    TOKEN_SECRET,
    FRONTEND_URL,
    DB_HOST,
    PORT
}