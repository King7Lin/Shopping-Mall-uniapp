<template>
	<view>
		<van-tabs v-model="active" @click="onClick">
		  <van-tab title="待付款" >
			  <order :active='active'></order>
		  </van-tab>
		  <van-tab title="待发货">
			  <order :active='active'></order>
		  </van-tab>
		  <van-tab title="已发货">
			  <order :active='active'></order>
		  </van-tab>
		  <van-tab title="已完成">
			  <order :active='active'></order>
		  </van-tab>
		</van-tabs>
	</view>
</template>

<script>
	import order from "../../components/order.vue"
	export default {
		data() {
			return {
				active:0
			}
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
	
</style>
