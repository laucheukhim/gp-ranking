import ErrorNotification from '@/app/error/components/ErrorNotification';
import layout from '../../mixins/layout';

export default {
  name: 'plan-layout',
  mixins: [layout],
  components: {
    ErrorNotification,
  },
};
