<template>
  <Profile />
  <!-- <StripeCheckout /> -->
  <b-form @submit="onSubmit" @reset="onReset">
    <b-row>
      <b-col>
        <b-form-group
          id="amount"
          label="Donation Amount"
          label-for="imput-donation"
        >
          <b-form-input
            v-model="form.amount"
            id="input-donation"
            type="number"
            placeholder="$0.00"
            required
          />
        </b-form-group>

        <b-form-group
          id="card-number"
          label="Card number"
          label-for="imput-card-number"
        >
          <b-form-input
            v-model="form.card"
            id="input-card-number"
            type="number"
            placeholder="1234 1234 1234 1234"
            required
          />
        </b-form-group>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-form-group
          id="expiry"
          label="Expiry"
          label-for="imput-expiry"
        >
          <b-form-input
            v-model="form.expiry"
            id="input-expiry"
            type="number"
            placeholder="MM/YY"
            required
          />
        </b-form-group>

        <b-form-group
          id="country"
          label="Country"
          label-for="imput-country"
        >
          <b-form-select
            v-model="form.country"
            :options="countries"
          />
        </b-form-group>
      </b-col>
      <b-col>
        <b-form-group
          id="cvc"
          label="CVC"
          label-for="imput-cvc"
        >
          <b-form-input
            v-model="form.cvc"
            id="input-cvc"
            type="number"
            placeholder="CVC"
            required
          />
        </b-form-group>

        <b-form-group
          id="zip"
          label="Postal code"
          label-for="imput-zip"
        >
          <b-form-input
            v-model="form.zip"
            id="input-zip"
            type="number"
            placeholder="90210"
            required
          />
        </b-form-group>
      </b-col>
    </b-row>
  </b-form>
  <b-row>
    <b-button size="large" variant="primary">Donate today</b-button>
    <!--
    <Icon>Powered by Stripe</Icon>
    -->
  </b-row>
</template>

<script>
import { StripeCheckout } from '@vue-stripe/vue-stripe';
import Profile from '@/components/Profile.vue';

const countries = [
  { value: 'US', text: 'United States' },
];

export default {
  components: {
    Profile,
    // StripeCheckout,
  },

  data: () => ({
    countries,
    form: {
      amount: 0,
      card: '',
      expiry: '',
      cvc: '',
      country: 'US',
      zip: '',
    },
  }),

  created() {
    console.log(this.id);
    // this.store.homie.get();
  },

  methods: {
    onReset() {
      // TODO:
    },

    onSubmit() {
      // TODO:
    }
  }
}
</script>

<style lang="scss">
  h1 {
    font-weight: 700;
  }

  .btn {
    margin-top: 24px;

    .btn-content {
      display: block;
    }
  }

  .b-avatar {
    background-color: #D9D9D9;
  }
</style>