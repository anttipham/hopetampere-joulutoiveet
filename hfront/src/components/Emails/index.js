import React from 'react'
import EmailList from './EmailList'
import AddEmails from './AddEmails'

const Emails = () => {
  return (
    <div>
      <div className="no-print">
        <AddEmails />
      </div>
      <EmailList />
    </div>
  )
}

export default Emails
