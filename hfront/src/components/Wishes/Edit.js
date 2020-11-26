import React, { useState, useEffect } from 'react'
import { useInputField, useTextAreaField } from '../hooks'
import EditChild from './EditChild'
import wishesService from '../../services/wishesService'
import { fetchWishesAction } from '../../redux/wishReducer'
import { useDispatch } from 'react-redux'

const Edit = ({ wish, index, setDisplayMode }) => {
  const dispatch = useDispatch()

  const fullName = useInputField(wish.fullName)
  const lifeSituation = useTextAreaField(wish.lifeSituation, {
    rows: 10
  })
  const amountOfChildren = useInputField(wish.children.length, {
    type: 'number',
    min: 1,
    max: 21,
    setOnChange: (setValue) => {
      return ({ target }) => {
        let value = Number(target.value)
        if (value < 1) {
          value = 1
        } else if (value > 21) {
          value = 21
        }
        setValue(value)
      }
    }
  })

  // säilöö lapsien tiedot
  const [children, setChildren] = useState(wish.children)

  // tehdään kokonaan uusi kopio setChildreniä varten
  const copyChildren = () => {
    const newChildren = []
    children.forEach(child => {
      newChildren.push({ ...child })
    })
    return newChildren
  }

  // Jos määrä muuttuu, muutetaan tila children
  useEffect(() => {
    console.log('määrä muuttuu')
    const children = copyChildren()
    while (children.length < amountOfChildren.value) {
      children.push({
        name: '',
        age: '',
        gender: '',
        wish: ''
      })
    }
    while (children.length > amountOfChildren.value) {
      children.length = amountOfChildren.value
    }
    setChildren(children)
  }, [amountOfChildren.value]) // eslint-disable-line

  // lapsen tietoa muokataan
  const handleChildrenChange = (child, index) => {
    const children = copyChildren()
    children[index] = child
    setChildren(children)
  }

  // lähetetään tiedot
  const submit = async () => {
    if (!window.confirm(`Haluatko korvata asiakkaan ${wish.fullName} tiedot?`)) {
      return
    }

    try {
      const replacedWish = await wishesService.put(wish.id, {
        fullName: fullName.value,
        lifeSituation: lifeSituation.value,
        children
      })
      replacedWish.date = new Date(replacedWish.date)
      dispatch(fetchWishesAction())
      setDisplayMode('view')
    } catch (error) {
      console.error(error)
      window.alert(`Tuntematon virhe: ${error.response.data.error}`)
    }
  }

  // tyylit
  const flexBoxExpandRight = {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    margin: '0'
  }
  return (
    <div className="wish">
      <h2>
        {index + 1}. <input {...fullName} />
      </h2>

      <button onClick={() => setDisplayMode('view')}>Sulje tallentamatta</button>
      <button onClick={submit}>Tallenna muutokset</button>
      <div><b>Lähetysaika:</b> {wish.date.toLocaleString()}</div>
      <div><b>Sähköposti:</b> {wish.email}</div>

      <h3>Elämäntilanne:</h3>
      <div>
        <textarea {...lifeSituation} />
      </div>

      <h3>Lapset:</h3>
      <div>
        <input {...amountOfChildren} />
      </div>
      <div style={flexBoxExpandRight}>
        {children.map((child, i) =>
          <EditChild child={child} index={i} handleChange={handleChildrenChange} key={i} />
        )}
      </div>
    </div>
  )
}

export default Edit
