import { Module } from 'vuex';
import { http, mutateState } from '@/utils';

interface Donation {
  name: string;
  currency: string;
  successUrl: string;
  cancelUrl: string;
  amount: number;
  quantity: number;
}

const store: Module<Donation, unknown> = {
  namespaced: true,

  state() {
    return {
      "name" : "" ,
      "currency" :"USD" ,
      "successUrl": "https://www.google.com/",
      "cancelUrl": "https://www.facebook.com",
      "amount": 0,
      "quantity": 0
    };
  },

  mutations: {
    mutateState(state, payload) {
      mutateState(state, payload);
    },
  },

  actions: {
    // @ts-ignore
    async donate({ commit }: any, params: any) {
      const { id } = params;

      try {
          const donations =  await http.get(`/donations/${id}`, params);
        commit('update', donations);
      } catch(error) {
        throw error;
      }
    },
  }
}

export default store
