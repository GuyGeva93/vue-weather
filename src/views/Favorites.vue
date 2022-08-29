<template>
  <v-container v-if="favorites.length">
    <v-sheet height="200" class="justify-center text-center header-display">My Favorites Places</v-sheet>
    <FavoriteForecast />
  </v-container>
  <v-container v-else class="text-center">
    <v-sheet height="200" class="text-center header-display">No favorites yet!</v-sheet>
  </v-container>
</template>

<script>
  import FavoriteForecast from '@/components/FavoriteForecast.vue';
export default {
  components: { FavoriteForecast },
  computed: {
    favorites() {
      return this.$store.getters.favorites;
    },
  },
};
</script>

<style lang="scss" scoped>
.cards-container {
  display: flex;
  flex-direction: row;
}
</style>
