import { http, mutateState } from '@/utils';
import { Module } from 'vuex';

interface HomieStore {
  name: string,
  description: string,
  image: string,
  code: string,
}

const store: Module<HomieStore, unknown> = {
  namespaced: true,
  state() {
    return {
      id: '',
      name: '',
      description: 'description',
      image: '',
      code: '',
    };
  },

  mutations: {
    mutateState(state, payload) {
      mutateState(state, payload);
    },

    update(state, { _id: id, name, description, image_url: image }) {
      mutateState(state, {
        id,
        name,
        description,
        image,
      });
    },
  },

  actions: {
    // @ts-ignore
    async get({ commit, state }: any, params: any) {
      const { id } = params;

      if(state.id === id) {
        return;
      }

      try {
        const homie =  await http.get(`/homie/${id}`);
        commit('update', homie);
      } catch(error) {
        throw error;
      }
    },

    async code({ commit }: any, params: any) {
      const { id } = params;
      try {
        const data =  await http.get(`/qr/${id}`);
        console.log(data);
        commit('mutateState', data);
      } catch(error) {
        throw error;
      }
    },
  }
}

export default store
