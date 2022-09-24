<template>
  <v-list>
    <v-list-item
      v-for="(practice, i) in practices"
      :key="i"
      :href="`https://www.gp-patient.co.uk/patientexperiences?practicecode=${practice.practiceCode}`"
      target="_blank"
    >
      <v-list-item-action>
        <v-chip
          :color="`hsl(${(practice.score * 120).toString(10)},90%,70%)`"
          >{{ `${(practice.score * 100).toFixed(2)}%` }}</v-chip
        >
      </v-list-item-action>
      <v-list-item-content>
        <v-list-item-title>{{ practice.practiceName }}</v-list-item-title>
        <v-list-item-subtitle>{{
          `${(practice.distance / 1000).toFixed(2)} km`
        }}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
  </v-list>
</template>

<script src="./model.js"></script>
<style lang="sass" src="./style.sass" scoped></style>
