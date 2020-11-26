import React from 'react'
import { useField } from './hooks'

const Login = ({ handleLogin }) => {
  const email = useField({ type: 'text' })
  return (
    <div>
      <h2>Hope Joulutoiveet</h2>

      <p>Voit käyttää joulutoiveen vain kerran.</p>

      <p>Kirjaudu sovelluksen sisään sähköpostillasi.</p>

      <form onSubmit={handleLogin}>
        <label>
          Sähköposti: <input {...email} name="email" autoComplete="email" />
        </label>

        <button>Kirjaudu</button>
      </form>
    </div>
  )
}

export default Login
