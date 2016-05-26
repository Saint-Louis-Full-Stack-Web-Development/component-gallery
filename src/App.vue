<template>
    <div>
    <h1>Hello App!</h1>
      <p>
        <!-- use v-link directive for navigation. -->
        <a v-link="{ path: '/todos'}">Todos</a>
        <a v-link="{ path: '/mapper' }">Mapper</a>
        <a v-link="{ path: '/placemapper' }">PlaceMapper</a>
      </p>
      <!-- route outlet -->
      <router-view></router-view>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Hello Vue!'
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
