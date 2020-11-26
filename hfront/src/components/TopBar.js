import React from 'react'
import { Link } from 'react-router-dom'
import config from '../config'

const topBarStyle = {
  margin: '0 auto',
  width: 'calc(100% - 70px)',
  maxWidth: '1100px',
  padding: '20px 35px',
  backgroundColor: 'rgb(35, 185, 215)',
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-around',
  alignItems: 'center'
}
const tabStyle = {
  margin: '10px 5px',
  // flexGrow: 1,
  maxWidth: '115px',
  textAlign: 'center'
}
const linkStyle = {
  color: 'white',
  textDecoration: 'none',
  fontSize: '20px',
}

const Tab = ({ to, flexGrow = 1, ...props }) => {
  return (
    <div style={tabStyle}>
      <Link style={{ ...linkStyle, flexGrow }} to={config.baseUrl.concat(to)} {...props} />
    </div>
  )
}

const TopBar = () => {
  return (
    <div style={topBarStyle}>
      <Tab to="/">
        Toiveet
      </Tab>
      <Tab to="/rekisterointi">
        Rekisteröinti
      </Tab>
      <Tab to="/info/sovellus" flexGrow={2}>
        Sovelluksen käyttöohjeet
      </Tab>
      <Tab to="/info/tietokanta" flexGrow={2}>
        Tietokannan käyttöohjeet
      </Tab>
      <Tab to="/info/heroku" flexGrow={2}>
        Herokun käyttöohjeet
      </Tab>
    </div>
  )
}

export default TopBar
