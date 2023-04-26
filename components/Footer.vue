<template>
  <footer class="footer">
    <div class="footer__barcode">
      <img src="~/assets/images/barcode.svg" alt="barcode" />
      <ul>
        <li>Teollisuuskatu 7, Jämsä</li>
        <li>
          <a href="mailto:info@menneentuulahdus.fi">info@menneentuulahdus.fi</a>
        </li>
        <li><a href="tel:+358 40 704 4697">040 704 4697</a></li>
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
    <div class="footer__socials">
      <a
        href="https://www.facebook.com/profile.php?id=100068307363115"
        target="_blank"
      >
        <img src="/icons/square-facebook.svg" alt="facebook" />
      </a>
      <a href="https://www.instagram.com/menneentuulahdus/" target="_blank">
        <img src="/icons/square-instagram.svg" alt="instagram" />
      </a>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
.footer {
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  margin-top: 10rem;
  padding: 5rem 0rem;
  gap: 2rem;

  @include breakpoint-down(md) {
    flex-direction: column;
    align-items: center;
    gap: 3rem;
  }

  &__barcode {
    display: flex;
    flex-direction: column;
    row-gap: 0.5rem;
    img {
      width: 300px;
      height: auto;
    }
  }

  &__hours {
    min-width: 300px;
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
    display: flex;
    align-items: flex-start;
    gap: 1rem;

    img {
      width: 30px;
      height: auto;
      max-height: 30px;
    }
  }

  a {
    text-decoration: none;
  }
}
</style>
