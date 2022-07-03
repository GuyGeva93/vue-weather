<template>
  <div class="card">
    <v-card outlined>
      <v-card-title>{{ location.LocationName }}</v-card-title>
      <v-card-subtitle>{{ location.Date.IconPhrase }}</v-card-subtitle>
      <v-card-text>
        {{ location.Temperature.Minimum.Value }}&#8451; -
        {{ location.Temperature.Maximum.Value }}&#8451;
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  props: {
    location: {
      type: Object,
      default: null,
      require: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
}
</style>
