<template>
	<view class="container">
		<view class="top">
			<!-- image -->
			<van-image
			  round
			  width="4rem"
			  height="4rem"
			  src="https://img.yzcdn.cn/vant/cat.jpeg"
			  class="img"
			/>
			<!-- name -->
			
			<!-- setting -->
			<uni-icons type="gear" size="30" class="gear" @click="toSetting"></uni-icons>
		</view>
		<view class="bottom">
			<view class="order">
				<van-cell-group inset>
				  <van-cell
				    is-link
				    title="我的订单"
				    link-type="navigateTo"
				    url="../order/order"
				  />
				  <view class='icon'>
				      <navigator hover-class="none" >
				        <image src='../../static/pending_payment.png' mode="aspectFit"></image>
				        <text>代付款</text>
				      </navigator>
				      <navigator  hover-class="none" >
				        <image src='../../static/pending_delivery.png' mode="aspectFit"></image>
				        <text>代发货</text>
				      </navigator>
				      <navigator  hover-class="none" >
				        <image src='../../static/already_shipped.png' mode="aspectFit"></image>
				        <text>已发货</text>
				      </navigator>
				      <navigator  hover-class="none" >
				        <image src='../../static/completed.png' mode="aspectFit"></image>
				        <text>已完成</text>
				      </navigator>
				    </view>
				</van-cell-group>
			</view>
			<van-cell
			  is-link
			  title="我的足迹"
			  link-type="navigateTo"
			  url="../footprint/footprint"
			/>
			<van-cell
			  is-link
			  title="我的收藏"
			  link-type="navigateTo"
			  url="../Collection/Collection"
			/>
			<van-cell
			  is-link
			  title="我的地址"
			  link-type="navigateTo"
			  url="../address/address"
			/>
			<van-cell
			  is-link
			  title="我的卡券"
			  link-type="navigateTo"
			  url=""
			/>
			<button open-type="contact">
				<van-cell
				  title="联系客服"
				/>
			</button>
		</view>
	</view>
</template>

<script>
	import choose from "../../components/choose.vue"
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			toSetting(){
				wx.navigateTo({
					url:'../setting/setting'
				})
			}
		},
		components:{
			choose
		}
	}
</script>

<style>
	.container{
		margin: 10rpx;
		
	}
	.img{
		margin: 20rpx;
		/* margin-left: 50rpx; */
	}
	.top{
		display: flex;
		flex-direction: row;
		background-color: #fff;
	}
	.gear{
		position: absolute;
		right: 20rpx;
		top: 50rpx;
	}
	.bottom{
		margin-top: 10rpx;
		background-color: #fff;
	}
	.icon{
	   border-bottom:1px solid #EDEDED; 
	   display: flex;
	   padding: 12px 0;
	 }
	 .icon image{
	   display: block;
	   width: 30px;
	   height: 30px;
	   margin: 0 auto;
	   padding-top: 10px;
	 }
	 .icon text{
	   display: block;
	   text-align: center;
	   width: 100%;
	   font-size: 14px;
	   color: #333;
	   padding-top: 10px;
	 }
	 .icon navigator{
	   flex: 1 0 25%;
	 }
	 button{
		 padding: 0;
		 margin: 0;
	 }
</style>
