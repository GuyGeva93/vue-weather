<template>
	<v-container class="d-flex justify-space-between">
		<v-card v-for="day in fiveDayForecast" :key="day.EpochDate">
			<v-card-title>{{ day.Date }}</v-card-title>
			<v-card-sub-title>{{ day.value }}</v-card-sub-title>
		</v-card>
	</v-container>
</template>

<script>
export default {
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
};
</script>

<style>
</style>