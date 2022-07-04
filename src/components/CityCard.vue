<template>
  <!-- <div class="city-card">
    <v-card v-for="location in favorites" :key="location.EpochDate">
      <v-card-title>{{ location.LocationName }}</v-card-title>
      <v-card-subtitle>{{ location.Day.IconPhrase }}</v-card-subtitle>
      <v-card-text>
        {{ location.Temperature.Minimum.Value }}&#8451; -
        {{ location.Temperature.Maximum.Value }}&#8451;
      </v-card-text>
    </v-card>
  </div> -->

  <v-container
    class="d-flex justify-center flex-wrap gap"
    :class="{ 'justify-space-between': $vuetify.breakpoint.mdAndUp }"
  >
    <v-card
      v-for="location in favorites"
      :key="location.EpochDate"
      class="card text-center"
    >
      <v-card-title class="justify-center">ha</v-card-title>
      <v-card-subtitle class="justify-center pa-4">
        {{ location.Day.IconPhrase }}
      </v-card-subtitle>
      <v-card-text class="pa-2">
        {{ location.Temperature.Maximum.Value }}&#8451;
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  props: {
    location: {
      type: Object,
      default: null,
      require: false,
    },
  },
  computed: {
    favorites() {
      return this.$store.getters.favorites;
    },
  },
};
</script>

<style lang="scss" scoped>
.city-card {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
}
</style>
