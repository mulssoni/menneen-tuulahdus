<template>
  <div>
    <div class="booking">
      <ContactForm />
      <PricingList />
    </div>
    <div class="notification" style="margin-top: 5rem">
      <b>HUOM!</b>
      <p>Emme peri myyntiprovisiosta asiakkaalta itsepalvelupöydästä.</p>
      <p>
        Yksi myyntiviikko kirpputorilla on 6 vuorokautta ja kaksi viikkoa 12
        vuorokautta.
      </p>
      <p>
        Määräaikaan mennessä tyhjentämättömän pöydän tyhjennyksestä on
        lisäveloitus <b>10 €</b>
      </p>
    </div>
    <div style="margin: 1rem 0">
      <FiftyFiftyAccordion
        id="fifty-fifty-service"
        title="Mikä on 50 / 50 -palvelu?"
      >
        <ul class="fifty-fifty__list">
          <li>
            Palvelu alkaa aina henkilökunnan kanssa yhdessä sovittuna
            ajankohtana.
          </li>
          <li>Aloituksen tuotemäärä on max 5 laatikkoa/kassia.</li>
          <li>
            Laatikoiden/kassien tulee olla sellaisia jotka saavat jäädä
            kirpputorille.
          </li>
          <li>
            Kun sovit henkilökunnan kanssa 50%50 palvelun aloituksen, saat
            myyjältä henkilökohtaisen asiakasnumeron ja tunnukset kirpparikalle
            - palveluun, jossa voit seurata saldoa reaaliajassa.
          </li>
          <li>
            Saldon näkymä on asiakkaan sekä kirpputorin yhteinen saldo. Tästä
            summasta puolitetaan tilityksen yhteydessä puolet asiakkaalle ja
            puolet kirpputorille.
          </li>
          <li>
            Tilitys tapahtuu automaattisesti tilille myyntiajan loputtua, mikäli
            asiakas ei ole erikseen pyytänyt välitilitystä Välitilitys on
            mahdollista (vähimmäisväli 1 viikko).
          </li>
          <li>
            Myyntiaika 50%50 palvelulla on noin kuukausi. Kuukauden aikana saa
            tuoda lisää tuotteita erikseen sovittuna ajankohtana (tavaran
            tuonneille on myymälässä oma varauskalenteri).
          </li>
          <li>
            Pöydän tuotemäärä ei voi kasvaa liian suureksi, joten varauduthan
            viemään osan vanhoista tuotteista pois, jos haluat tuoda uusia
            tuotteita. <b>Siisti pöytä myy aina parhaiten!</b>.
          </li>
          <li>
            Tuotteiden tulee olla siistejä, puhtaita ja ehjiä! (emme hinnoittele
            rikkinäisiä tai likaisia tuotteita) .
          </li>
          <li>
            Tuotteita tuodessasi numeroithan kassisi/laatikkosi omalla
            asiakasnumerollasi ja nimelläsi.
          </li>
          <li>
            Tuotteet tulee pakata kategorioittain (vaatteet, tavarat, kengät
            yms. omiin kasseihin/laatikoihin, etteivät tuotteet rikkoonnu tai
            likaannu matkalla kirpputorille).
          </li>
          <li>
            Kirpputori hinnoittelee tuotteet käsin kirjoittamalla, joten
            tuotekohtaista seurantaa (tuotekuvauksen kera) ei ole mahdollista
            50%50 palvelulla.
          </li>
          <li>
            Mikäli asiakas haluaa tuotekohtaisen seurannan, tulisi asiakkaan
            vuokrata itsepalvelu pöytä ja hinnoitella tuotteet tietokoneen
            kautta.
          </li>
          <li>
            Myyntiajan loppuessa sovitaan asiakkaan kanssa yhdessä mahdollinen
            alennusprosentti viimeiseksi viikoksi, sekä lopetuspäivä.
          </li>
          <li>
            Asiakas voi tulla hakemaan kaikki loput tuotteensa lopetuspäivänä,
            mutta tuotteet saa jättää myös lahjoituksena kirpparille, mikäli
            niitä ei halua enää kotiin viedä.
          </li>
          <li>Hyviä yhteisiä myyntejä toivottaa <b>Menneen Tuulahdus!</b>!</li>
        </ul>
      </FiftyFiftyAccordion>
    </div>
  </div>
</template>
<script setup lang="ts">
useHead({
  title: 'Varaus - Kirpputori Jämsä | Menneen Tuulahdus',
  meta: [
    {
      name: 'description',
      content:
        'Tule meille myymään ja tekemään löytöjä Menneen Tuulahduksen kirpputorille. Meillä myös prosenttimyynti 50/50 palvelulla. Lämpimästi tervetuloa!',
    },
  ],
})
</script>
<style lang="scss" scoped>
ul {
  margin: 0;
  padding: 0;
  list-style-type: none;
  list-style: none;
}
.booking {
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: 0 3rem;
  flex-wrap: wrap;
  @include breakpoint-down(md) {
    justify-content: center;
  }
}

.fifty-fifty__list {
  display: flex;
  flex-direction: column;

  li {
    padding: 1.5rem 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);

    &:first-child {
      border-top: 1px solid rgba(0, 0, 0, 0.1);
    }
  }
}
</style>
