<template>
  <div>
    <Hero style="margin-bottom: 5rem" />
    <div class="container">
      <section>
        <h2>Myyntiin</h2>
        <p>
          Oletko tuomassa tuotteita ensimmäistä kertaa myyntiin? Lue ohjeet
          <NuxtLink to="/ohjeet">tästä</NuxtLink> tai siirry suoraan
          <NuxtLink to="/varaus">varaamaan pöytä</NuxtLink>.
        </p>
      </section>
      <section>
        <div class="img-text">
          <nuxt-img
            src="https://images.pexels.com/photos/6069531/pexels-photo-6069531.jpeg?cs=srgb&dl=pexels-cottonbro-studio-6069531.jpg&fm=jpg&w=1280&h=853&_gl=1*5s62bz*_ga*Njg5NjczNjMuMTY4MDg2ODc1OQ..*_ga_8JE65Q40S6*MTY4NDk5ODUwMS4xMi4xLjE2ODQ5OTg1NDAuMC4wLjA."
            class="img-text__img"
            quality="80"
            format="webp"
            width="400"
          />
          <div class="img-text__text">
            <h2 style="font-size: 2.5rem">Kestäviä valintoja</h2>
            <p>
              Jämsä on kaunis kaupunki Keski-Suomessa, ja siellä sijaitseva
              kirpputori tarjoaa paikallisille asukkaille ja vierailijoille
              upean mahdollisuuden tehdä löytöjä ja osallistua kestävään
              kulutukseen.
            </p>
            <p
              style="
                font-weight: 300;
                font-size: 1.5rem;
                border-left: 4px solid black;
                padding: 0.5rem 0 0.5rem 1.5rem;
              "
            >
              Jämsäläinen kirpputori on tunnelmallinen ja viihtyisä paikka,
              jossa voi viettää mukavia hetkiä etsiessään aarteita tai myymässä
              omia tarpeettomia tavaroitaan ja samalla tukea paikallista
              yhteisöä.
            </p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
