import React, { useState } from 'react'
import Edit from './Edit'
import View from './View'

const ChooseDisplay = ({ wish, index }) => {
  const [displayMode, setDisplayMode] = useState('view')

  return (
    <>
      {displayMode === 'edit' &&
        <Edit
          index={index}
          wish={wish}
          setDisplayMode={setDisplayMode}
        />
      }

      {displayMode !== 'edit' &&
        <View
          index={index}
          wish={wish}
          setDisplayMode={setDisplayMode}
        />
      }

      <hr />
    </>
  )
}

export default ChooseDisplay
