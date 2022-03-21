<template>
	<view class="container">
		<p>首页</p>
		<view class="top">
			<!-- <text></text> -->
			<image src="../../static/c1.png" class="topImg" mode=""></image>
		</view>
		<view class="guanggao">
			<navigator class="left">
				<image src="../../static/logo.png" class="lunbo" mode=""></image>
			</navigator>
			<view class="right">
				<navigator url="">
					<image src="../../static/c9.png" class="rightImg" mode=""></image>
				</navigator>
				<navigator url="">
					<image src="../../static/c8.png" class="rightImg" mode=""></image>
				</navigator>
			</view>
		</view>
		<index :shop="shop"></index>
		
	</view>
</template>

<script>
	import index from "../../components/index.vue"
	export default {
		data() {
			return {
				shop:[
					{
						id:0,
						img:'../static/c4.png',
						name:'白给商城1',
						money:999
					},
					{
						id:1,
						img:'../static/c3.png',
						name:'白给商城2',
						money:1999
					},
					{
						id:2,
						img:'../static/c5.png',
						name:'白给商城3',
						money:2999
					}
				]
			}
		},
		methods: {

		},
		components:{
			index
		}
	}
</script>

<style>
	.container {
		padding: 20px;
		font-size: 14px;
		line-height: 24px;
	}
	.topImg{
		border: 1px solid #000000;
		height: 300rpx;
		width: 100%;
	}
	.guanggao{
		display: flex;
		/* flex: row; */
	}
	.left{
		flex: 1;
		margin: 10rpx;
		height: 350rpx;
		border-radius: 20rpx;
	}
	.lunbo{
		width: 100%;
		height: 350rpx;
		border: 1px solid ;
		border-radius: 20rpx;
	}
	.right{
		flex: 1;
		width: 100%;
		margin: 10rpx;
		height: 350rpx;
		
	}
	.rightImg{
		border-radius: 20rpx;
		border: 1px solid rgba(0,0,0,.6);
		width: 100%;
		height: 170rpx;
	}
	index{
		/* border: 1px solid #000000; */
		width: 100%;
		display: flex;
		flex-wrap: wrap;
	}
</style>
