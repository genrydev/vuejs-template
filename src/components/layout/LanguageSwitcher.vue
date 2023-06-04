<template>
  <button
    v-for="sLocale in supportedLocales"
    :key="`locale-${sLocale}`"
    type="button"
    class="btn btn-sm btn-outline-secondary text-uppercase me-1"
    @click="switchLanguage(sLocale)"
  >
    {{ sLocale }}
  </button>
</template>

<script setup>
import { useRouter } from 'vue-router'
import Tr from '@/i18n/translation'

const supportedLocales = Tr.supportedLocales
const router = useRouter()

const switchLanguage = async (value) => {
  const newLocale = value
  await Tr.switchLanguage(newLocale)
  try {
    await router.replace({ params: { locale: newLocale } })
  } catch (e) {
    console.log(e)
    router.push('/')
  }
}
</script>
