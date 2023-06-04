<template>
  <div class="d-flex justify-content-center">
    <div class="card col-6 col-sm-12">
      <div class="card-body">
        <div class="row">
          <div class="col m-5 py-5">
            <h2 class="mb-5">{{ $t('user.company_slogan') }}</h2>
            <p>{{ $t('user.company_description') }}</p>
          </div>
          <div class="col">
            <div class="d-flex align-items-center h-100">
              <div class="d-flex flex-column">
                <img src="/src/assets/company-logo-generic.png" class="img-fluid" alt="Company Name" />
                <h1 class="display-5 text-center">app name</h1>
                <div class="d-flex flex-row justify-content-center mb-3">
                  <div class="p-2">{{ $t('user.sign_in_with') }}</div>
                  <button @click="googleLogin" type="button" class="btn btn-danger mx-1 rounded-circle" title="Google">
                    <fa icon="fa-brands fa-google" />
                  </button>
                  <button type="button" class="btn btn-primary mx-1 rounded-circle" title="Facebook">
                    <fa icon="fa-brands fa-facebook" />
                  </button>
                  <button type="button" class="btn btn-info mx-1 rounded-circle text-white" title="Twitter">
                    <fa icon="fa-brands fa-twitter" />
                  </button>
                </div>
                <div class="divider d-flex align-items-center my-3">
                  <p class="text-center fw-bold mx-3 mb-0">{{ $t('user.sign_in_or') }}</p>
                </div>
                <form>
                  <div class="mb-3">
                    <input type="email" class="form-control" :placeholder="$t('user.email_placeholder')" />
                  </div>
                  <div class="mb-3">
                    <input type="password" class="form-control" :placeholder="$t('user.password_placeholder')" />
                  </div>
                  <div class="d-flex flex-row justify-content-between">
                    <button type="submit" class="btn btn-primary btn-sm text-capitalize">
                      {{ $t('user.submit') }}
                    </button>
                    <RouterLink :to="Tr.i18nRoute({ name: 'forgotpassword' })" class="fw-bold small link-dark">
                      {{ $t('user.forgot_password') }}
                    </RouterLink>
                  </div>
                  <div class="d-flex flex-row">
                    <p class="small fw-bold mt-2 pt-1 mb-0">
                      {{ $t('user.no_account') }}
                      <RouterLink :to="Tr.i18nRoute({ name: 'register' })" class="link-danger fw-bold">
                        {{ $t('user.register_account') }}
                      </RouterLink>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import useAuthStore from '@/stores/auth'
// import { useToast } from 'vue-toastification'
import { useRouter } from 'vue-router'
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { auth } from '@/fireauth'
import Tr from '@/i18n/translation'

const authStore = useAuthStore()
const router = useRouter()
const provider = new GoogleAuthProvider()
// const toast = useToast()

const googleLogin = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result)
      const token = credential.accessToken
      // console.log(`token: ${token}`);
      const user = result.user
      authStore.userEmail = user.email
      authStore.userName = user.displayName
      authStore.userAvatar = user.photoURL
      authStore.authToken = token
      authStore.isLoggedIn = true
      router.push({ name: 'app' })
    })
    .catch((error) => {
      console.error(error)
    })
}
</script>

<style scoped></style>
