import React from 'react'
import { useFormField } from './hooks'

const ChildForm = ({ index }) => {
  const name = useFormField(`childName${index}`)
  const age = useFormField(`childAge${index}`, {
    min: 0,
    max: 17,
    type: 'number',
    placeholder: '0-17',
    className: null
  })

  return (
    <div style={{ marginTop: '10px', marginBottom: '10px' }}>
    {/* <div> */}
      <hr />

      <table>
        <tbody>
          <tr>
            <td className="label">
              <label htmlFor={`childName${index}`}>{index}. lapsen nimi:</label>
            </td>
            <td>
              <input {...name} />
            </td>
          </tr>
          <tr>
            <td className="label">
              <label htmlFor={`childAge${index}`}>{index}. lapsen ikä:</label>
            </td>
            <td>
              <input {...age} />
            </td>
          </tr>
          <tr>
            <td className="label">
              <label htmlFor={`childGender${index}`}>{index}. lapsen sukupuoli:</label>
            </td>
            <td>
              <select id={`childGender${index}`} name={`childGender${index}`}>
                <option value=''></option>
                <option value='tyttö'>tyttö</option>
                <option value='poika'>poika</option>
              </select>
              {/* <input
                id={`childGender${index}`}
                name={`childGender${index}`}
                placeholder="esim. tyttö/poika"
                className="textinput"
              /> */}
            </td>
          </tr>
          <tr>
            <td className="label">
              <label htmlFor={`childWish${index}`}>{index}. lapsen toiveet:</label>
            </td>
            <td>
              <textarea
                id={`childWish${index}`}
                name={`childWish${index}`}
                rows={5}
                className="textinput"
                // placeholder="esim. "
              />
            </td>
          </tr>
        </tbody>
      </table>

    </div>
  )
}

export default ChildForm
