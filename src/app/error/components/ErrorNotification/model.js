import { mapState } from '@/modules/vuex';
import messages from './messages';

export default {
  name: 'error-notification',
  i18n: {
    messages,
  },
  computed: {
    ...mapState('error', {
      errorMessages: {
        get: state => state.errorMessages,
        set: ['setErrorMessages', errorMessages => ({ errorMessages })],
      },
      errorMessageVisibility: {
        get: state => state.errorMessageVisibility,
        set: [
          'setErrorMessageVisibility',
          errorMessageVisibility => ({ errorMessageVisibility }),
        ],
      },
    }),
  },
};
