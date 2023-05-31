<template>
  <div class="container">
    <section class="contacts">
      <div class="contacts-container">
        <div class="footer__barcode">
          <h1>Yhteystiedot</h1>
          <ul>
            <li>Teollisuuskatu 7, Jämsä</li>
            <li>
              <a href="mailto:info@menneentuulahdus.fi"
                >info@menneentuulahdus.fi</a
              >
            </li>
            <li><a href="tel:+358 40 704 4697">+358 40 704 4697</a></li>
          </ul>
        </div>
        <div class="footer__hours" style="max-width: 300px">
          <h2>Aukioloajat</h2>
          <ul>
            <li><span>Ma–Pe</span> <span>klo 10.00 – 17.00</span></li>
            <li><span>La</span> <span>klo 10.00 – 14.00</span></li>
            <li><span>Su</span> <span>suljettu</span></li>
          </ul>
        </div>
        <div
          class="footer__socials"
          style="width: 100%; justify-content: center"
        >
          <a
            href="https://www.facebook.com/profile.php?id=100068307363115"
            target="_blank"
          >
            <nuxt-img
              src="/icons/square-facebook.svg"
              alt="facebook"
              height="30"
              width="30"
            />
          </a>
          <a href="https://www.instagram.com/menneentuulahdus/" target="_blank">
            <nuxt-img
              src="/icons/square-instagram.svg"
              alt="instagram"
              height="30"
              width="30"
            />
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.contacts-container {
  display: flex;
  gap: 3rem 5rem;
  flex-wrap: wrap;
  justify-content: center;
  font-size: 1.25rem;
  @include breakpoint-down(md) {
    justify-content: center;
    & > * {
      min-width: 300px;
    }
  }
}
ul {
  list-style-type: none;
  list-style: none;
  margin: 0;
  padding: 0;
}
a {
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
}
</style>
