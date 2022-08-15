<template>
  <v-container
    class="d-flex justify-center flex-wrap gap"
    :class="{
      'justify-space-between': $vuetify.breakpoint.mdAndUp,
    }"
    v-if="weekForecast"
  >
    <v-card v-for="day in weekForecast" :key="day.Id" class="card text-center">
      <v-card-title class="justify-center">
        {{ getDay(day.Date) }}
      </v-card-title>
      <v-card-subtitle class="justify-center pa-4">
        {{ day.Day.IconPhrase }}
      </v-card-subtitle>
      <v-card-text class="pa-2">{{ day.Temperature.Maximum.Value }}&#8451;</v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  methods: {
    getDay(date) {
      const week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      const day = new Date(date);
      return week[day.getDay()];
    },
    async forecastLocation(locationCode, locationName) {
      await this.$store.dispatch('fetchWeather', { locationCode, locationName });
      this.$router.push('/');
    },
  },
  computed: {
    weekForecast() {
      return this.$store.getters.currLocation;
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
