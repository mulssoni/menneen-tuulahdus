<template>
  <div class="hero">
    <div class="hero__container container">
      <div class="hero__content">
        <div>
          <h1 class="hero__title">Menneen Tuulahdus</h1>
          <div class="hero__lead">Tervetuloa tekemään löytöjä</div>
        </div>
        <div class="hero__text">
          <p>
            Kirpputorimme on tunnelmallinen ja viihtyisä paikka, jossa voi
            viettää mukavia hetkiä etsiessään aarteita tai myymässä omia
            tarpeettomia tavaroitaan.
          </p>
        </div>
        <div class="hero__buttons">
          <NuxtLink to="/varaus" class="button--accent">Varaa pöytä</NuxtLink>
        </div>
      </div>
      <div class="hero__image">
        <img
          src="~/assets/images/kassa_edesta_2.webp"
          alt="placeholder"
          width="626"
          height="704"
        />
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.hero {
  background-color: var(--color-primary);
  padding: 4rem 0;
  --content-padding: 4rem 0;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  @include breakpoint-down(md) {
    --content-padding: 0;
    padding: 0;
    height: calc(100vh - var(--header-height));
    margin-left: calc(var(--container-padding) * -0.5);
    margin-right: calc(var(--container-padding) * -0.5);
  }

  &__container {
    position: relative;
    display: flex;
    height: auto;
    background-size: cover;
    border-radius: 18px;
    overflow: hidden;
    aspect-ratio: 16 / 9;
    /* border: 1px solid #000; */
    @include breakpoint-down(md) {
      position: relative;
      /* box-shadow: inset 0 0 0 1px #000; */
      justify-content: space-between;
      aspect-ratio: auto;
      height: 100%;
    }
  }

  &__content {
    line-height: 1.25;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 50%;
    padding: 3rem 3rem 3rem 0;

    @include breakpoint-down(md) {
      width: 100%;
      z-index: 1;
      padding: 10% var(--container-padding);
      text-align: center;
      justify-content: space-between;
      color: #fff;
      padding: 20% 1rem;

      h1 {
        font-size: min(15vmin, 5.5rem);
      }
    }
  }

  &__title {
    font-size: clamp(3.5rem, 5vw, 4rem);
    letter-spacing: 2px;
    margin: 0;
    font-weight: 700;
    line-height: 1.1;

    @include breakpoint-down(md) {
      text-shadow: 3px 3px 5px rgba(0, 0, 0, 0.3);
      color: #fff;
    }
  }

  &__lead {
    display: none;
    align-items: center;
    padding: 1.25rem 0.5rem;
    font-weight: 400;
    font-size: 0.85rem;
    opacity: 0.85;

    @include breakpoint-down(md) {
      display: flex;
    }

    &::before,
    &::after {
      content: '';
      flex: 1;
      height: 1px;
      background-color: #fff;
      margin-left: 12px;
    }
    &::before {
      margin-left: 0;
      margin-right: 12px;
    }
  }
  &__text {
    font-size: 1.1rem;
    margin-bottom: 2rem;
    font-weight: 400;
    line-height: 1.25;

    @include breakpoint-down(md) {
      display: none;
    }
    &.blur {
      @include breakpoint-up(md) {
        padding: 2rem 1.5rem;
        backdrop-filter: blur(3px);
        background-color: rgba(255, 255, 255, 0.7);
        box-shadow: 0 4px 3px rgba(205, 180, 219, 0.3);
      }
    }
  }

  &__image {
    height: 100%;
    flex: 1;
    overflow: hidden;
    position: relative;
    border-radius: 18px;
    @include breakpoint-down(md) {
      border-radius: 18px;
      overflow: hidden;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      height: 100%;
      &::after {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        content: '';
        background-color: rgba(0, 0, 0, 0.3);
        backdrop-filter: blur(1px);
        /* background: linear-gradient(
          0deg,
          var(--color-primary) 0%,
          rgba(235, 233, 223, 0.8) 100%
        ); */
        /* backdrop-filter: contrast(200%); */
      }
    }

    img {
      width: 100%;
      height: 100%;
      display: block;
      max-height: 100%;
      object-fit: cover;
      object-position: 50% 10%;
    }
  }

  &__buttons {
    z-index: 1;
  }
}
</style>
