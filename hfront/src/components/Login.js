import React, { useState } from 'react'
import emailsService from '../services/emailsService'
import wishesService from '../services/wishesService'
import { useDispatch } from 'react-redux'
import { setWishesAction } from '../redux/wishReducer'
import { setEmailsAction } from '../redux/emailReducer'

const Login = ({ setDisplay }) => {
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()

  const submit = async (event) => {
    event.preventDefault()

    try {
      wishesService.setAuth(password)
      emailsService.setAuth(password)
      const [emails, wishes] = await Promise.all([
        emailsService.get(),
        wishesService.get()
      ])
      dispatch(setEmailsAction(emails))
      dispatch(setWishesAction(wishes))

      setDisplay('view')
      console.log('kirjauduttu sisään')
    } catch (error) {
      console.error(error)
      window.alert('Väärä salasana')
    }
  }

  const style = {
    textAlign: 'center',
    padding: '35px 0'
  }
  return (
    <div style={style}>
      <h2>Kirjaudu sisään nähdäksesi joulutoiveet</h2>

      <form onSubmit={submit}>
        <label>
          Salasana: <input type="password" value={password} onChange={({ target }) => setPassword(target.value)} />
        </label>

        <button>Kirjaudu</button>
      </form>

    </div>
  )
}

export default Login
