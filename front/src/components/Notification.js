import React from 'react'

const Notification = ({ message }) => {
  const colorStyle = {
    color: 'red'
  }
  return (
    <div className="notification" style={colorStyle}>
      {message}
    </div>
  )
}

export default Notification
