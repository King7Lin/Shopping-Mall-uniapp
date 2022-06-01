<template>
	<view>
		<van-notify id="van-notify" />
		<van-notice-bar left-icon="volume-o"  scrollable text="右滑可以收藏商品。"  />
		<commodity
		v-for="(item,index) in shop[0]"
		:key='index'
		 operation='收藏' 
		:shop_id="item[0].shop_id"
		:title="item[0].title"
		:price="item[0].price"
		:img="item[0].img"
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
			Refresh(e){
				if(e.status == 1){
					this.$notify({ type: "danger", message: "添加失败，请联系客服" });
				}else if(e.status == 2){
					this.$notify({ type: "warning", message: "已存在" });
				}else{
					this.$notify({ type: "success", message: "添加成功" });
				}
				// const pages = getCurrentPages()
				// console.log(pages)
				// const curPage = pages[pages.length-1]
				// console.log(e,pages,curPage)
				// uni.redirectTo({
				// 	url:curPage.$page.fullPath
				// })
			}
		},
		components:{
			commodity
		},
		created() {
			let user_id = getApp().globalData.user_id
			uni.request({
				url:'http://127.0.0.1:3007/all/selectfootprint?user_id='+user_id,
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
