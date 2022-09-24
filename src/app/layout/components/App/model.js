export default {
  name: 'app',
  metaInfo: {
    titleTemplate(titleChunk) {
      const siteTitle = 'GP Ranking';
      return titleChunk ? `${titleChunk} - ${siteTitle}` : siteTitle;
    },
  },
};
