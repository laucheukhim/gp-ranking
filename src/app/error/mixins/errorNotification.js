import { mapState } from '@/modules/vuex';
import errorHandler from '../helpers/errorHandler';

export default {
  computed: {
    ...mapState('error', {
      errorNotificationErrorMessages: {
        get: state => state.errorMessages,
        set: ['setErrorMessages', errorMessages => ({ errorMessages })],
      },
      errorNotificationErrorMessageVisibility: {
        get: state => state.errorMessageVisibility,
        set: [
          'setErrorMessageVisibility',
          errorMessageVisibility => ({ errorMessageVisibility }),
        ],
      },
    }),
  },
  methods: {
    hideError() {
      this.errorNotificationErrorMessages = [];
      this.errorNotificationErrorMessageVisibility = false;
    },
    showError({ error, handler = errorHandler, messages = [] }) {
      this.errorNotificationErrorMessages = error ? handler(error) : messages;
      this.errorNotificationErrorMessageVisibility = true;
    },
  },
};
