import Vue from 'vue';
import VueI18n from './i18n';
import { getAppLocale } from './locale';

Vue.use(VueI18n);

let currentLocale = 'en';
let app;
const i18ns = [];

export const setApp = value => {
  app = value;
  app.$vuetify.lang.current = currentLocale;
};

export const createI18n = messages => {
  const i18n = new VueI18n({
    locale: currentLocale,
    fallbackLocale: 'en',
    messages,
  });
  i18ns.push(i18n);
  return i18n;
};

export const createTranslate = messages => {
  const i18n = createI18n(messages);
  return {
    t: (...args) => i18n.t(...args),
    tc: (...args) => i18n.tc(...args),
  };
};

export const setLocale = locale => {
  const localeString = locale || currentLocale;
  currentLocale = getAppLocale(localeString);
  if (app) {
    app.$vuetify.lang.current = currentLocale;
  }
  i18ns.forEach(i18n => {
    i18n.locale = currentLocale;
  });
};

setLocale();

export default createI18n();
