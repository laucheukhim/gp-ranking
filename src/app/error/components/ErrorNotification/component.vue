<template>
  <v-snackbar
    :timeout="6000"
    :value="errorMessageVisibility"
    top
    right
    color="error"
    @input="errorMessageVisibility = $event"
  >
    <span class="error-messages">{{ errorMessages.join('\n') }}</span>
    <template #action="{ attrs }">
      <v-btn
        dark
        text
        v-bind="attrs"
        @click.native="errorMessageVisibility = false"
        >{{ $t('close') }}</v-btn
      >
    </template>
  </v-snackbar>
</template>

<script src="./model.js"></script>
<style lang="sass" src="./style.sass" scoped></style>
