<template>
  <Profile v-if="id" />
  <b-row v-if="id">
    <b-col>
      {{ description }}
      <b-button
        size="large"
        variant="primary"
        :to="`/donate/${id}`"
      >
        Donate today
      </b-button>
    </b-col>
  </b-row>
</template>

<script>
import get from 'lodash/get';
import Profile from '@/components/Profile.vue';
import { http } from '@/utils';

export default {
  components: {
    Profile,
  },

  computed: {
    id() {
      return this.$store.state.homie.id
    },

    description() {
      return this.$store.state.homie.description;
    },
  },

  created() {
    if(!this.$route.params.id) {
      this.fetch();
    }
  },

  mounted() {
    console.log(this.$route)
    this.fetch();
    console.log(this.id)
  },

  methods: {
    fetch() {
      if(!!this.$route.params.id) {
      this.$store.dispatch('homie/get', {
        id: this.$route.params.id
      })
    } else {
      http.get('/homies')
        .then((homies) => {
          if(homies.length > 0) {
            const { _id: id } = homies[0];
            this.$router.push({ path: `/homie/${id}`})
          }
        })
      }
    },

    navigateToPayments() {
      console.log(`/donate/${this.id}`)
      this.$router.push({ path: `/donate/${this.id}` })
    },
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