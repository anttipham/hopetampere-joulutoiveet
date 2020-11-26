import React from 'react'

const WishEditChild = ({ child, index, handleChange }) => {
  const name = child ? child.name : ''
  const age = child ? child.age : ''
  const gender = child ? child.gender : ''
  const wish = child ? child.wish : ''

  const handleNameChange = ({ target: { value } }) => {
    handleChange({ ...child, name: value }, index)
  }
  const handleAgeChange = ({ target: { value } }) => {
    handleChange({ ...child, age: value }, index)
  }
  const handleGenderChange = ({ target: { value } }) => {
    handleChange({ ...child, gender: value }, index)
  }
  const handleWishChange = ({ target: { value } }) => {
    handleChange({ ...child, wish: value }, index)
  }
  // Estetään enter napin painaminen
  const disableEnter = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault()
    }
  }

  const flexChildDiv = {
    border: '1px solid',
    // margin: '1px',
    padding: '5px',
    width: '30%',
    minWidth: '170px'
  }
  return (
    <div style={flexChildDiv}>
      <div>
        <b>Nimi: </b>
        <input value={name} onChange={handleNameChange} onKeyPress={disableEnter} />
      </div>
      <div>
        <b>Ikä: </b>
        <input value={age} onChange={handleAgeChange} onKeyPress={disableEnter} />
      </div>
      <div>
        <b>Sukupuoli: </b>
        <input value={gender} onChange={handleGenderChange} onKeyPress={disableEnter} />
      </div>

      <div><b>Toiveet:</b></div>
      <textarea value={wish} onChange={handleWishChange} rows={10} />
    </div>
  )
}

export default WishEditChild
