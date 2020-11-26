import React, { useState } from 'react'
import Login from './Login'
import Wishes from './Wishes'
import DatabaseInfo from './infos/DatabaseInfo'
import HerokuInfo from './infos/HerokuInfo'
import AppInfo from './infos/AppInfo'
import Footer from './Footer'
import { Switch } from 'react-router-dom'
import { Route } from 'react-router-dom'
import config from '../config'
import Emails from './Emails'
import TopBar from './TopBar'

const App = () => {
  const [display, setDisplay] = useState('login')

  const containerStyle = {
    margin: '0 auto',
    padding: '35px',
    width: 'calc(100% - 70px)',
    maxWidth: '1100px',
    backgroundColor: 'rgba(35, 185, 215, 0.3)',
  }
  return (
    <>
      {display !== 'login' &&
        <div className="no-print">
          <TopBar />
        </div>
      }

      <div style={containerStyle} className="container">
        {display === 'login' &&
          <Login setDisplay={setDisplay} />
        }

        {display !== 'login' &&
          <div>
            <button onClick={() => window.print()}>Tulosta</button>

            <Switch>
              <Route path={`${config.baseUrl}/info/heroku`}>
                <HerokuInfo />
              </Route>
              <Route path={`${config.baseUrl}/info/tietokanta`}>
                <DatabaseInfo />
              </Route>
              <Route path={`${config.baseUrl}/info/sovellus`}>
                <AppInfo />
              </Route>
              <Route path={`${config.baseUrl}/rekisterointi`}>
                <Emails />
              </Route>
              <Route path={`${config.baseUrl}/`}>
                <Wishes />
              </Route>
            </Switch>

          </div>
        }

        <Footer />
      </div>
    </>
  )
}

export default App
