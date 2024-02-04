// * Express --
const express = require('express')
// * CORS -- 
const cors = require('cors')

// * Cookie parser - parsear cookies en formato JSON --

const cookieParser = require('cookie-parser')

// * ConnectMongoDB --
const connectMongoDB = require('./src/db.js')

// * Rutas --
const urls = require('./src/routes/urls.routes')
const redirectUrl = require('./src/routes/redirecturl.routes.js')
const auth = require('./src/routes/auth.routes.js')

// * PUERTO Y FRONT
const { PORT, FRONTEND_URL } = require('./src/config')

// * NECESARIO PARA CONSTRUIR LA RUTA A INDEX HTML
const path = require('path');

// * APP --
const app = express()
app.use(cors({
    origin: FRONTEND_URL,
    credentials: true,
    withCredentials:true
}))

app.use(express.json())
app.use(cookieParser(null, {
    secure: true,
    sameSite: 'Lex',
}));


// * Use routes --
app.use('/api', urls)
app.use('/r', redirectUrl)
app.use('/api', auth)

connectMongoDB()

app.listen(PORT, () => console.log('Server on PORT 5000'))