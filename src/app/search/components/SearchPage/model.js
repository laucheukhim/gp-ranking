import practices from '@/modules/practices';
import { checkPostcode, checkBoundary } from '@/modules/catchment';
import loading from '@/app/common/mixins/loading';
import errorNotification from '@/app/error/mixins/errorNotification.js';
import PracticeList from '../PracticeList';
import messages from './messages';

export default {
  name: 'search-page',
  mixins: [loading, errorNotification],
  i18n: {
    messages,
  },
  components: {
    PracticeList,
  },
  data() {
    return {
      postcode: '',
      distance: 10,
      practicesInTheArea: [],
    };
  },
  computed: {
    postcodeRules() {
      return [
        value =>
          new RegExp('^[A-Z]{1,2}[0-9]{1,2}[A-Z]?[0-9][A-Z]{2}$').test(
            this.normalizePostcode(value),
          ),
      ];
    },
    distanceInMeters() {
      return this.distance * 1000;
    },
    practicesInsideCatchmentArea() {
      return this.practicesInTheArea.filter(practice => practice.catchment);
    },
    practicesOutsideCatchmentArea() {
      return this.practicesInTheArea.filter(practice => !practice.catchment);
    },
  },
  methods: {
    normalizePostcode(value) {
      return value.replace(/\s+/g, '').toUpperCase();
    },
    search() {
      if (
        this.postcode.length &&
        this.postcodeRules.every(postcodeRule => postcodeRule(this.postcode))
      ) {
        this.withLoading(async () => {
          const result = await checkPostcode(
            this.normalizePostcode(this.postcode),
          );
          if (result.status === 'match') {
            const { latitude, longitude } = result.data;
            practices.forEach(practice => {
              const { distance, catchment } = checkBoundary(
                practice.geoJsonFeature,
                latitude,
                longitude,
              );
              practice.distance = distance;
              practice.catchment = catchment;
            });
            this.practicesInTheArea = practices
              .filter(practice => practice.distance <= this.distanceInMeters)
              .sort((a, b) => b.score - a.score);
          } else {
            this.showError({ messages: [this.$t('invalidPostcode')] });
          }
        });
      }
    },
  },
};
