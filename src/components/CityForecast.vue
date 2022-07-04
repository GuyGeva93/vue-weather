<template>
  <v-container class="d-flex justify-space-between">
    <v-card
      v-for="day in locationWeather"
      :key="day.EpochDate"
      class="card text-center"
    >
      <v-card-title class="justify-center">{{ getDay(day.Date) }}</v-card-title>
      <v-card-subtitle class="justify-center pa-4">{{ day.Day.IconPhrase }}</v-card-subtitle>
      <v-card-text class="pa-2">{{ day.Temperature.Maximum.Value }}&#8451;</v-card-text>
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
  },
  methods: {
    getDay(date) {
      const week = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
      ];
      const day = new Date(date);
      return week[day.getDay()];
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  width: 150px;
  height: 150px;
}
</style>
>
