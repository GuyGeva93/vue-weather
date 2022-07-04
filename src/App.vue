<template>
  <v-app>
    <v-main>
      <NavBar />
      <router-view />
      <Footer />
    </v-main>
  </v-app>
</template>

<script>
import NavBar from './components/NavBar.vue';
import Footer from './components/Footer.vue';
export default {
  name: 'App',
  components: { NavBar, Footer },
};
</script>
