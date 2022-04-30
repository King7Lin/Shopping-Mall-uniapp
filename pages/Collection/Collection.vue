<template>
	<view>
		<van-notice-bar left-icon="volume-o"  scrollable text="右滑可以删除收藏。"  />
		<commodity 
		v-for="(item,index) in shop"
		:key='index'
		:title="item[0].title"
		:price="item[0].price"
		:img='item[0].img'
		:shop_id="item[0].shop_id"
		operation='删除' 
		
		></commodity>
	</view>
</template>

<script>
	import commodity from "../../components/commodity.vue"
	export default {
		data() {
			return {
				shop:[]
			}
		},
		methods: {
			
		},
		components:{
			commodity
		},
		created() {
			uni.request({
				url:'http://127.0.0.1:3007/all/selectcollection?user_id=1',
				success: (res) => {
					this.shop = res.data
					console.log(this.shop)
				}
			})
		}
	}
</script>

<style>

</style>
