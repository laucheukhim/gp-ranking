<template>
  <plain-layout>
    <v-container class="fill-height" fluid>
      <v-row class="flex-column" align="center" justify="center" no-gutters>
        <router-view />
      </v-row>
    </v-container>
  </plain-layout>
</template>

<script src="./model.js"></script>
<style lang="sass" src="./style.sass" scoped></style>
