import React from 'react'

const View = ({ wish, setDisplayMode, index }) => {
  const flexBoxExpandRight = {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    margin: '0'
  }
  const flexChildDiv = {
    border: '1px solid',
    padding: '5px',
    width: 'calc(100% / 3 - 12px)', // 10px padding + 2px border
    minWidth: '180px',
    // flexGrow: 1,
    wordWrap: 'break-word'
  }
  const multiline = {
    whiteSpace: 'pre-line'
  }
  return (
    <div className="wish">
      <h2>
        {index + 1}. {wish.fullName}
        {/* <button onClick={handleDelete}>Poista</button> */}
      </h2>

      <button onClick={() => setDisplayMode('edit')}>Muokkaa</button>
      <div><b>Lähetysaika:</b> {wish.date.toLocaleString()}</div>
      <div><b>Sähköposti:</b> {wish.email}</div>

      <h3>Elämäntilanne:</h3>
      <div style={multiline}>{wish.lifeSituation}</div>

      <h3>Lapset ({wish.children.length})</h3>
      <div style={flexBoxExpandRight}>
        {wish.children.map(child =>
          <div style={flexChildDiv} key={child._id} className="wish-child">
            <div><b>Nimi:</b> {child.name}</div>
            <div><b>Ikä:</b> {child.age}</div>
            <div><b>Sukupuoli:</b> {child.gender}</div>
            <div><b>Toiveet:</b></div>
            <div style={multiline}>{child.wish}</div>
          </div>
        )}
      </div>
    </div>
  )
}

export default View
