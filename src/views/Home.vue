<template>
  <v-container v-if="currLocation">
    <CitySearch />
    <v-row>
      <v-col cols="12" sm="6" class="d-flex" :class="{ 'justify-center': $vuetify.breakpoint.xsOnly }">
        <h2>
          <v-icon>mdi-map-marker</v-icon>
          {{ currLocation[0].LocationName }}
        </h2>
      </v-col>
      <v-col cols="12" sm="6" class="d-flex justify-end" :class="{ 'justify-center': $vuetify.breakpoint.xsOnly }">
        <v-btn depressed v-if="isFavorite" :disabled="isFavorite">Location on favorites!</v-btn>
        <v-btn @click.stop="toggleFavorites" color="primary" v-else>Add To Favorites</v-btn>
      </v-col>
    </v-row>
    <v-sheet height="200" class="d-flex justify-center align-center header-display text-center">
      {{ currLocation[0].Day.IconPhrase }}
    </v-sheet>

    <CityForecast />
  </v-container>
</template>

<script>
import CitySearch from '../components/CitySearch.vue';
import CityForecast from '@/components/CityForecast.vue';
export default {
  name: 'Home',
  components: { CitySearch, CityForecast },
  async created() {
    if (!this.currLocation)
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
    isFavorite() {
      return this.$store.getters.isFavorite;
    },
  },
  methods: {
    toggleFavorites() {
      this.$store.dispatch('toggleFavorite', {
        locationCode: this.currLocation[0].LocationCode,
        locationName: this.currLocation[0].LocationName,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.city-search {
  border: 1px solid;
}
</style>
