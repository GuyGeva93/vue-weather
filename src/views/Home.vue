<template>
  <v-container v-if="currLocation">
    <v-snackbar
      v-model="$store.state.snackbar.show"
      :top="true"
      :timeout="4000"
      :color="$store.state.snackbar.variant"
      :transition="'slide-y-transition'"
    >
      {{ $store.state.snackbar.message }}
    </v-snackbar>
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
    </v-row>
    <v-sheet
      height="100"
      class="d-flex justify-center align-center header-display sheet"
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

@media screen and (min-width: 960px) {
  .sheet {
    height: 200px !important;
  }
}
</style>
