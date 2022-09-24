<template>
  <v-container>
    <v-row>
      <v-col cols="8">
        <v-text-field
          v-model="postcode"
          :label="$t('postcode')"
          :rules="postcodeRules"
        />
      </v-col>
      <v-col cols="2">
        <v-text-field
          v-model="distance"
          :label="$t('distance')"
          type="number"
        />
      </v-col>
      <v-col cols="2" class="d-flex">
        <v-btn
          :loading="loading"
          class="search-button align-self-center"
          @click="search"
          >{{ $t('search') }}</v-btn
        >
      </v-col>
    </v-row>
    <template v-if="practicesInsideCatchmentArea.length">
      <v-subheader>{{
        $tc('insideCatchmentArea', practicesInsideCatchmentArea.length, {
          count: practicesInsideCatchmentArea.length,
        })
      }}</v-subheader>
      <practice-list :practices="practicesInsideCatchmentArea" />
    </template>
    <template v-if="practicesOutsideCatchmentArea.length">
      <v-subheader>{{
        $tc('outsideCatchmentArea', practicesOutsideCatchmentArea.length, {
          count: practicesOutsideCatchmentArea.length,
        })
      }}</v-subheader>
      <practice-list :practices="practicesOutsideCatchmentArea" />
    </template>
  </v-container>
</template>

<script src="./model.js"></script>
<style lang="sass" src="./style.sass" scoped></style>
