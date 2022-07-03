<template>
  <v-container v-if="currLocation">
    <CitySearch />
    <v-row>
      <v-col cols="12" md="4">
        <h2>{{ currLocation[0].LocationName }}</h2>
      </v-col>
      <v-spacer md="4"></v-spacer>
      <v-col cols="12" md="4" class="d-flex justify-end">
        <h2>Add To Favorites</h2>
      </v-col>
    </v-row>
    <v-sheet
      height="200px"
      class="d-flex justify-center align-center forecast-header"
    >
      {{ currLocation[0].Day.IconPhrase }}
    </v-sheet>
    <CityForecast :locationWeather="currLocation" />
  </v-container>
</template>

<script>
import CitySearch from '../components/CitySearch.vue';
import CityForecast from '@/components/CityForecast.vue';
export default {
  name: 'Home',
  components: { CitySearch, CityForecast },
  async created() {
    await this.$store.dispatch('fetchWeather', {
      locationCode: null,
      locationName: null,
    });
  },
  data() {
    return {
      defLocation: null,
      items: null,
    };
  },
  computed: {
    currLocation() {
      return this.$store.getters.currLocation;
    },
    locationName() {
      return this.$store.getters.locationName;
    },
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
