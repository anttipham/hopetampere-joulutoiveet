import React from 'react'
import { useFormField, useField } from './hooks'
import ChildForm from './ChildForm'

const Form = ({ handleSubmit, email }) => {
  const fullName = useFormField('fullName')
  const lifeSituation = useField('lifeSituation', { rows:5, className: 'textinput' })
  const childrenAmount = useFormField('childrenAmount', {
    type: 'number',
    min: 1,
    max: 20,
    setOnChange: (setValue) => {
      return ({ target }) => {
        let value = Number(target.value)
        if (value < 1) {
          value = ''
        } else if (value > 20) {
          value = 20
        }
        setValue(value)
      }
    }
  }, 1)

  const children = []
  for (let i = 1; i <= childrenAmount.value; i++) {
    children.push(<ChildForm key={i} index={i} />)
  }
  // console.log(children)

  return (
    <div>
      <h3>
        Olet kirjautunut sisään tunnuksella
        <br />
        <strong>{email}</strong>
      </h3>
      
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="fullName">Koko nimesi:</label>
        </div>
        <div>
          <input {...fullName} />
        </div>
        <div style={{ marginTop: '5px' }}>
          <label htmlFor="lifeSituation">Kerro elämäntilanteestanne, miksi tarvitsette jouluapua?</label>
          <textarea {...lifeSituation} />
        </div>

        {/* Lapsien tiedot */}
        <div style={{ marginTop: '30px' }}>
          <label>
            Alaikäisten lasten määrä: <input {...childrenAmount} />
          </label>
        </div>

        {childrenAmount.value > 0 &&
          <>
            {children}
            <button>Lähetä</button>
          </>
        }
      </form>
    </div>
  )
}

export default Form
