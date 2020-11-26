const config = require("./config")

const checkAuthorization = (req, res, next) => {
  const pass = req.get('authorization')
  if (pass === config.STAFF_PASSWORD) {
    req.isStaff = true
  } else {
    req.isStaff = false
  }
  next()
}

const errorHandler = (error, request, response, next) => {
  console.error('ERROR!')
  console.error(error.name, '\t', error.message)

  if (error.name === 'ValidationError') {
    // Poistaa virheviestin alkukohdan, jossa ei lue mitään oleellista
    const firstColon = error.message.indexOf(':')
    const secondColon = error.message.indexOf(':', firstColon + 1)
    return response.status(400).json({ error: error.message.substring(secondColon + 2) })
  }

  next(error)
}

module.exports = {
  checkAuthorization,
  errorHandler
}