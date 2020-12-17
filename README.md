Antti Pham (antti.pham@gmail.com)

Opetellut Full Stackiä 4-5 kuukautta.
Koko projektissa luultavasti huonot dokumentoinnit (sori).


back-kansio sisältää tietenkin backendin koodin.

front-kansio sisältää asiakkaille tarkoitetun frontendin koodin. Asiakkaat vain täyttävät lomakkeen ja lähettävät tietoja palvelimelle.

hfront-kansio sisältää henkilöstölle tarkoitetun frontendin koodin. Henkilöstö pääsee muokkaamaan ja tarkastelemaan lomaketietoja.


Systeemi toimii näin:
1. hfrontissa POSTataan asiakkaiden sähköpostit.
2. frontissa PATCHataan sähköposti täytetyllä lomaketiedolla.
3. hfrontissa GETataan lomaketiedot ja muokataan PUTilla.
