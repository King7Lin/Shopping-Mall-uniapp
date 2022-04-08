<template>
	<!-- <view class=""> -->
	<navigator class="container" :url="url" >
		<view class="top">
			<image :src="img" class="img" mode=""></image>
		</view>
		<view class="text">
			<text class="name">{{name}}</text>
			<text class="price">￥{{price}}</text>
		</view>
	</navigator>
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
			url:'',
			img:'',
			name:'',
			price:0
		}
	}
</script>

<style>
	.container{
		border: 1px solid #000000;
		width: 100%;
		/* margin-top: 20rpx; */
		/* margin-left: 10rpx; */
		padding: 0;
		height: 350rpx;
		border-radius: 20rpx 20rpx 20rpx 20rpx;
	}
	.top{
		/* border: 1px solid #000000; */
		/* width: 100%; */
	}
	.img{
		width: 100%;
		height: 200rpx;
		/* border: 1px solid #000000; */
		border-radius: 20rpx 20rpx 0rpx 0rpx;
	}
	.text{
		display: flex;
		flex-direction: column;
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
	}
</style>
