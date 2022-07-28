<template>
	<view>
		<van-notify id="van-notify" />
		<van-notice-bar left-icon="volume-o"  scrollable text="右滑可以收藏商品。"  />
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
		do='insertCollection'
		@transfer="Refresh"
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
					url:`http://1.12.230.158:3007/all/search?title=${e.value}`,
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
			},
			Refresh(e){
				if(e.status == 1){
					this.$notify({ type: "danger", message: "添加失败，请联系客服" });
				}else if(e.status == 2){
					this.$notify({ type: "warning", message: "已存在" });
				}else{
					this.$notify({ type: "success", message: "添加成功" });
				}
				
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
