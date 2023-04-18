<template>
  <b-row>
    <b-col class="text-center">
      <img :src="code" style="margin-top:30%;"/>
    </b-col>
  </b-row>
</template>

<script>
import get from 'lodash/get';

export default {
  computed: {
    code() {
      return this.$store.state.homie.code
    },
  },

  created() {
    this.$store.dispatch('homie/code', {
      id: this.$route.params.id
    })

    // QRCode.toCanvas(this.$refs, 'sample text', function (error) {
    //   if (error) console.error(error)
    //   console.log('success!');
    // })
  },
}
</script>

<style lang="scss" scoped>
</style>