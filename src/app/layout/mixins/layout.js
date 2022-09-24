import is from 'is_js';

const lightTheme = 'theme--light';
const darkTheme = 'theme--dark';

export default {
  mounted() {
    const { className } = this.$el;
    document.body.classList.add('v-application');
    if (className.includes(lightTheme)) {
      document.body.classList.add(lightTheme);
    }
    if (className.includes(darkTheme)) {
      document.body.classList.add(darkTheme);
    }
    if (is.ios()) {
      document.body.classList.add('ios');
    }
    document.body.style.display = 'block';
    this.$el.classList.remove(lightTheme);
    this.$el.classList.remove(darkTheme);
  },
  destroyed() {
    document.body.classList.remove('v-application');
    document.body.classList.remove(lightTheme);
    document.body.classList.remove(darkTheme);
    document.body.classList.remove('ios');
    document.body.style.display = '';
  },
};
