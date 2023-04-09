<template>
  <Profile />
  <b-row>
    <b-col>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Typography

      <b-button size="large" variant="primary">Donate today</b-button>
    </b-col>
  </b-row>
</template>

<script>
import Profile from '@/components/Profile.vue';

export default {
  components: {
    Profile,
  },

  props: ['id'],
  created() {
    console.log(this.id);
    // this.store.homie.get();
  }
}
</script>

<style lang="scss">
  h1 {
    font-weight: 700;
  }

  .btn {
    margin-top: 24px;
    width: 100%;
    display: block;

    .btn-content {
      display: block;
    }
  }

  .b-avatar {
    background-color: #D9D9D9;
  }
</style>