<template>
  <v-col class="grey--text">
    <v-container>
      <v-row justify="center">
        <v-col class="px-3" cols="auto">
          <p class="text-center text-sm-right">
            <v-icon class="icon">mdi-alert</v-icon>
          </p>
        </v-col>
        <v-col class="px-3" cols="auto">
          <h2 class="text-center text-sm-left">{{ $t('notFound') }}</h2>
          <p class="text-center text-sm-left">
            {{ $t('notFoundDescription') }}
          </p>
        </v-col>
      </v-row>
    </v-container>
  </v-col>
</template>

<script src="./model.js"></script>
<style lang="sass" src="./style.sass" scoped></style>
