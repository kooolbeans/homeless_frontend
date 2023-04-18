<template>
  <b-row no-gutters style="height:142px">
    <b-col cols="4" class="text-center">
      <b-avatar :src="image" :size="53" />
    </b-col>
    <b-col cols="8">
      <h1>{{ name }}</h1>
      {{ description }}
    </b-col>
  </b-row>
</template>

<script>
import get from 'lodash/get';
export default {
  computed: {
    name() {
      return get(this, '$store.state.homie.name', null);
    },
    description() {
      return get(this, '$store.state.homie.description', null);
    },
    image() {
      return get(this, '$store.state.homie.image', null);
    }
  },

  created() {
    console.log(this.id);
  },
};
</script>

<style lang="scss">
</style>