<template>
  <v-app-bar dense class="nav-drawer">
    <div class="d-flex align-center">
      <span>G-Weather</span>
    </div>
    <v-spacer></v-spacer>
    <span class="hidden-sm-and-up">
      <v-btn @click.stop="$vuetify.theme.dark = !$vuetify.theme.dark">
        <v-icon size="28">mdi-lightbulb-on-outline</v-icon>
      </v-btn>
    </span>
    <span class="hidden-sm-and-up">
      <v-btn @click.stop="drawer = !drawer" depressed>
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </span>
    <ToolBarItems />
    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
      right
      class="nav-drawer"
      :height="'50vh'"
    >
      <v-list>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          :to="item.link"
          link
        >
          <v-list-item-icon small>
            <v-icon>mdi-{{ item.icon }}</v-icon>
          </v-list-item-icon>
          {{ item.title }}
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-app-bar>
</template>

<script>
import ToolBarItems from './ToolBarItems.vue';
export default {
  data() {
    return {
      drawer: false,
      items: [
        { title: 'Home', link: '/', icon: 'home' },
        { title: 'Favorites', link: 'favorites', icon: 'star' },
      ],
    };
  },
  components: { ToolBarItems },
};
</script>

<style lang="scss" scoped>
.nav-drawer {
  z-index: 55;
}
</style>
