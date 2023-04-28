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
    <FiftyFiftyAccordion
      id="fifty-fifty-service"
      title="Lue lisää 50 / 50 -palvelusta"
    />
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
</style>
