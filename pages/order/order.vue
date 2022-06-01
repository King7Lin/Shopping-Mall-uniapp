<template>
	<view>
		<van-tabs v-model="active" @click="onClick" swipeable animated>
		  <van-tab title="待付款" >
			  <order
			  v-for="item in shop[0][1]"
			  :key="item.id"
			  :shop='item'
			  operation='现在支付'
			  ></order>
		  </van-tab>
		  <van-tab title="待发货">
			  <order
			  v-for="item in shop[1][1]"
			  :key="item.id"
			  :shop='item'
			  operation='催促发货'
			  ></order>
		  </van-tab>
		  <van-tab title="已发货">
			  <order
			  v-for="item in shop[2][1]"
			  :key="item.id"			  
			  :shop='item'
			  operation='查看物流'
			  ></order>
		  </van-tab>
		  <van-tab title="已完成">
			  <order
			  v-for="item in shop[3][1]"
			  :key="item.id"
			  :shop='item'
			  operation='删除订单'
			  ></order>
		  </van-tab>
		</van-tabs>
	</view>
</template>

<script>
	import order from "../../components/order.vue"
	export default {
		data() {
			return {
				active:0,
				shop:[]
			}
		},
		created() {
			let user_id = getApp().globalData.user_id
			uni.request({
				url:'http://127.0.0.1:3007/all/SelectOrder?user_id=' + user_id,
				success: (res) => {
					console.log(res)
					this.shop = res.data
				}
			})
		},
		methods: {
			 onClick(name, title) {
				 this.active = name.detail.index
			      console.log(name,this.active);
			    },
		},
		components:{
			order
		}
	}
</script>

<style>
	order{
		margin: 0;
		padding: 0;
		/* border-bottom: 1px solid gray; */
	}
	.van-tabs{
		height: 100vh;
	}
	.van-card {
		margin: 10rpx 0;
		border-bottom: 1rpx solid gray;
	}
</style>
