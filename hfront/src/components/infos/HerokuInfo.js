import React from 'react'
import afterLogin from '../../pictures/Heroku_after_login.png'
import appOpened from '../../pictures/Heroku_app_open.png'
import settings from '../../pictures/Heroku_settings.png'
import configVars from '../../pictures/Heroku_config_vars.png'
import safe from '../../pictures/Heroku_safe.png'
import unsafe from '../../pictures/Heroku_unsafe.png'
import account from '../../pictures/Heroku_account.png'
import accountSettings from '../../pictures/Heroku_account_settings.png'
import billing from '../../pictures/Heroku_billing.png'

const HerokuInfo = () => {
  const siteURL = 'https://hopetampere-joulutoiveet.herokuapp.com/'
  const unsafeSiteURLHttp = 'http://hopetampere-joulutoiveet.herokuapp.com/'
  const unsafeSiteURL = 'hopetampere-joulutoiveet.herokuapp.com/'
  const ownURL = 'https://antti-oy-joulutoiveet.herokuapp.com/'

  const newWindow = {
    target: '_blank',
    rel: 'noopener noreferrer'
  }

  return (
    <div>
      <h2>Herokun käyttö</h2>

      <p>
        Heroku on vastuussa sovelluksen laittamisesta internettiin. Niin kuin näet sivun URL-osoitteesta{' '}
        <a href={siteURL} {...newWindow}>{siteURL}</a>,
        siinä on perässä <i>herokuapp</i> tuossa yhdessä kohtaa.
      </p>

      <p>
        Herokulla on rajoituksia, kun sitä käytetään ilmaiseksi.
      </p>
      <ul>
        <li>Se voi olla auki vain 550 tuntia kuukaudessa (kuukaudessa on 730 tuntia).</li>
        <li>Se menee lepotilaan, kun palvelimeen ei lähetetä viestejä puoleen tuntiin. Tämä säästää tunteja.</li>
      </ul>
      <p>
        Jos Herokuun laittaa maksukortin, saadaan 450 tuntia lisää kuukaudessa, mikä riittäisi sovelluksen ylläpitämiseen 24/7.
        Heroku ei kuitenkaan käytä rahaa vaan haluaa pelkästään korttitiedot.
        Kirjoittamishetkenä meillä ei ole korttia laittaa Herkuun, joten kannattaa lähettää linkki vasta noin 7. päivä välttyäksemme tuntiaikojen loppumisen.
      </p>

      <h3>Suojaus</h3>
      <p>
        Heroku käyttää muokattua TSL-protokollaa, jota käytetään automaattisesti, kun URL-osoitteen edessä on <i>https://</i>.
        Kun tämä salausprotokolla on käytössä, selaimen osoitepalkin viereen ilmestyy lukkoikoni.
      </p>
      <img src={safe} alt="Virhe kuvan renderöinnissä!" />

      <p>Jos kuitenkin menee sivustolle ilman HTTPS:ää{' '}
        <a href={unsafeSiteURLHttp} {...newWindow}>{unsafeSiteURL}</a>,
        on mahdollista, että selain siirtää käyttäjän epäturvalliselle HTTP-sivustolle{' '}
        <a href={unsafeSiteURLHttp} {...newWindow}>{unsafeSiteURLHttp}</a>.
      </p>
      <img src={unsafe} alt="Virhe kuvan renderöinnissä!" />
      <p>Tämän takia pyri lähettämään linkeissä aina <i>https://</i></p>


      <h3>Herokun järjestelmien turistikierros</h3>
      <em>
        Tästä eteenpäin ei tarvitse projektin vetäjänkään lukea, joten sinunkaan ei tarvitse lukea tätä lainkaan.
        Tätä luetaan ihan vain sovelluksen ymmärtämisen vuoksi.
      </em>

      <p>
        Käydään läpi Herokun järjestelmät läpi. Kirjaudu ensin <a href="https://www.heroku.com/" {...newWindow}>Herokuun</a> Hope Tampereen sähköpostilla
        tampere@hopeyhdistys.fi. Salasana on sama kuin Google-tilin salasana, mutta salasanan perässä on kysymysmerkki.
        (Salasana on ehkä muuttunut, jos joku on muuttanut sitä tämän kirjoittamisen jälkeen.)
      </p>

      <p>Kirjautumisen jälkeen tulee tämä näkymä.</p>
      <img src={afterLogin} alt="Virhe kuvan renderöinnissä!" />
      <p>Klikataan sovellustamme niin tulee tämä näkymä.</p>
      <img src={appOpened} alt="Virhe kuvan renderöinnissä!" />
      <p>
        More-valikosta näkyy <i>Restart all dynos</i>. Jos kumman syystä sovellus yhtäkkiä lakkaa toimimasta, tämä pakottaa uudelleenkäynnistyksen.
      </p>

      <p>Siirrytään asetuksiin klikkaamalla Settings-nappia.</p>
      <img src={settings} alt="Virhe kuvan renderöinnissä!" />
      <p>
        Tästä näkyy <i>App Name</i>, jota vaihtamalla voidaan muuttaa sovelluksen URL-osoitetta esimerkiksi osoitteeseen{' '}
        <a href={ownURL} onClick={event => event.preventDefault()}>{ownURL}</a>.
      </p>
      <p>Alla näkyvät myös ympäristömuuttujat <i>Config Vars</i>. Klikataan <i>Reveal Config Vars</i> -nappia.</p>
      <img src={configVars} alt="Virhe kuvan renderöinnissä!" />
      <p>Kuva on tahalteen kropattu oikealta, koska muuttujien arvot on pidettävä salassa.</p>
      <p>Tässä näkyvät seuraavat ympäristömuuttujat:</p>
      <p><code>MONGODB_URI</code> on pitkä merkkijono, joka sisältää tunnukset kirjautua tietokantaan. <b>TÄHÄN EI KOSKETA!</b></p>
      <p><code>STAFF_PASSWORD</code> on salasana, jolla kirjauduit tälle henkilöstön sivulle. Vaihda tämän muuttujan arvo, jos haluat muuttaa salasanan.</p>
      <p><code>TZ</code> (time zone) kertoo aikavyöhykkeen sovellukselle. Tähän ei kannata koskea.</p>


      <h3>Kun sovellus ei toimi</h3>
      <p>
        Jos tunteja on jäljellä vielä, kannattaa uudelleenkäynnistää palvelin (ks. yltä).
        Luultavasti jokin vakava bugi on kaatanut koko systeemin. Jos tämä jatkuu, systeemi kannattaa ehkä hylätä tai korjata.
      </p>
      <p>
        Kuitenkin luulen, että tulevaisuudessa yleisin syy tulee olemaan tuntien loppuminen.
        Tunnit voi tarkistaa Herokun maksusivulta.
        Klikkaa ensin oikealta yläkulmalta profiilikuvaa ja sitten <i>Account Settings</i> -nappia.
      </p>
      <img src={account} alt="Virhe kuvan renderöinnissä!" />

      {/* <p>Klikkaa </p> */}
      <img src={accountSettings} alt="Virhe kuvan renderöinnissä!" />

      <p>Siirrytään maksusivulle painamalla <i>Billing</i>-nappia.</p>
      <img src={billing} alt="Virhe kuvan renderöinnissä!" />

      <p>
        Kuvan pohjasta näkyvät sitten tuntimäärät. Kuvan ottohetkellä on jäljellä 549,24 tuntia.
        Jos tunnit loppuvat, kannattaa lisätä maksukortti.
      </p>
    </div>
  )
}

export default HerokuInfo
