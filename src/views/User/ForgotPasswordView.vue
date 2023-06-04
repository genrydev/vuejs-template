<template>
  <div class="d-flex flex-column text-center">
    <div class="d-flex flex-row justify-content-center">
      <div class="card col-6 col-sm-5">
        <div class="card-body">
          <h3 class="my-4">{{ $t('user.forgot_title') }}</h3>
          <form>
            <div class="mb-3">
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                :placeholder="$t('user.email_placeholder')"
              />
              <div id="emailHelp" class="form-text">
                {{ $t('user.forgot_alert') }}
              </div>
            </div>
            <button type="submit" class="btn btn-primary btn-sm text-capitalize w-100">
              {{ $t('user.submit') }}
            </button>
          </form>
        </div>
        <div class="d-flex flex-row justify-content-center mb-4">
          <p class="small fw-bold mt-2 pt-1 mb-0">
            {{ $t('user.no_account') }}
            <RouterLink :to="Tr.i18nRoute({ name: 'register' })" class="link-danger fw-bold">
              {{ $t('user.register_account') }}
            </RouterLink>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import Tr from '@/i18n/translation'
</script>
