<template>
  <v-app>
    <v-main>
      <slot>
        <router-view />
      </slot>
    </v-main>
    <error-notification />
  </v-app>
</template>

<script src="./model.js"></script>
<style lang="sass" src="./style.sass" scoped></style>
