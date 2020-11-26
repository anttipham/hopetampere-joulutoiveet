import React from 'react'
import loggedInPic from '../../pictures/MongoDB_logged_in.png'
import inCollectionsPic from '../../pictures/MongoDB_collections.png'
import documentPic from '../../pictures/MongoDB_document.png'

const DatabaseInfo = () => {
  const newWindow = {
    target: '_blank',
    rel: 'noopener noreferrer'
  }

  return (
    <div>
      <h2>Tietokannan käyttö</h2>

      <p>Tämä osio on tarkoitettu vain projektin vetäjälle. Sinun ei luultavasti tarvitse lukea tätä.</p>
      <p>
        Sovelluksessa on käytetty MongoDB-nimistä tietokantaa.
        Siihen pääsee{' '}
        <a href="https://account.mongodb.com/account/login" {...newWindow}>
          tästä
        </a>.
        Kirjaudu sisään käyttämällä Hope Tampereen sähköpostia tampere@hopeyhdistys.fi. Salasana on sama kuin Google-tilin salasana.
        (Salasana on ehkä muuttunut, jos joku on muuttanut sitä tämän kirjoittamisen jälkeen.)
      </p>

      <p>Sinulle tulee näkyviin seuraava näkymä.</p>
      <img src={loggedInPic} alt="Virhe kuvan renderöinnissä!" />
      <p>
        Oikealla puolella näkyy <i>Logical Size</i>. Tämä kertoo, kuinka paljon muistia käytetään.
        Laskin nopeasti, että nykyinen muistimäärä on helposti tarpeeksi yli sadalle tuhannelle asiakkaalle.
        Jos se kuitenkin jostain syystä täyttyy, pitäisi rahalla päivittää muistin määrä.
      </p>

      <p>
        Klikkaa Collections-nappia vasemmalta niin päästään seuraavaan näkymään.
        Klikkaa sitten <i>HopeTampereJoulutoiveet</i> ja sen alta <i>wishes</i>.
      </p>
      <img src={inCollectionsPic} alt="Virhe kuvan renderöinnissä!" />
      {/* <p>Klikkaa sitten <i>HopeTampereJoulutoiveet</i> ja sen alta <i>wishes</i>.</p> */}
      <p>Tässä näkymässä näet koko tietokannan tiedot.</p>
      <b>Voit poistaa kaikki asiakastiedot painamalla <i>wishes</i>-napin viereistä roskakorinappia.</b>
      <p>
        <i>TOTAL DOCUMENTS</i> kohdasta näet, kuinka monta asiakasta on rekisteröity sovellukseen.
        Kuvan ottohetkellä sovelluksessa on 955 asiakasta rekisteröitynä. Kuvan alla näkyvät myös asiakkaiden tiedot.
        Rekisteröinnin jälkeen asiakkaista näkyy vain sähköposti.
      </p>

      <h3>Yksittäisen asiakkaan tarkastelu</h3>
      <p>
        Kun asiakas on täyttänyt lomakkeen, voidaan se hakea. Haku toimii asettamalla aaltosulkeisiin hakukentän nimen ja haettavan kohteen sen jälkeen{' '}
        <code>{'{"email": "sähköposti.tähän"}'}</code>.
      </p>
      <img src={documentPic} alt="Virhe kuvan renderöinnissä!" />
      <p>Olen lisäksi vielä painanut vasemmalla olevaa nappia, joka laajentaa kaikki kentät näkyville.</p>
      <p>
        Jos jostain syystä tarvitsee poistaa asiakkaan, paina oikealla olevaa roskakorinappia.
        Poistaminen kuitenkin muuttaa asiakkaiden järjestystä, minkä vuoksi kannattaa keskustella muiden kanssa ensin,
        ovatko he käyttäneet asiakasnumeroa muistiinpanossa yms.
      </p>
    </div>
  )
}

export default DatabaseInfo
