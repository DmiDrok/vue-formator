import { createStore } from 'vuex';


const store = createStore({
  state() {
    return {
      showPopup: false,
    }
  },

  mutations: {
    setPopupActive(state) {
      state.showPopup = true;
    },

    setPopupHide(state) {
      state.showPopup = false;
    }
  }
});

export default store;
