import errorHandler from '../helpers/errorHandler';

export default {
  hideError({ dispatch }) {
    dispatch('error/setErrorMessages', { errorMessages: [] }, { root: true });
    dispatch(
      'error/setErrorMessageVisibility',
      { errorMessageVisibility: false },
      { root: true },
    );
  },
  showError({ dispatch }, { error, handler = errorHandler, messages = [] }) {
    dispatch(
      'error/setErrorMessages',
      { errorMessages: error ? handler(error) : messages },
      { root: true },
    );
    dispatch(
      'error/setErrorMessageVisibility',
      { errorMessageVisibility: true },
      { root: true },
    );
  },
};
