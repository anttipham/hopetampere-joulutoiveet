import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchEmailsAction } from '../../redux/emailReducer'

const EmailList = () => {
  const emails = useSelector(state => state.emails)
  const dispatch = useDispatch()

  const updateEmails = () => {
    dispatch(fetchEmailsAction())
  }

  const listStyle = {
    height: '200px',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  }
  const flexChild = {
    flexGrow: 1,
    width: '260px',
    textAlign: 'center',
    margin: '10px 0',
    wordWrap: 'break-word'
    // color: 'white'
  }
  return (
    <div>
      <h2>Rekisteröidyt sähköpostit</h2>

      <button onClick={() => updateEmails()}>Päivitä näkymä</button>

      <div className="scroll" style={listStyle}>
        {emails.map((email) => (
          <div key={email} style={flexChild}>
            {email}
          </div>
        ))}
      </div>
    </div>
  )
}

export default EmailList
