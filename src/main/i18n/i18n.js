import VueI18n from 'vue-i18n';

// Due to a possible Vuetify bug, most Vuetify components' lifecycle hooks are
// triggered multiple times, causing in them to be registered multiple times
// in i18n, resulting in a memory leak when they are not unregistered properly.
// The following check ensures they are only registered at most one time to
// stop the leak.
VueI18n.prototype.subscribeDataChanging = function subscribeDataChanging(vm) {
  if (this._dataListeners.has(vm) === -1) {
    this._dataListeners.add(vm);
  }
};

export default VueI18n;
