// * Express --
const express = require('express')
// * CORS -- 
const cors = require('cors')

// * Cookie parser - parsear cookies en formato JSON --

const cookieParser = require('cookie-parser')

// * ConnectMongoDB --
const connectMongoDB = require('./db.js')

// * Rutas --
const urls = require('./routes/urls.routes')
const redirectUrl = require('./routes/redirecturl.routes.js')
const auth = require('./routes/auth.routes.js')

// * PUERTO Y FRONT
const { PORT, FRONTEND_URL } = require('./config')

// * APP --
const app = express()
app.use(cors({
    origin: FRONTEND_URL,
    credentials: true
}))
app.use(express.json())
app.use(cookieParser())


// * Use routes --
app.use('/api', urls)
app.use('/r', redirectUrl)
app.use('/api', auth)

connectMongoDB()
app.listen(PORT, () => console.log('Server on PORT 5000'))