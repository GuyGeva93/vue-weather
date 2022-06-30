<template>
  <v-row>
    <v-spacer></v-spacer>
    <v-col>
      <v-autocomplete
        v-model="query"
        v-debounce="search"
        :loading="isLoading"
        :label="'Search for a place..'"
        :items="items"></v-autocomplete>
    </v-col>
    <v-spacer></v-spacer>
  </v-row>
</template>

<script>
import { weatherService } from '@/services/weather-service';
export default {
  data() {
    return {
      cities: null,
      items: null,
      isLoading: false,
      query: null,
    };
  },
  methods: {
    async search(query) {
      this.cities = await weatherService.autoComplete(query);
      this.items = this.cities.map((city) => {
        const item = {
          text: Object.keys(city),
          value: Object.values(city),
        };
        return item;
      });
      // this.items = this.cities.map((city) => {
      //   return city.cityName;
      // });
      this.isLoading = false;
    },
    async getWeather() {
      console.log('getWeather', this.query);
      console.log('cityCode', cityCode);
    },
  },
  // watch: {
  //   query(val) {

  // 	},
  // },
};
</script>

<style></style>
