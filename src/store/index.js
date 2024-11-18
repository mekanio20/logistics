import { createStore } from 'vuex';

const store = createStore({
  state: {
    isDarkMode: JSON.parse(localStorage.getItem('isDarkMode')) || false,
  },
  mutations: {
    toggleDarkMode(state) {
      state.isDarkMode = !state.isDarkMode;
      localStorage.setItem('isDarkMode', state.isDarkMode);
    },
  },
  getters: {
    isDarkMode: (state) => state.isDarkMode,
  },
});

export default store;
