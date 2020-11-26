const emailsRouter = require('express').Router()
// jälkeenpäin ajatellen minun olisi pitänyt tehdä kokonaan uusi modelli tätä varten
const Wish = require('../models/wish')

emailsRouter.get('/', async (req, res) => {
  if (!req.isStaff) {
    return res.sendStatus(401)
  }
  
  const wishes = await Wish.find()
  res.json(wishes.map(wish => wish.email))
})

module.exports = emailsRouter