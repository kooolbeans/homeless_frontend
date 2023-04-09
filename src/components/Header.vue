<template>
  <b-navbar type="dark" variant="dark">
    <b-navbar-nav class="m-auto">
      <b-nav-text>{{ title }}&nbsp;</b-nav-text>
    </b-navbar-nav>
  </b-navbar>
</template>

<script>
  import { get } from 'lodash-es';

  export default {
    computed: {
      title () {
        return get(this.$store.state, 'homie.name', null);
      },
    },
  };
</script>

<style scoped="scss">

</style>