import React, { useState } from 'react'
import wishesService from '../../services/wishesService'
import { fetchEmailsAction } from '../../redux/emailReducer'
import { useDispatch } from 'react-redux'

const PLACEHOLDER_TEXT = `Esimerkiksi:
sähköposti1@email.com, sähköposti2@email.com sähköposti3@email.com,
sähköposti4@email.com
      sähköposti5@email.com,            sähköposti6@email.com

"sähköposti7@email.com"

"
sähköposti8@email.com
"
`

const AddEmails = () => {
  const [emailsText, setEmailsText] = useState('')
  const dispatch = useDispatch()

  const submit = async (event) => {
    event.preventDefault()

    // Parsitaan sähköpostit merkkijonosta
    let emails = emailsText.split(/\n| /)
    emails = emails.map(email => email.trim()) // poistaa turhat välilyönnit sähköpostista
    emails = emails.map(email => email.replace(/"|,/g, '')) // poistaa sähköpostista lainausmerkit ja pilkut, jotka ovat tulleet taulukkolaskentasovelluksesta
    emails = emails.filter(email => email) // poistaa tyhjät merkkijonot
    emails = emails.map(email => email.toLowerCase()) // poistaa isot kirjaimet
    emails = [...new Set(emails)] // poistaa sähköpostit, jotka on mainittu monta kertaa
    emails = emails.map(email => ({ email })) // objekti

    // Lähetetään sähköpostit
    try {
      await wishesService.post(emails)
      dispatch(fetchEmailsAction())
      window.alert('Lisääminen onnistui')
      setEmailsText('')
    } catch (error) {
      window.alert('Tuntematon virhe sähköpostien lisäämisessä!')
      console.error(error.response)
    }
  }

  const handleTextChange = ({ target: { value } }) => setEmailsText(value)

  return (
    <div>
      <h2>Sähköpostien rekisteröiminen</h2>
      <p>Kun sähköposti on rekisteröity, asiakas pääsee täyttämään joulutoiveen.</p>
      <p>Jos sähköposti on jo lisätty, sovellus ei tee tälle sähköpostille <em>yhtään mitään</em>.</p>
      <p>
        Anna sähköpostit niin, että eri sähköpostit on erotettu uudella rivillä tai välilyönnillä.
        Sähköpostien välissä voi olla monta välilyöntiä ja rivinvaihtoja.
        Lainausmerkit (&quot;) ja pilkut (,) voivat olla sähköpostien seassa.
      </p>

      <form onSubmit={submit}>
        <textarea
          value={emailsText}
          onChange={handleTextChange}
          rows={10}
          placeholder={PLACEHOLDER_TEXT}
        />
        <button>Rekisteröi sähköpostit</button>
      </form>
    </div>
  )
}

export default AddEmails
