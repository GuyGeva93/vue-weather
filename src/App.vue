<template>
	<v-app>
		<v-main class="app-layout">
			<NavBar />
			<router-view />
		</v-main>
	</v-app>
</template>

<script>
import NavBar from "./components/NavBar.vue";
export default {
	name: "App",
	components: { NavBar },
};
</script>

<style lang="scss" scoped>
// .app-layout {
// 	display: grid;
// 	grid-template-columns: 1fr 1260px 1fr;
// }
// .main-layout {
// 	grid-column: 2;
// }
</style>
