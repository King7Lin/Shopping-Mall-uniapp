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
				<van-cell
				  is-link
				  title="单元格"
				  link-type="navigateTo"
				  url="../order/order"
				/>
			</view>
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
</style>
