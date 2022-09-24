export const getAppLocale = localeString => {
  switch (true) {
    case localeString.indexOf('en') === 0:
      return 'en';
    default:
      return localeString;
  }
};
