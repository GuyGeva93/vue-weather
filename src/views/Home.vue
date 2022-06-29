<template>
	<v-container>
		<CitySearch />
		<v-row>
			<v-col cols="12" md="4"><h3>Tel Aviv</h3></v-col>
			<v-spacer md="4"></v-spacer>
			<v-col cols="12" md="4" class="d-flex justify-end"
				><h3>Add To Favorites</h3></v-col
			>
		</v-row>
		<CityForecast />
	</v-container>
</template>

<script>
import CitySearch from '../components/CitySearch.vue';
import CityForecast from '@/components/CityForecast.vue';
export default {
	name: 'Home',
	components: { CitySearch, CityForecast },
};
</script>

<style lang="scss" scoped>
// .layout {
// 	display: grid;
// 	grid-template-columns: 1fr 1260px 1fr;
// }
// .main-layout {
// 	grid-column: 2;
// }
.city-search {
	border: 1px solid;
}
</style>
