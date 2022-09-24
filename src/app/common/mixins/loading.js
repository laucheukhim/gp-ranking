export default {
  data() {
    return {
      loading: false,
    };
  },
  watch: {
    loading() {
      this.$emit('loading', this.loading);
    },
  },
  methods: {
    async withLoading(callback, delay) {
      this.loading = true;
      try {
        if (typeof delay === 'number') {
          await new Promise(resolve => {
            setTimeout(() => {
              resolve();
            }, delay);
          });
        }
        await callback.call(this);
      } catch (error) {
        throw error;
      } finally {
        this.loading = false;
      }
    },
  },
};
