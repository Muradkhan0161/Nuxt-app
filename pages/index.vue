<template>
  <v-layout
    column
    justify-center
    align-center
  >
  <nuxt-link to="/user">User</nuxt-link>
  </v-layout>
</template>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'

export default {
  components: {
    Logo,
    VuetifyLogo
  }
}
</script>
