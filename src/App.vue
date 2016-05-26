<template>
    <div class="container">
    <h1>Hello App!</h1>
      <p>
        <a v-link="{ path: '/punchlist' }">Punchlist</a>
        <a v-link="{ path: '/todos' }">Todos</a>
        <a v-link="{ path: '/mapper' }">Mapper</a>
        <a v-link="{ path: '/placemapper' }">PlaceMapper</a>
      </p>
      <router-view transition="slide" transition-mode="out-in" :google-maps-api-key="googleMapsApiKey"></router-view>
  </div>
</template>

<script>
import keys from './keys.js'

export default {
    data () {
        return {
          'googleMapsApiKey' : keys.gooleMapsApiKey
        }
    }
}
</script>

<style lang="sass">
    @import "main.scss";

    .specialclass{
      background-color:red;
    }
    body {
      font-family: Helvetica, sans-serif;
    }
</style>
