import { http, mutateState } from '@/utils';
// import { watch } from 'vue';
import { Module } from 'vuex';

interface HomieStore {
  name: string,
  description: string,
}

const store: Module<HomieStore, unknown> = {
  namespaced: true,
  state() {
    return {
      name: '',
      description: 'description'
    };
  },

  mutations: {
    mutateState(state, payload) {
      mutateState(state, payload);
    }
  },

  actions: {
    // loginPassword(context, payload: AnyObject) {
    //   return new Promise((resolve, reject) => {
    //     const { data, error } = loginPassword(payload);
    //     watch(data, () => {
    //       context.commit('mutateState', data.value);
    //       useCookies().set(VITE_TOKEN_KEY as string, data.value.token, {
    //         path: '/'
    //       });
    //       resolve(data.value);
    //     });

    //     watch(error, () => {
    //       reject(error.value);
    //     });
    //   });
    // },
    // userGet(context, payload: AnyObject) {
    //   return new Promise((resolve, reject) => {
    //     const { data, error } = userGet(payload);
    //     watch(data, () => {
    //       context.commit('mutateState', { user: data.value });
    //       resolve(data.value);
    //     });

    //     watch(error, () => {
    //       reject(error.value);
    //     });
    //   });
    // },
    // userLogout() {
    //   return new Promise((resolve) => {
    //     useCookies().remove(VITE_TOKEN_KEY as string, { path: '/' });
    //     window.location.href = '/';
    //     resolve('退出成功');
    //   });
    // }
  }
};

export default store;
