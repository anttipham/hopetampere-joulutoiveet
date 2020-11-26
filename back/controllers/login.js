const loginRouter = require('express').Router()
const Wish = require('../models/wish')

// Tämän tarkoitus on vain tarkistaa, onko sähköposti listalla.
loginRouter.post('/', async (req, res) => {
  if (!req.body.email) {
    return res.sendStatus(400)
  }

  const wish = await Wish.findOne({ email: req.body.email.toLowerCase() })

  console.log('Yritetty kirjautua sisään sähköpostilla', req.body.email)

  // console.log(wish)
  if (!wish) {
    // ei asiakaslistalla
    return res.status(401).json({
      error: 'Sähköpostia ei löytynyt rekisteristä. Tarkista oikeinkirjoitus.'
    })
  } else if (wish.date) {
    // on jo täyttänyt lomakkeen
    return res.status(401).json({
      error: 'Tästä sähköpostista on jo lähetetty joulutoive.'
    })
  } else {
    return res.json({ id: wish._id })
  }
})

module.exports = loginRouter