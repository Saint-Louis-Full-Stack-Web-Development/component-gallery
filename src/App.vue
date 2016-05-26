<template>
    <div class="container">
    <h1>Component Gallery</h1>
      <p>
        <a class='btn btn-primary' v-link="{ path: '/punchlist' }">Punchlist</a>
        <a class='btn btn-primary' v-link="{ path: '/todos' }">Todos</a>
        <a class='btn btn-primary' v-link="{ path: '/mapper' }">Mapper</a>
      </p>
      <router-view transition="expand" transition-mode="out-in" :google-maps-api-key="googleMapsApiKey"></router-view>
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

    .expand-transition {
      transition: all .3s ease;
      height: 100%;
      padding: 10px;
      overflow: hidden;
    }

    /* .expand-enter defines the starting state for entering */
    /* .expand-leave defines the ending state for leaving */
    .expand-enter, .expand-leave {
      height: 0;
      padding: 0 10px;
      opacity: 0;
    }
</style>
