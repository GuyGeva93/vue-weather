<template>
  <v-container v-if="favorites.length" class="d-flex text-center flex-column">
    <v-container class="d-flex flex-column">
      <h2 class="justify-center">My Favorites Places</h2>
      <div>
        <CityCard />
      </div>
    </v-container>
  </v-container>
  <v-container v-else class="text-center">
    <h2>No favorites yet!</h2>
  </v-container>
</template>

<script>
import CityCard from '@/components/CityCard.vue';
import CityDisplay from '@/components/CityDisplay.vue';
export default {
  components: { CityCard, CityDisplay },
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
>
