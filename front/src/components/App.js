// Antti Pham
// antti.pham@gmail.com
//
// Ohjelma, joka hoitaa Joulutoive-lomakkeen lähettämisen
//
// Koodi on aivan kamalan näköinen. En kovin paljon kiinnittänyt huomiota luettavuuteen.
// Sinut on varoitettu.

import React, { useState } from 'react'
import Login from './Login'
import Form from './Form'
import axios from 'axios'
import Notification from './Notification'
import Sent from './Sent'

let timeoutID

function App() {
  const [display, setDisplay] = useState('login')
  const [email, setEmail] = useState('')
  const [notification, setNotification] = useState('')
  const [id, setId] = useState(null)

  const showNotification = (message) => {
    clearTimeout(timeoutID)
    
    setNotification(message)
    timeoutID = setTimeout(() => {
      setNotification('')
    }, 4000)
  }
  
  const login = async (event) => {
    event.preventDefault()
    const email = event.target.email.value.toLowerCase().trim()
    if (!email) {
      return
    }
    // console.log(typeof email, 0, email)
    
    try {
      const response = await axios.post('/api/login', { email })
      setId(response.data.id)
      setEmail(email)
      setDisplay('form')
      showNotification('')
    } catch (err) {
      console.error(err.response.data)
      showNotification(err.response.data.error)
    }
  }

  const submit = async (event) => {
    // Ei voi lähettää enterin kautta // Pitää tehdä input-kenttiin
    // console.log(event.key)
    // if (event.key === 'Enter') {
    //   event.preventDefault()
    //   return
    // }
    
    event.preventDefault()

    // apufunktio
    const getValue = (property) => event.target[property].value.trim()
    
    // Kerätään kenttien tiedot talteen
    const fullName = getValue('fullName')
    const lifeSituation = getValue('lifeSituation')
    
    const children = []
    for (let i = 1; i <= getValue('childrenAmount'); i++) {
      children.push({
        name: getValue(`childName${i}`),
        age: getValue(`childAge${i}`),
        gender: getValue(`childGender${i}`),
        wish: getValue(`childWish${i}`)
      })
    }
    
    // Mikään kenttä ei voi olla tyhjä
    // Note to self: forEachin sisällä ei toimi return
    if (!fullName || !lifeSituation) {
      showNotification('Jokin kenttä on jätetty tyhjäksi.')
      return
    }
    for (const child of children) {
      for (let field in child) {
        if (!child[field]) {
          showNotification('Jokin kenttä on jätetty tyhjäksi.')
          return
        }
      }
    }

    // Lähetetään tieto
    const wish = {
      fullName,
      lifeSituation,
      children
    }
    
    try {
      console.log('Lähetetään lomake')
      await axios.patch(`/api/wishes/${id}`, wish)
      setDisplay('sent')
      showNotification('')
    } catch (err) {
      console.error(err.response.data)
      showNotification(`Ennaltaodottamaton virhe! ${err.response.data.error}`)
    }
  }

  return (
    <div className="container">
      {display === 'login' && <Login handleLogin={login} />}
      {display === 'form' && <Form email={email} handleSubmit={submit} />}
      {display === 'sent' && <Sent />}

      {notification && <Notification message={notification} />}
    </div>
  )
}

export default App
