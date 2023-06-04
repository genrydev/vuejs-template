<template>
  <nav class="navbar fixed-top navbar-expand-lg bg-body-tertiary">
    <div class="container">
      <a class="navbar-brand" href="#">Navbar</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <RouterLink :to="Tr.i18nRoute({ name: 'home' })" class="nav-link" aria-current="page">{{
              $t('nav.home')
            }}</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink :to="Tr.i18nRoute({ name: 'app' })" class="nav-link" aria-current="page">{{
              $t('nav.app')
            }}</RouterLink>
          </li>
        </ul>
        <div class="d-flex">
          <LanguageSwitcher></LanguageSwitcher>
          <button v-if="isLoggedIn" @click="logout" type="button" class="btn btn-primary btn-sm">Logout</button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import LanguageSwitcher from '@/components/layout/LanguageSwitcher.vue'
import Tr from '@/i18n/translation'
import useAuthStore from '@/stores/auth'
import { auth } from '@/fireauth'
import { signOut } from 'firebase/auth'
import { useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'

const authStore = useAuthStore()
const { isLoggedIn } = storeToRefs(authStore)
const router = useRouter()

const logout = () => {
  signOut(auth)
    .then(() => {
      authStore.cleanUserData()
      router.push('/login')
    })
    .catch((error) => {
      console.log('singout erro')
    })
}
</script>
