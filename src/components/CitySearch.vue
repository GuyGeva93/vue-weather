<template>
  <v-row>
    <v-spacer></v-spacer>
    <v-col>
      <v-icon></v-icon>
      <v-text-field
        v-debounce="debounce"
        hint="Enter a city name"
        placeholder="Tel Aviv"
        >mdi-magnify</v-text-field
      ></v-col
    >
    <v-spacer></v-spacer>
  </v-row>
</template>

<script>
export default {
  methods: {
    debounce() {
      console.log('Debouncing');
    },
  },
};
</script>

<style></style>
