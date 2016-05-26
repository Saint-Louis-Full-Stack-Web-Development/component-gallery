<template>
    <div class="container">
    <h1>Component Gallery</h1>
      <p>
        <a class='btn btn-primary' v-link="{ path: '/punchlist' }">Punchlist</a>
        <a class='btn btn-primary' v-link="{ path: '/todos' }">Todos</a>
        <a class='btn btn-primary' v-link="{ path: '/mapper' }">Mapper</a>
        <!-- 
        <a v-link="{ path: '/placemapper' }">PlaceMapper</a>
         -->
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
    .v-link-active {
      border-color: red!important;
    }
</style>
