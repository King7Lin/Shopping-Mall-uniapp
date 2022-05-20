<template>
	<!-- <view class=""> -->
	<view class="container" @click="to" >
		<view class="top">
			<image :src="img" class="img" mode=""></image>
		</view>
		<view class="text">
			<text class="name">{{title}}</text>
			<text class="price">￥{{price}}</text>
		</view>
	</view>
	<!-- </view> -->
</template>

<script>
	export default {
		name:"index",
		data() {
			return {
				
			};
		},
		props:{
			shop_id:0,
			url:'',
			img:'',
			title:'',
			price:0
		},
		methods:{
			to(){
				console.log(this.shop_id)
				uni.navigateTo({
					url:'../details/details?shop_id='+this.shop_id
				})
			}
		}
	}
</script>

<style>
	.container{
		/* border: 1px solid #A5A4A4; */
		width: 100%;
		/* margin-top: 20rpx; */
		/* margin-left: 10rpx; */
		padding: 0;
		height: 450rpx;
		/* border-radius: 20rpx 20rpx 20rpx 20rpx; */
		
	}
	.top{
		/* border: 1px solid #000000; */
		/* width: 100%; */
		background-color: #fff;
		border-radius: 30rpx 30rpx 0 0;
	}
	.img{
		width: 100%;
		height: 300rpx;
		border-bottom: 1px solid #C0C4CC;
		border-radius: 30rpx 30rpx 0rpx 0rpx;
	}
	.text{
		display: flex;
		flex-direction: column;
		background-color: #fff;
		border-radius: 0rpx 0rpx 30rpx 30rpx
	}
	.name{
		font-weight: bold;
		padding-left: 20rpx;
		padding-bottom: 50rpx;
	}
	.price{
		padding-left: 20rpx;
		color: red;
		font-weight: bold;
		margin-bottom: 5rpx;
	}
</style>
