<template>
	<view>
		<uni-search-bar focus='true' @confirm='search'></uni-search-bar>
		<van-empty description="搜索为空" v-if="shop.length<1" />
		<commodity 
		v-else
		v-for="(item,index) in shop"
		:key='index'
		operation='收藏'
		:title='item.title'
		:price='item.price'
		:img='item.img'
		:shop_id='item.shop_id'
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
			search(e){
				console.log(e)
				uni.request({
					url:`http://127.0.0.1:3007/all/search?title=${e.value}`,
					success: (res) => {
						this.shop = res.data
						console.log(res.data.length)
						if(res.data.length == 0){
							uni.showToast({
								title:'搜索内容为空',
								icon:'error'
							})
						}
						console.log(this.shop)
					}
				})
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
