<template>
	<view>
		<van-notify id="van-notify" />
		<van-notice-bar left-icon="volume-o"  scrollable text="右滑可以删除收藏。"  />
		<van-empty
		  v-if="shop.length==0"
		  class="custom-image"
		  image="https://img.yzcdn.cn/vant/custom-empty-image.png"
		  description="收藏为空"
		/>
		
		<commodity 
		v-for="(item,index) in shop"
		:key='index'
		:title="item[0].title"
		:price="item[0].price"
		:img='item[0].img'
		:shop_id="item[0].shop_id"
		operation='删除' 
		do='deleteCollection'
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
			Refresh(e){
				if(e.status == 1){
					this.$notify({ type: "danger", message: "删除失败，请联系客服" });
				}else{
					this.$notify({ type: "success", message: "删除成功" });
				}
				const pages = getCurrentPages()
				console.log(pages)
				const curPage = pages[pages.length-1]
				console.log(e,pages,curPage)
				setTimeout(()=>{
					uni.redirectTo({
						url:curPage.$page.fullPath
					})
				},500)
			}
		},
		components:{
			commodity
		},
		created() {
			let user_id = getApp().globalData.user_id
			
			uni.request({
				url:'http://127.0.0.1:3007/all/selectcollection?user_id='+ user_id,
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
