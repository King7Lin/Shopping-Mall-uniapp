<template>
	<view>
		<uni-search-bar focus='true' @confirm='search'></uni-search-bar>
		<commodity operation='收藏'></commodity>
	</view>
</template>

<script>
	import commodity from "../../components/commodity.vue"
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			search(e){
				console.log(e)
			}
		},
		components:{
			commodity
		},
		onLoad(){
			
		}
	}
</script>

<style>

</style>
