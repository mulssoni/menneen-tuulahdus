<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__info">
        <nuxt-img src="/barcode.svg" alt="barcode" width="300" height="53" />
        <p style="margin: 0">
          Kirpputorin valikoima on monipuolinen ja vaihtelee päivittäin, joten
          jokainen vierailu tuo mukanaan uusia yllätyksiä.
        </p>
      </div>
      <div class="footer__barcode">
        <h3>Yhteystiedot</h3>
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
      <div class="footer__hours">
        <h3>Aukioloajat</h3>
        <ul>
          <li><span>Ma–Pe</span> <span>klo 10.00 – 17.00</span></li>
          <li><span>La</span> <span>klo 10.00 – 14.00</span></li>
          <li><span>Su</span> <span>suljettu</span></li>
        </ul>
      </div>
      <nav class="footer-nav">
        <menu class="footer-nav__list">
          <li
            v-for="item in navItems"
            :key="item.name"
            class="footer-nav__item"
          >
            <NuxtLink :to="item.path">{{ item.name }}</NuxtLink>
          </li>
        </menu>
      </nav>
      <div class="footer__socials">
        <a
          href="https://www.facebook.com/profile.php?id=100068307363115"
          target="_blank"
        >
          <nuxt-img
            src="/icons/square-facebook.svg"
            alt="facebook"
            width="30"
            height="30"
          />
        </a>
        <a href="https://www.instagram.com/menneentuulahdus/" target="_blank">
          <nuxt-img
            src="/icons/square-instagram.svg"
            alt="instagram"
            width="30"
            height="30"
          />
        </a>
      </div>
    </div>
  </footer>
</template>

<style lang="scss">
.footer-nav {
  grid-column: 1 / -1;

  &__list {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 2rem;
    @include breakpoint-down(md) {
      flex-direction: column;
      align-items: center;
    }
  }

  &__item {
    a {
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
.footer {
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  margin-top: 8rem;
  padding: 5rem 0rem 3rem;

  & > .container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 4rem 3rem;

    /* & > * {
      flex: 1;
    } */

    @include breakpoint-down(md) {
      grid-template-columns: minmax(300px, 400px);
      justify-content: center;
      gap: 3rem;
    }
  }

  &__barcode {
    display: flex;
    flex-direction: column;
    @include breakpoint-up(md) {
      align-items: center;
      text-align: center;
    }
    img {
      width: 300px;
      height: auto;
    }
    a {
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }
  }

  &__hours {
    h3 {
      margin-top: 0;
      text-align: left;
    }
    ul {
      li {
        display: flex;
        justify-content: space-between;
        column-gap: 2rem;
      }
    }
  }

  &__socials {
    grid-column: 1 / -1;
    display: flex;
    justify-content: center;
    gap: 1rem;

    img {
      width: 30px;
      height: auto;
      max-height: 30px;
    }
  }
}
</style>
