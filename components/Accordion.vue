<template>
  <div class="accordion">
    <div class="accordion__header" role="button" @click="toggleAccordion">
      <span class="title">{{ props.title }}</span>
      <span class="indicator">{{ isOpen ? '–' : '+' }}</span>
    </div>
    <div :class="`accordion__content ${isOpen ? 'open' : ''}`">
      <div class="inner">
        <slot />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
interface PropsInterface {
  title: string
}

const props = withDefaults(defineProps<PropsInterface>(), {
  title: '',
})

const isOpen = ref(false)

const toggleAccordion = () => {
  isOpen.value = !isOpen.value
}
</script>

<style lang="scss" scoped>
.accordion {
  width: 100%;

  &__header {
    cursor: pointer;
    padding: 1rem calc(50px + 1rem) 1rem 2.5rem;
    font-size: 1.1rem;
    background-color: #000;
    border-radius: 18px;
    font-weight: 600;
    border: 1px solid var(--color-primary-600);
    position: relative;
    display: flex;
    justify-content: space-between;
    z-index: 1;
    color: #fff;

    .indicator {
      position: absolute;
      width: 50px;
      right: 0;
      top: 50%;
      line-height: 0;
      font-size: 1.5rem;
    }
  }

  &__content {
    padding: 0 2.5rem;
    border: 1px solid #000;
    border-top: none;
    border-radius: 0 0 18px 18px;
    height: 0;
    transition: all 0.25s ease-out;
    position: relative;
    top: -18px;
    background-color: rgba(0, 0, 0, 0.03);
    display: grid;
    grid-template-rows: 0fr;
    overflow: hidden;
    height: auto;

    &.open {
      grid-template-rows: 1fr;
      padding: calc(3rem + 18px) 2.5rem;
    }

    .inner {
      overflow: hidden;
    }
  }
}
</style>
