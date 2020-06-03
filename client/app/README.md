# Povezovanje na podatkovno bazo

5\. vaje pri predmetu [Osnove informacijskih sistemov](https://ucilnica1516.fri.uni-lj.si/course/view.php?id=54) (navodila)

## Vzpostavitev okolja

Na [GitHub](https://github.com) je na voljo javni repozitorij [https://github.com/szitnik/chinook](https://github.com/szitnik/chinook), ki vsebuje Node.js spletno aplikacijo, ki se povezuje do podatkovne baze Chinook. Z uporabo funkcije _Fork_ ustvarite lastno kopijo repozitorija v okviru katere boste opravljali vaje. V razvojnem okolju [Cloud9](https://c9.io) ustvarite kopijo oddaljenega repozitorija in v okviru vaj popravite in dopolnite obstoječo implementacijo kot zahtevajo navodila. Med delom smiselno uveljavljajte spremembe v lokalnem in oddaljenem repozitoriju!

## Zagon strežnika in posredovanje vsebin

Trenutna implementacija aplikacije ne zažene strežnika, da bi lahko do njega dostopali. Zaradi tega na vratih, ki so določena v spremenljivki `process.env.PORT`, omogočite sprejemanje HTTP zahtevkov. Opazili boste, da privzeta spletna stran (t.j. /) ni nastavljena. Zaradi tega vse HTTP zahtevke za korenski imenik preusmerite na podstran `/artists/1`.
(_Spremembo implementirajte v datoteki app.js._)


## Prikaz določenega števila zapisov na stran

Pri pregledovanju vsebin na vaši strani boste opazili, da se vedno pokaže največ 33 zapisov na stran. Popravite spletno stran tako, da se bo na strani izpisovalo največ 20 zapisov. Spremembo implementirajte tako, da število zapisov na strani nastavite v globalni spremenljivki. To vam bo omogočilo, da boste ob naslednji spremembi posodobili le eno vrstico kode.
(_Spremembo implementirajte v datoteki app.js._)

## Prikaz žanrov

Pri bolj natančnem pregledovanju podatkov ste ugotovili, da za nobenega izvajalca ne poznamo podatkov o žanru. Ker veste, da so tej podatki prisotni v bazi, spremenite funkcijo, ki prikazuje žanre tako, da boste vrnili seznam žanrov, ločenih z znakom `|`.
(_Spremembo implementirajte v datoteki app.js._)

## Prikaz podrobnosti seznama predvajanj

Sedaj ste postali že pravi poznavalec baze Chinook. Moti vas, da se ob kliku na ikono za dodatne informacije izbranega seznama izvajanj ne prikažejo njegove podrobnosti. Zaradi tega ste se odločili implementirati funkcijo, ki ob kliku na ikono pri izbranem seznamu predvajanj poleg ikone izpiše še dodatne podatke - na primer: _(198 artists | 3290 tracks | $3257 total)_.
(_Spremembo implementirajte v datoteki public/js/script.js._)