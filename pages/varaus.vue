<template>
  <div class="booking">
    <div>
      <h1>Varaus</h1>
      <ContactForm style="width: 350px" />
    </div>
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
</template>

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
  gap: 3rem;
  flex-wrap: wrap;
  @include breakpoint-down(md) {
    justify-content: center;
  }
}
</style>
