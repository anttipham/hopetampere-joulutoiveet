import React, { useState } from 'react'

const Togglable = ({ showText, hideText, children }) => {
  const [show, setShow] = useState(false)
  const toggleShow = () => setShow(!show)

  return (
    <div>
      <button onClick={toggleShow}>{show ? hideText : showText}</button>
      {show && children}
    </div>
  )
}

export default Togglable
