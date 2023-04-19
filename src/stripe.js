import { loadStripe } from '@stripe/stripe-js'
import { defineComponent, ref, onBeforeMount } from 'vue'

const { VITE_STRIPE_KEY } = import.meta.env;

export default defineComponent({
  setup() {
    onBeforeMount(() => {
      const stripeLoaded = ref(false)
      const stripePromise = loadStripe(VITE_STRIPE_KEY)
      stripePromise.then(() => {
        stripeLoaded.value = true
      })
    })
  },
})