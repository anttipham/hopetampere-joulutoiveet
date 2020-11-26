import { useState } from 'react'

export const useField = (id, config={}, defaultValue='') => {
  const [value, setValue] = useState(defaultValue)

  // Luodaan onChange setOnChangesta
  let onChange
  if (config.setOnChange) {
    onChange = config.setOnChange(setValue)
    delete config.setOnChange
  } else {
    onChange = ({ target }) => setValue(target.value)
  }

  // Lisätään class, id ja name
  config.id = id
  config.name = id

  return { value, onChange, ...config }
}

export const useFormField = (id, config={}, defaultValue='') => {
  const [value, setValue] = useState(defaultValue)

  // Estetään enter napin painaminen
  const onKeyPress = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault()
    }
  }

  // Luodaan onChange setOnChangesta
  let onChange
  if (config.setOnChange) {
    onChange = config.setOnChange(setValue)
    delete config.setOnChange
  } else {
    onChange = ({ target }) => setValue(target.value)
  }

  // Lisätään class, id ja name
  config.id = id
  config.name = id

  return {
    value,
    onChange,
    onKeyPress,
    className: "textinput",
    ...config
  }
}
