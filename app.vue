<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
useHead({
  titleTemplate: (page) => {
    return page
      ? `${page} | Kirpputori Jämsä - Menneen Tuulahdus',`
      : 'Kirpputori Jämsä - Menneen Tuulahdus'
  },
  htmlAttrs: {
    lang: 'fi',
  },
  title: '',
  meta: [
    {
      name: 'description',
      content:
        'Lämminhenkinen Kirpputori Jämsässä. Tervetuloa myymään ja tekemään loistavia löytöjä. Saatavilla myös prosenttimyynti 50/50 -palvelulla.',
    },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://menneentuulahdus.fi' },
    { property: 'og:title', content: 'Kirpputori Jämsä - Menneen tuulahdus' },
    {
      property: 'og:description',
      content:
        'Lämminhenkinen Kirpputori Jämsässä. Tervetuloa myymään ja tekemään loistavia löytöjä. Saatavilla myös prosenttimyynti 50/50 -palvelulla.',
    },
    {
      property: 'og:image',
      content: 'https://menneentuulahdus.fi/og-image-min.png',
    },

    { property: 'twitter:card', content: 'summary_large_image' },
    { property: 'twitter:url', content: 'https://menneentuulahdus.fi' },
    {
      property: 'twitter:title',
      content: 'Kirpputori Jämsä - Menneen tuulahdus',
    },
    {
      property: 'twitter:description',
      content:
        'Lämminhenkinen Kirpputori Jämsässä. Tervetuloa myymään ja tekemään loistavia löytöjä. Saatavilla myös prosenttimyynti 50/50 -palvelulla.',
    },
    {
      property: 'twitter:image',
      content: 'https://menneentuulahdus.fi/og-image-min.png',
    },
  ],
})
</script>
