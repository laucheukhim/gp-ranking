import error from './error/store';

const modules = {
  error,
};

const actions = {
  cleanUp({ dispatch }, options) {
    Object.keys(modules).forEach(key => {
      dispatch(`${key}/cleanUp`, options);
    });
  },
};

export default {
  actions,
  modules,
};
