import slug from 'slug';
import messages from './messages';

export default {
  name: 'practice-list',
  props: {
    practices: Array,
  },
  i18n: {
    messages,
  },
  methods: {
    nhsURL(practice) {
      return `https://www.nhs.uk/services/gp-surgery/${slug(
        practice.practiceName,
      )}/${practice.practiceCode}`;
    },
    color(practice) {
      return `hsl(${(practice.score * 120).toString(10)},90%,70%)`;
    },
    surveyURL(practice) {
      return `https://www.gp-patient.co.uk/patientexperiences?practicecode=${practice.practiceCode}`;
    },
    score(practice) {
      return `${(practice.score * 100).toFixed(0)}%`;
    },
    title(practice) {
      return practice.practiceName
        .toLowerCase()
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
    },
    subtitle(practice) {
      return this.$t('distance', {
        distance: (practice.distance / 1000).toFixed(2),
      });
    },
    catchmentURL(practice) {
      return `https://www.primarycare.nhs.uk/publicfn/catchment.aspx?${new URLSearchParams(
        {
          oc: practice.practiceCode,
          h: 400,
          w: 600,
        },
      ).toString()}`;
    },
  },
};
