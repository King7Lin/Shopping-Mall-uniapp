<template>
	<view>
			<van-card
			  :num="shop.num"
			  :price="shop.price"
			  desc="描述信息"
			  :title="shop.title"
			  :thumb="shop.img"
			>
			  <view slot="footer">
			    <van-button round type="primary" size='small' @click='to'>{{operation}}</van-button>
			    <van-button round type="info" size='small' open-type="contact">联系客服</van-button>
				<slot></slot>
			  </view>
			</van-card>
	</view>
</template>

<script>
	export default {
		name:"order",
		props:{
			shop:[],
			operation:{
				type:String,
				required:true
			},
			
		},
		data() {
			return {
				
			};
		},
		methods:{
			to(){
				
				if(this.operation =='现在支付'){
					let shop1 = []
					shop1[0] = '[' + JSON.stringify(this.shop) + ']'
					console.log(shop1)
					uni.navigateTo({
						url:'../settlement/settlement?id=' + this.shop.id+ '&shop=' + shop1
					})
				}else if(this.operation =='删除订单'){
					uni.request({
						url:'http://127.0.0.1:3007/all/deleteOrder?id=' + this.shop.id,
						success: (res) => {
							if(res.data.state == 0){
								uni.showToast({
									title:'删除成功'
								})
								setTimeout(()=>{
									wx.reLaunch({
									  url: '../order/order'
									})
								},1000)
							}
						}
					})
				}
			}
		}
	}
</script>

<style>
button {
	margin-left: 10rpx;
}
</style>
