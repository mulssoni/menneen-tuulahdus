<template>
  <div class="hero">
    <div class="hero__container">
      <div class="hero__content">
        <h1 class="hero__title">Menneen Tuulahdus</h1>
        <div class="hero__text">
          <p>
            Tervetuloa kirpputorille jossa on tilaa ja valoa.<br />
            Meillä sinut otetaan ilolla vastaan!
          </p>
        </div>
        <div class="hero__buttons">
          <NuxtLink to="/varaus" class="button--secondary">
            Varaa pöytä
          </NuxtLink>
        </div>
      </div>
      <div class="hero__image">
        <img
          src="~/assets/images/menneen-tuulahdus-hero.jpeg"
          alt="placeholder"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          style="position: absolute; bottom: 0; left: 0; right: 0"
        >
          <path
            fill="var(--color-primary)"
            fill-opacity="1"
            d="M0,224L80,202.7C160,181,320,139,480,149.3C640,160,800,224,960,245.3C1120,267,1280,245,1360,234.7L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.hero {
  --content-padding: 4rem 0;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  @include breakpoint-down(md) {
    --content-padding: 0;
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
    margin-bottom: 2rem;

    @include breakpoint-up(md) {
    }
    @include breakpoint-down(md) {
      flex: 1;
    }
  }

  &__text {
    font-size: 1.25rem;
    margin-bottom: 2rem;
    font-weight: 400;
    font-family: 'Montserrat', sans-serif;
    line-height: 1.85;
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
        background-color: rgba(0, 0, 0, 0.15);
      }
    }

    img {
      width: 100%;
      height: auto;
      object-fit: cover;
      display: block;
    }
  }

  &__buttons {
    margin: 1.5rem 0 0;
    z-index: 1;
  }
}
</style>
