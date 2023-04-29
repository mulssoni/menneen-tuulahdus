<template>
  <div>
    <div class="booking">
      <section>
        <ContactForm />
      </section>
      <section>
        <PricingList />
      </section>
    </div>
    <div class="notification">
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
      <Accordion id="fifty-fifty-service" title="Mikä on 50/50 -palvelu?">
        <FiftyFiftyService />
      </Accordion>
    </div>
  </div>
</template>
<script setup lang="ts">
useHead({
  title: 'Varaus',
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
  justify-content: center;
  width: 100%;
  gap: 0 5rem;
  flex-wrap: wrap;
  @include breakpoint-down(md) {
    justify-content: center;
  }
}
</style>
