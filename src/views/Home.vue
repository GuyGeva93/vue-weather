<template>
  <v-container v-if="currLocation">
    <CitySearch />
    <v-row>
      <v-col
        cols="12"
        sm="6"
        class="d-flex"
        :class="{ 'justify-center': $vuetify.breakpoint.xsOnly }"
      >
        <h2>
          <v-icon>mdi-map-marker</v-icon>
          {{ currLocation[0].LocationName }}
        </h2>
      </v-col>
      <v-col
        cols="12"
        sm="6"
        class="d-flex justify-end"
        :class="{ 'justify-center': $vuetify.breakpoint.xsOnly }"
      >
        <v-btn @click.stop="favorites" depressed v-if="isFavorites">
          Remove From Favorites
        </v-btn>
        <v-btn @click.stop="favorites" color="primary" v-else>
          Add To Favorites
        </v-btn>
      </v-col>
      <!-- <v-spacer md="4"></v-spacer> -->
      <!-- <v-col cols="12" md="4" class="d-flex justify-end"> -->
      <!-- <v-btn @click.stop="favorites" depressed v-if="isFavorites">
          Remove From Favorites
        </v-btn>
        <v-btn @click.stop="favorites" color="primary" v-else>
          Add To Favorites
        </v-btn> -->
      <!-- </v-col> -->
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
    isFavorites() {
      return this.$store.commit('isFavorites');
    },
  },
  methods: {
    favorites() {
      this.$store.commit('addFavorite', this.currLocation[0]);
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
