import { defineStore } from 'pinia'

export default defineStore('auth', {
  state: () => ({
    userEmail: '',
    userName: '',
    userAvatar: '',
    authToken: '',
    isLoggedIn: false
  }),
  actions: {
    cleanUserData() {
      this.userEmail = ''
      this.userName = ''
      this.userAvatar = ''
      this.isLoggedIn = false
      this.authToken = ''
    }
  },
  persist: true
})
