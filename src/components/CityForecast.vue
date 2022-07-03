<template>
  <v-container class="d-flex justify-space-between">
    <v-card
      v-for="day in locationWeather"
      :key="day.EpochDate"
      class="card text-center">
      <v-card-title class="justify-center">{{
        getDay(day.Date)
      }}</v-card-title>
      <v-spacer></v-spacer>
      <v-card-text>{{ day.Temperature.Maximum.Value }}&#8451;</v-card-text>
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
			const week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  		const day = new Date(date);
  		return week[day.getDay()];
		}
	},
  data() {
    return {
      fiveDayForecast: [
        {
          EpochDate: 1,
          Date: new Date('2022-07-02T07:00:00+03:00').getDay(),
          value: '30',
        },
        {
          EpochDate: 2,
          Date: new Date('2022-07-03T07:00:00+03:00').getDay(),
          value: '30',
        },
        {
          EpochDate: 3,
          Date: new Date('2022-07-04T07:00:00+03:00').getDay(),
          value: '30',
        },
        {
          EpochDate: 4,
          Date: new Date('2022-07-05T07:00:00+03:00').getDay(),
          value: '30',
        },
        {
          EpochDate: 5,
          Date: new Date('2022-07-06T07:00:00+03:00').getDay(),
          value: '30',
        },
      ],
    };
  },
	computed: {
		weather() {
			return this.data 
		}
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
