<template>
  <v-container>
    <CitySearch />
    <v-row>
      <v-col cols="12" md="4"><h2>Tel Aviv</h2></v-col>
      <v-spacer md="4"></v-spacer>
      <v-col cols="12" md="4" class="d-flex justify-end"
        ><h2>Add To Favorites</h2></v-col
      >
    </v-row>
    <v-sheet
      height="200px"
      class="d-flex justify-center align-center forecast-header">
      Sunny
    </v-sheet>
    <CityForecast :telaviv="telaviv" />
  </v-container>
</template>

<script>
import CitySearch from '../components/CitySearch.vue';
import CityForecast from '@/components/CityForecast.vue';
import { weatherService } from '@/services/weather-service';
import { storageService } from '@/services/storage-service';
export default {
  name: 'Home',
  components: { CitySearch, CityForecast },
  async created() {
    // weatherService.getCurrentWeather();
    // this.telaviv = await weatherService.getFiveDayForecast();
    // storageService.saveToStorage('telaviv', this.telaviv);
    this.telaviv = storageService.loadFromStorage('telaviv');
  },
  data() {
    return {
      telaviv: null,
      items: null,
    };
  },
};
</script>

<style lang="scss" scoped>
.city-search {
  border: 1px solid;
}
.forecast-header {
  font-size: 50px;
}
</style>
