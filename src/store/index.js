// src/store/index.js

import { createStore } from 'vuex';

export default createStore({
  state: {
     userDetails: {
            email: '', 
            password: '',
            userState: false
        }
  },
  mutations: {
    setUserDetails(state, payload) {
        console.log("valueCheck", payload)
      state.userDetails.email = payload.email;
      state.userDetails.password = payload.password;
    }
  },
  actions: {
    fetchUserDetails({ commit }, val) {
      console.log("Action Check", val)
      commit('setUserDetails', val);
    }
  },
  getters: {
    getUserDetails: (state) => state.userDetails
  }
});
