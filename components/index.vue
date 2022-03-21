<template>
	<navigator class="container" v-for="item in shop" :key='item.id' url="" >
		<view class="top">
			<image :src="item.img" class="img" mode=""></image>
		</view>
		<view class="bottom">
			<text class="name">{{item.name}}</text>
			<text class="price">￥{{item.money}}</text>
		</view>
	</navigator>
</template>

<script>
	export default {
		name:"index",
		data() {
			return {
				
			};
		},
		props:{
			shop:[]
		}
	}
</script>

<style>
	.container{
		border: 1px solid #000000;
		width: 48%;
		margin-top: 20rpx;
		margin-left: 10rpx;
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
		border-radius: 20rpx 20rpx 20rpx 20rpx;
	}
	.bottom{
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
