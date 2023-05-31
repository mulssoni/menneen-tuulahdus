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
      <article>
        <div class="img-text">
          <img src="~/assets/images/kalusteet.webp" class="img-text__img" />
          <div class="img-text__text">
            <h2 style="font-size: 2.5rem">Kestäviä valintoja</h2>
            <p>
              Jämsä on kaunis kaupunki Keski-Suomessa, ja siellä sijaitseva
              kirpputori tarjoaa paikallisille asukkaille ja vierailijoille
              upean mahdollisuuden tehdä löytöjä ja osallistua kestävään
              kulutukseen.
            </p>
            <p class="blockquote">
              Jämsäläinen kirpputori on tunnelmallinen ja viihtyisä paikka,
              jossa voi viettää mukavia hetkiä etsiessään aarteita tai myymässä
              omia tarpeettomia tavaroitaan ja samalla tukea paikallista
              yhteisöä.
            </p>
          </div>
        </div>
      </article>
      <section>
        <div
          class="notification"
          style="
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
            gap: 2rem 3rem;
          "
        >
          <div>
            <h2 style="font-size: 1.5rem; margin-bottom: 0.1em">
              Tutustu 50/50 -palveluumme!
            </h2>
            <span>Tuo tuotteet – me huolehdimme lopusta!</span>
          </div>
          <NuxtLink class="button--accent" to="/varaus#fifty-fifty-service">
            LUE LISÄÄ!
          </NuxtLink>
        </div>
      </section>
      <section>
        <div class="img-text reverse">
          <img src="~/assets/images/lehdet.webp" class="img-text__img" />
          <div class="img-text__text">
            <h2 style="font-size: 2.5rem">Monipuolinen valikoima</h2>
            <p>
              Kirpputorin valikoima on monipuolinen ja vaihtelee päivittäin,
              joten jokainen vierailu tuo mukanaan uusia yllätyksiä. Täällä voit
              löytää vaatteita, kenkiä, kodin sisustustarvikkeita, huonekaluja,
              kirjoja, elektroniikkaa ja paljon muuta. Tuotteet ovat
              hyväkuntoisia ja edullisia, joten voit tehdä löytöjä ilman suurta
              budjettia.
            </p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
