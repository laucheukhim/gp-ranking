export default {
  setErrorMessages({ commit }, { errorMessages }) {
    commit('setErrorMessages', { errorMessages });
  },
  setErrorMessageVisibility({ commit }, { errorMessageVisibility }) {
    commit('setErrorMessageVisibility', { errorMessageVisibility });
  },
  cleanUp() {},
};
