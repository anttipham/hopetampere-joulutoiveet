const wishesRouter = require('express').Router()
const Wish = require('../models/wish')

// Vain tämä router on avoinna kaikille
wishesRouter.patch('/:id', async (req, res) => {
  const wish = await Wish.findById(req.params.id)
  console.log('Sähköpostilla', wish.email, 'yritetty lähettää lomake')
  
  if (!wish) {
    // ei asiakaslistalla
    return res.status(400).json({
      error: 'Sähköpostia ei löytynyt rekisteristä. Tarkista oikeinkirjoitus.'
    })
  } else if (wish.date) {
    // on jo täyttänyt lomakkeen
    return res.status(400).json({
      error: 'Tästä sähköpostista on jo lähetetty joulutoive.'
    })
  } else if (!req.body.fullName) {
    return res.status(400).json({
      error: 'Kokonimi puuttuu.'
    })
  } else if (!req.body.lifeSituation) {
    return res.status(400).json({
      error: 'Elämäntilanne puuttuu.'
    })
  } else {
    wish.children = req.body.children
    wish.fullName = req.body.fullName
    wish.lifeSituation = req.body.lifeSituation
    wish.date = new Date()
    await wish.save()
    return res.sendStatus(200)
  }
})

// Tästä eteenpäin kaikki routerit vaativat salasanan
wishesRouter.get('/', async (req, res) => {
  if (!req.isStaff) {
    return res.sendStatus(401)
  }
  
  const wishes = await Wish.find({ date: { $exists: true }})
  res.json(wishes)
})

wishesRouter.post('/', async (req, res) => {
  if (!req.isStaff) {
    return res.sendStatus(401)
  }
  
  const data = req.body
  
  const wishes = data.map(wish => ({ ...wish, email: wish.email.toLowerCase() }))
  
  const newWishes = await Wish.insertMany(wishes, { ordered: false })
  res.json(newWishes)
})

wishesRouter.put('/:id', async (req, res) => {
  if (!req.isStaff) {
    return res.sendStatus(401)
  }
  
  const data = req.body
  const id = req.params.id
  const replacedWish = await Wish.findByIdAndUpdate(id, { ...data }, {
    new: true,
    omitUndefined: true,
    runValidators: true
  })
  res.json(replacedWish)
})

module.exports = wishesRouter