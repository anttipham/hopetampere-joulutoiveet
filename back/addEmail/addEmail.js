const mongoose = require('mongoose')
const config = require('../utils/config')
const Wish = require('../models/wish')
const fs = require('fs')
const readline = require('readline')

console.log('Sähköpostit lisäävä ohjelma')

const readEmail = async () => {
  const emailSet = new Set()
  
  const rl = readline.createInterface({
    input: fs.createReadStream('addEmail/emails.txt'),
    crlfDelay: Infinity
  })
  
  for await (let line of rl) {
    // console.log(line)
    line = line.replace('"', '')
    line = line.trim()
    if (line) {
      emailSet.add(line)
    }
  }
  // console.log('set', emailSet)

  // Lisätään sähköpostit
  const emails = []
  emailSet.forEach((email) => {
    emails.push({ email })
  })

  return emails
}

const addToDB = async (emails) => {
  // Yhdistetään MongoDB:hen
  require('../utils/mongo')
  
  Wish.insertMany(emails, { ordered: false })
    .then(() => {
      console.log('Sähköpostien lisääminen onnistui!')
      console.log('Jos sähköposti oli jo lisätty, tälle sähköpostille ei tehdä mitään.')
      console.log(...emails)
    })
    .catch((err) => {
      console.error('Tapahtui virhe!', err)
      console.error(err.message)
    })
    .finally(() => {
      mongoose.connection.close()
    })
}

const main = async () => {
  const emails = await readEmail()
  // const emails = []
  // for (let i = 0; i < 1000; i++) {
  //   emails.push({
  //     email: `testi${i}`
  //   })
  // }
  addToDB(emails)
}

main()