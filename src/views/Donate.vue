<template>
  <Profile />
  <StripeElements v-slot="{ elements }"
    v-if="stripeLoaded"
    ref="elms"
    :stripe-key="stripeKey"
    :instance-options="instanceOptions"
    :elements-options="elementsOptions"
  >
    <b-row>
      <b-col>
        <b-form-group>
          <StripeElement type="cardNumber"
            :elements="elements"
            :options="cardOptions"
          />
        </b-form-group>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <StripeElement type="cardExpiry"
          :elements="elements"
          :options="cardOptions"
        />
      </b-col>
      <b-col>
        <StripeElement type="cardCvc"
          :elements="elements"
          :options="cardOptions"
        />
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <StripeElement type="countryCode"
          :elements="elements"
          :options="addressOptions"
        />
      </b-col>
      <b-col>
        <StripeElement type="postalCode"
          :elements="elements"
          :options="addressOptions"
        />
      </b-col>
    </b-row>
  </StripeElements>

  <b-button size="large" variant="primary">Donate today</b-button>
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

  data: () => ({
    addressOptions: ref({
      mode: 'billing',
    }),

    cardOptions: ref({
      // https://stripe.com/docs/stripe.js#element-options
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
      layout: {
        // type: 'accordion',
        // defaultCollapsed: true,
        // radios: false,
      },

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
    // if (error.type === "card_error" || error.type === "validation_error") {
    //   setMessage(error.message);
    // } else {
    //   setMessage("An unexpected error occurred.");
    // }
</script>

<style lang="scss">
/**
 * The CSS shown here will not be introduced in the Quickstart guide, but shows
 * how you can use CSS to style your Element's container.
 */
.StripeElement {
  box-sizing: border-box;
  height: 40px;
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
</style>