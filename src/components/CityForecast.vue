<template>
  <v-container
    class="d-flex justify-center flex-wrap gap"
    :class="{
      'justify-space-between': $vuetify.breakpoint.mdAndUp && !favorites,
    }"
  >
    <v-card v-for="day in locationWeather" :key="day.Id" class="card text-center">
      <v-card-title v-if="!favorites" class="justify-center">
        {{ getDay(day.Date) }}
      </v-card-title>
      <v-card-title v-else class="justify-center">
        {{ day.LocationName }}
      </v-card-title>
      <v-card-subtitle class="justify-center pa-4">
        {{ day.Day.IconPhrase }}
      </v-card-subtitle>
      <v-card-text class="pa-2">{{ day.Temperature.Maximum.Value }}&#8451;</v-card-text>
      <v-card-actions v-if="favorites" class="flex-column justify-center gap">
        <v-btn @click.stop="removeFromFavorites(day.Id)" color="error" class="text-center">Remove</v-btn>
        <v-btn color="primary" @click="forecastLocation(day.LocationCode[0], day.LocationName)">Week forecast</v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
export default {
  props: {
    locationWeather: {
      type: Array,
      default: null,
      require: false,
    },
    favorites: {
      type: Boolean,
      default: false,
      require: false,
    },
  },
  methods: {
    getDay(date) {
      const week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      const day = new Date(date);
      return week[day.getDay()];
    },
    removeFromFavorites(locationId) {
      this.$store.commit('removeFavorite', locationId);
    },
    async forecastLocation(locationCode, locationName) {
      await this.$store.dispatch('fetchWeather', { locationCode, locationName });
      this.$router.push('/');
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  width: 200px;
}
.gap {
  gap: 10px;
}
</style>
