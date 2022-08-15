<template>
  <v-container class="d-flex justify-center flex-wrap gap">
    <v-card v-for="favorite in favorites" :key="favorite.LocationCode" class="card text-center">
      <v-card-title class="justify-center">
        {{ day.LocationName }}
      </v-card-title>
      <v-card-subtitle class="justify-center pa-4">
        {{ favorite.WeatherText }}
      </v-card-subtitle>
      <v-card-text class="pa-2">{{ day.Temperature.Maximum.Value }}&#8451;</v-card-text>
      <v-card-actions class="flex-column justify-center gap">
        <v-btn @click.stop="removeFromFavorites(day.Id)" color="error" class="text-center">Remove</v-btn>
        <v-btn color="primary" @click="forecastLocation(day.LocationCode[0], day.LocationName)">Week forecast</v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
export default {
  computed: {
    favorites() {
      return this.$store.getters.favorites;
    },
  },
};
</script>

<style></style>
