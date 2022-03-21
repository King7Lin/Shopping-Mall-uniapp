<template>
	<view class="container">
		<view class="left">
			<view class="classification" v-for="item in shop">
				<text>{{item.type}}</text>
			</view>
		</view>
		<view class="right">
			
		</view>
	</view>
</template>

<script>
	import commodity from "../../components/commodity.vue"
	export default {
		data() {
			return {
				shop:[
					{
						img:'../static/c4.png',
						name:'白给商城1',
						money:999,
						type:'白给'
					},
					{
						img:'../static/c3.png',
						name:'白给商城2',
						money:1999,
						type:'白给1'
					},
					{
						img:'../static/c5.png',
						name:'白给商城3',
						money:2999,
						type:'白给2'
					}
				]
			}
		},
		methods: {
			
		},
		components:{
			commodity
		}
	}
</script>

<style>
	.container{
		display: flex;
		height: 100vh;
		margin: 15rpx;
		
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
