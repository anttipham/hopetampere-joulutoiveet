import React from 'react'
import appPrint from '../../pictures/App_print.png'
import appPrintNoHeadersAndFooters from '../../pictures/App_print_no_headers_and_footers.png'

const AppInfo = () => {
  const formAppUrl = 'https://hopetampere-joulutoiveet.herokuapp.com/'
  const herokuInfoUrl = 'https://hopetampere-joulutoiveet.herokuapp.com/henkilosto/info/heroku'

  const newWindow = {
    target: '_blank',
    rel: 'noopener noreferrer'
  }

  return (
    <div>
      <h2>Sovelluksen käyttö</h2>

      <ol>
        <li>
          Tyhjennä tietokanta
        </li>
        <li>
          Rekisteröi asiakkaiden sähköpostit
        </li>
        <li>
          Asiakas täyttää lomakkeen sivulla <a href={formAppUrl} {...newWindow}>{formAppUrl}</a>
        </li>
        <li>
          Asiakkaan tiedot voidaan katsoa alta sekä tulostaa
        </li>
      </ol>
      <p>
        Sivu ei päivitä asiakastietoja reaaliajassa. Jos ihan äsken asiakas täytti lomakkeen, se ei näy.
        Sinun joutuu painaa alla olevaa Päivitä näkymä -nappia, jotta se näkyisi.
      </p>

      <h3>Huomautus tulostamisesta</h3>
      <p>
        Tulostaessasi ylä- ja alatunnisteet saattavat näkyä.
        <br />
        Kuvassa ylätunnisteet ovat &quot;<i>21.10.2020</i>&quot; ja &quot;<i>Joulutoiveiden tarkastelu</i>&quot;
        <br />
        Kuvassa alatunnisteet ovat &quot;<i>{herokuInfoUrl}</i>&quot; ja &quot;<i>1/5</i>&quot;
      </p>
      <img src={appPrint} alt="Virhe kuvan renderöinnissä!" />

      <p>
        Käyttämäsi selain lisää nämä automaattisesti.
        Tunnisteet saattavat olla sinulla erilaisia selaimestasi riippuen.
      </p>
      <p>
        Tunnisteet voidaan poistaa tulostusnäkymästä. Tämä vaihtelee selaimestasi riippuen.
        Google Chromella painetaan Lisää asetuksia -nappia ja poistetaan rasti Ylä- ja alatunnisteet -kohdasta.
      </p>
      <img src={appPrintNoHeadersAndFooters} alt="Virhe kuvan renderöinnissä!" />
    </div>
  )
}

export default AppInfo
