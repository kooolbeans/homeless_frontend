<template>
  <Profile />
  <b-row>
    <b-col>
      {{ description }}
      <b-button
        size="large"
        variant="primary"
        @click="navigateToPayments()"
      >
        Donate today
      </b-button>
    </b-col>
  </b-row>
</template>

<script>
import get from 'lodash/get';
import Profile from '@/components/Profile.vue';

export default {
  components: {
    Profile,
  },

  computed: {
    description: () => {
      return get(this, '$store.state.homie.description', null);
    },
  },

  props: ['id'],
  created() {
    this.$store.dispatch('homie/get', {
      id: this.$route.params.id
    })
  },

  methods: {
    navigateToPayments() {
      this.$router.push('/donate')
    }
  },
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