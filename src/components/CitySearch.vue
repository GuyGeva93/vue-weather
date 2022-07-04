<template>
  <v-row>
    <v-spacer></v-spacer>
    <v-col cols="12" sm="6" md="4">
      <v-autocomplete
        @keydown="isLoading = true"
        @blur="isLoading = false"
        v-model="query"
        v-debounce="search"
        :loading="isLoading"
        :label="'Search for a place..'"
        :items="items"
      ></v-autocomplete>
    </v-col>
    <v-spacer></v-spacer>
  </v-row>
</template>

<script>
import { weatherService } from '@/services/weather-service';
export default {
  data() {
    return {
      locations: null,
      items: null,
      isLoading: false,
      query: null,
    };
  },
  methods: {
    async search(query) {
      if (!query) return;
      this.locations = await weatherService.autoComplete(query);
      this.items = this.locations.map((city) => {
        const item = {
          text: Object.values(city),
          value: Object.keys(city),
        };
        return item;
      });
      this.isLoading = false;
    },
  },
  watch: {
    async query(locationCode) {
      if (!this.query) return;
      const location = this.items.find((item) => {
        if (item.value === this.query) {
          return item.text;
        }
      });
      await this.$store.dispatch('fetchWeather', {
        locationCode,
        locationName: location.text[0],
      });
      this.isLoading = false;
    },
  },
};
</script>

<style></style>
