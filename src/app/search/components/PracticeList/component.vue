<template>
  <v-list>
    <v-list-item
      v-for="(practice, i) in practices"
      :key="i"
      :href="nhsURL(practice)"
      target="_blank"
    >
      <v-list-item-action>
        <v-chip
          :color="color(practice)"
          :href="surveyURL(practice)"
          target="_blank"
          >{{ score(practice) }}</v-chip
        >
      </v-list-item-action>
      <v-list-item-content>
        <v-list-item-title>{{ title(practice) }}</v-list-item-title>
        <v-list-item-subtitle>{{ subtitle(practice) }}</v-list-item-subtitle>
      </v-list-item-content>
      <v-list-item-action>
        <v-menu offset-y left>
          <template #activator="{ on, attrs }">
            <v-btn icon v-bind="attrs" v-on="on" @click.prevent>
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item :href="catchmentURL(practice)" target="_blank">
              <v-list-item-action>
                <v-icon>mdi-map</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>{{ $t('catchment') }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-list-item-action>
    </v-list-item>
  </v-list>
</template>

<script src="./model.js"></script>
<style lang="sass" src="./style.sass" scoped></style>
