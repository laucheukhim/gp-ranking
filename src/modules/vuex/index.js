import { mapState as vuexMapState, mapGetters as vuexMapGetters } from 'vuex';

export * from 'vuex';

const mapWithGetter =
  (getter, vuexMapper) =>
  (...args) => {
    let prefix = [];
    let mappings = {};
    if (args.length === 2) {
      prefix = args[0].split('/');
      mappings = args[1];
    } else if (args.length === 1) {
      mappings = args[0];
    }
    const basicMappings = {};
    const customMappings = {};
    Object.keys(mappings).forEach(key => {
      const mapping = mappings[key];
      if (typeof mapping === 'object' && mapping !== null) {
        const customMapping = {};
        if (mapping.get) {
          customMapping.get = getter({ args, prefix, get: mapping.get });
        }
        if (mapping.set) {
          if (Array.isArray(mapping.set)) {
            customMapping.set = function set(value) {
              this.$store.dispatch(
                [
                  ...(mapping.set[2] && mapping.set[2].root ? [] : prefix),
                  mapping.set[0],
                ].join('/'),
                mapping.set[1].call(this, value),
              );
            };
          } else {
            customMapping.set = function set(value) {
              this.$store.dispatch([...prefix, mapping.set].join('/'), value);
            };
          }
        }
        customMappings[key] = customMapping;
      } else {
        basicMappings[key] = mapping;
      }
    });
    return {
      ...(prefix.length
        ? vuexMapper(prefix.join('/'), basicMappings)
        : vuexMapper(basicMappings)),
      ...customMappings,
    };
  };

export const mapState = mapWithGetter(
  ({ prefix, get }) =>
    function getterA() {
      let state = this.$store.state;
      for (let i = 0, length = prefix.length; i < length; i++) {
        state = state[prefix[i]];
      }
      return get(state);
    },
  vuexMapState,
);

export const mapGetters = mapWithGetter(
  ({ args, get }) =>
    function getterB() {
      return this.$store.getters[`${args[0]}/${get}`];
    },
  vuexMapGetters,
);
