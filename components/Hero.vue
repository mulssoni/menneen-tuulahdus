<template>
  <div class="hero">
    <div class="hero__container">
      <div class="hero__content">
        <h1 class="hero__title">Menneen Tuulahdus</h1>
        <p class="hero__text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          voluptates, quod, quia, voluptate quae voluptatem quibusdam
          exercitationem quidem voluptatum quas quos.
        </p>
        <div class="hero__buttons">
          <button class="button--primary">Hae pöytää</button>
        </div>
      </div>
      <div class="hero__image">
        <img
          src="~/assets/images/menneen-tuulahdus-hero.jpeg"
          alt="placeholder"
        />
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
    display: flex;
    height: auto;
    background: url('~/assets/images/stripes.svg') no-repeat;
    background-size: cover;
    border-radius: 18px;
    overflow: hidden;
    aspect-ratio: 16 / 9;
    /* border: 1px solid #000; */
    @include breakpoint-down(md) {
      position: relative;
      box-shadow: inset 0 0 0 1px #000;
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
    padding: 4rem 3rem 3rem;

    @include breakpoint-down(md) {
      width: 100%;
      z-index: 1;
      padding: 10% var(--container-padding);
      text-align: center;
      justify-content: space-between;
      color: #fff;
      height: calc(100% - 60px);

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
    margin-bottom: 1rem;
    font-weight: 300;
    font-family: 'Montserrat', sans-serif;
    padding: 2rem 1.5rem;
    border-radius: 18px;
    overflow: hidden;
    @include breakpoint-up(md) {
      backdrop-filter: blur(3px);
      background-color: rgba(255, 255, 255, 0.7);
      box-shadow: 0 4px 3px rgba(205, 180, 219, 0.3);
    }
  }

  &__image {
    height: 100%;
    flex: 1;
    @include breakpoint-down(md) {
      border-radius: 18px 18px 26px 26px;
      overflow: hidden;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      height: calc(100% - 60px);
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
      min-height: 100%;
      object-fit: cover;
      display: block;
    }
  }

  &__buttons {
    margin: 1.5rem 0 0;
  }
}
</style>
