<template>
	<view>
		<van-notice-bar left-icon="volume-o"  scrollable text="右滑可以收藏商品。"  />
		<commodity
		v-for="(item,index) in shop[0]"
		:key='index'
		 operation='收藏' 
		:shop_id="item[0].shop_id"
		:title="item[0].title"
		:price="item[0].price"
		:img="item[0].img"
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
				url:'http://127.0.0.1:3007/all/selectfootprint?user_id=1',
				success: (res) => {
					// console.log(res)
					this.shop.push(res.data)
					console.log(this.shop)
				}
			})
		}
	}
</script>

<style>

</style>
