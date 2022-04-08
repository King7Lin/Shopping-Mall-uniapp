<template>
	<view>
		<uni-search-bar focus='true' @confirm='search'></uni-search-bar>
		<order></order>
	</view>
</template>

<script>
	import order from "../../components/order.vue"
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
			order
		},
		onLoad(){
			
		}
	}
</script>

<style>

</style>
