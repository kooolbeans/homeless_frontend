<template>
  <Profile />
  <StripeElements v-slot="{ elements }"
    v-if="stripeLoaded"
    ref="elms"
    :stripe-key="stripeKey"
    :instance-options="instanceOptions"
    :elements-options="elementsOptions"
  >
    <StripeElement type="payment"
      :elements="elements"
      :options="paymentOptions"
    />
    <b-form-group label="Donation" placeholder="0.00">
      <b-form-input type="number" />
    </b-form-group>
    <b-button :to="`/confirmation/${id}`" size="large" variant="primary">Donate today</b-button>
  </StripeElements>
</template>

<script>
import { loadStripe } from '@stripe/stripe-js'
import { StripeElements, StripeElement } from 'vue-stripe-js'
import { ref, onBeforeMount } from 'vue'

// eslint-disable-next-line vue/no-export-in-script-setup
export default {
  name: 'Donate',
  components: {
    StripeElements,
    StripeElement,
  },

  computed: {
    id() {
      return this.$route.params.id;
    },
  },

  data: () => ({
    clientSecret: import.meta.env.VITE_STRIPE_KEY,
    paymentOptions: ref({
      layout: 'accordion',
      spacedAccordionItems: false,
      radios: false,
      business: {
        name: 'Homeless Project',
      },
      fields: {
        billingDetails: {
          name: 'never',
          email: 'never',
          phone: 'never',
          address: {
            line1: 'never',
            line2: 'never',
            city: 'never',
            state: 'never',
            country: 'auto',
            postal_code: 'auto',
          },
        },
      },
    }),

    postalCodeOptions: ref({}),
    cardOptions: ref({
      showIcon: true,
    }),

  }),

  setup() {
    const stripeKey = ref('pk_test_TYooMQauvdEDq54NiTphI7jx');
    const instanceOptions = ref({
      appearance: {
        theme: 'stripe'
      },
    });

    const elementsOptions = ref({
      clientSecret: 'seti_1MycB52eZvKYlo2CXcvvzPOF_secret_Nk6Nw8RZqARpMJGPSBKXAKA1wSezJ4R',

      billingDetails: {
        name: 'never',
        email: 'never',
      },
    });


    const card = ref()
    const elms = ref();
    const stripeLoaded = ref(false)

    onBeforeMount(() => {
      loadStripe(stripeKey.value)
        .then(() => {
          stripeLoaded.value = true;
        });
    });

    return {
      stripeKey,
      stripeLoaded,
      instanceOptions,
      elementsOptions,
      card,
      elms,
    }
  },

  created() {
    this.$store.dispatch('homie/get', {
      id: this.$route.params.id
    })
  },

  methods: {
    pay() {
      // Get stripe element
      const cardElement = this.card.stripeElement
      // Access instance methods, e.g. createToken()
      this.elms.instance.createToken(cardElement).then((result) => {
        console.log(result)
      })
    },
  },
}
</script>

<style lang="scss">
  .StripeElement {
    box-sizing: border-box;
    min-height: 40px;
    height: auto;
    padding: 10px 12px;
    border: 1px solid transparent;
    border-radius: 4px;
    background-color: white;
    box-shadow: 0 1px 3px 0 #e6ebf1;
    -webkit-transition: box-shadow 150ms ease;
    transition: box-shadow 150ms ease;
  }

  .StripeElement--focus {
    box-shadow: 0 1px 3px 0 #cfd7df;
  }

  .StripeElement--invalid {
    border-color: #fa755a;
  }

  .StripeElement--webkit-autofill {
    background-color: #fefde5 !important;
  }

  .hide {
    display: none;
  }

  button {
    margin-top: 30px;
}
</style>