// Sovelluksen tunnistautuminen on aika epäturvallinen, mutta luulen,
// että Hope Tampere on tarpeeksi pieni, että asiakkaat eivät yritä
// aiheuttaa harmia.
require('express-async-errors')
const path = require('path')
const express = require('express')
const cors = require('cors')
const loginRouter = require('./controllers/login')
const wishesRouter = require('./controllers/wishes')
const middleware = require('./utils/middleware')
const helmet = require('helmet')
const emailsRouter = require('./controllers/emails')

// MongoDB-tietokanta
require('./utils/mongo')

// sovellus alkaa tästä
app = express()

// middleware
app.use(helmet())
app.use(express.json())
app.use(cors())
app.use(middleware.checkAuthorization)

// frontendit
app.use(express.static(path.join(__dirname, 'build')))

app.use('/henkilosto', express.static(path.join(__dirname, 'hbuild')))
// React-routerin takia täytyy lähettää henkilöstösivu moniin eri osoitteisiin
app.get('/henkilosto*', (req ,res) =>{
  res.sendFile(path.join(__dirname, '/hbuild/index.html'));
});


// routet
app.use('/api/login', loginRouter)
app.use('/api/wishes', wishesRouter)
app.use('/api/emails', emailsRouter)

// error
app.use(middleware.errorHandler)

module.exports = app