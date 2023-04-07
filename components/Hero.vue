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
          src="https://images.ctfassets.net/yy7h14vfudc9/2KJ1OgyJXLUr3zIXczFaOb/003e2429954cbe8b5ab4158b903094bb/Dec_RPO_Email_Brochure_Tile_13861-S.png"
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
  height: calc(100vh - var(--header-height));
  @include breakpoint-down(md) {
    --content-padding: 0;
    margin-left: calc(var(--container-padding) * -0.5);
    margin-right: calc(var(--container-padding) * -0.5);
  }

  &__container {
    display: flex;
    height: 100%;
    background: url('~/assets/images/stripes.svg') no-repeat;
    background-size: cover;
    border-radius: 18px;
    overflow: hidden;
    @include breakpoint-down(md) {
      position: relative;
      justify-content: space-between;
    }
  }

  &__content {
    display: flex;
    flex-direction: column;
    width: 50%;
    padding: 4rem 5rem 3rem 3rem;

    @include breakpoint-down(md) {
      width: 100%;
      z-index: 1;
      padding: 10% var(--container-padding);
      text-align: center;
      justify-content: space-between;
      color: #fff;
      height: 90%;

      h1 {
        font-size: min(15vmin, 5.5rem);
      }
    }
  }

  &__title {
    font-size: 3.5rem;
    margin: 0;
    font-weight: 700;
    margin-bottom: 1rem;

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
    backdrop-filter: blur(3px);
    padding: 2rem 1.5rem;
    border-radius: 14px;
    background-color: rgba(255, 255, 255, 0.7);
    box-shadow: 0 4px 3px rgba(205, 180, 219, 0.3);
    overflow: hidden;
  }

  &__image {
    height: 100%;
    flex: 1;
    @include breakpoint-down(md) {
      border-radius: 14px;
      overflow: hidden;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      height: 90%;
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
    margin: 2rem 0;
  }
}
</style>
