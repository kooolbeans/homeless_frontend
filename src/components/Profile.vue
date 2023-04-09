<template>
  <b-row no-gutters style="height:142px">
    <b-col cols="4" class="text-center">
      <b-avatar :size="53" />
    </b-col>
    <b-col cols="8">
      <h1>Robert Miller</h1>
      Details....<br />
      Details....<br />
      Details....<br />
    </b-col>
  </b-row>
</template>

<script>
export default {
  props: ['id'],
  created() {
    console.log(this.id);
  },
};
</script>

<style lang="scss">
</style>