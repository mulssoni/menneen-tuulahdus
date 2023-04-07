<template>
  <footer class="footer">
    <div class="footer__barcode">
      <img src="~/assets/images/barcode.svg" alt="barcode" />
      <ul>
        <li>Teollisuuskatu 7, Jämsä</li>
        <li>info@menneentuulahdus.fi</li>
        <li>+358 45 153 121</li>
      </ul>
    </div>
    <div class="footer__address"></div>
    <div class="footer__menu"></div>
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
  align-items: center;
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
}
</style>
