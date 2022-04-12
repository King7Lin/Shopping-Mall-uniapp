<template>
	<view class="container">
		<!-- <view class="top">
			-
		</view> -->
		<view class="body">
			<view class="left">
				<van-sidebar  v-model="activeKey" >
				  <van-sidebar-item v-for="(item,index) in shop" :title="item.type" :v-key="index" />
				</van-sidebar>
			</view>
			<view class="right" >
				<!-- <view  v-for="(item,index) in shop" :v-key="index":id="1">
					<image :src="item.img" mode=""></image>
					<view class="title">
						{{item.name}}
					</view>
				</view> -->
			</view>
		</view>
	</view>
</template>

<script>

	export default {
		data() {
			return {
				shop:[
					{
						img:'../../static/c4.png',
						name:'白给商城',
						money:999,
						type:'白给'
					},
					{
						img:'../../static/c3.png',
						name:'白给商城',
						money:1999,
						type:'白给1'
					},
					{
						img:'../../static/c5.png',
						name:'白给商城',
						money:2999,
						type:'白给2'
					}
				],
				activeKey:0
			}
		},
		methods: {
			
		},
		components:{

		}
	}
</script>

<style>
	.container{
		display: flex;
		height: 100vh;
		margin: 15rpx;
		
	}
	/* .top{
		position: absolute;
		top: 0;
	} */
	.body{
		margin-top: 100rpx;
	}
	.classification{
		flex: 1;
		display: flex;
		flex-direction: column;
		border-bottom: 1px solid #000000;
		width: 120rpx;
		height: 80rpx;
		font-size: 36rpx;
		font-weight: bold;
		padding-left: 20rpx;
		/* margin-top: 20rpx; */
		/* text-align: center; */
		justify-content: center;
	}
	.left{
		/* flex: 7; */
		border-right: 1px solid #909399;
	}
</style>
