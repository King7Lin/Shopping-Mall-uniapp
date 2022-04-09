<template>
	<view class="container">
		<!-- 搜索框 -->				   <!--按下搜索事件-->
		<uni-search-bar focus='true' @confirm='search' ></uni-search-bar>
		<!-- ；轮播 -->
		<view class="uni-padding-wrap">
			<view class="page-section swiper">
				<view class="page-section-spacing">
					<swiper class="swiper" indicator-dots="true" autoplay="true" interval="4000" duration="500">
						<swiper-item v-for="item in shop1" :key="item.id">
							<navigator url="">
								<image :src="item.img" mode="" style="height: 300rpx; margin-left: 16rpx; border-radius: 10px;"></image>
							</navigator>
						</swiper-item>
					</swiper>
				</view>
			</view>
		</view>
		<!-- 广告 -->
		<view class="guanggao">
			<navigator class="left">
				<image src="../../static/logo.png" class="lunbo" mode=""></image>
			</navigator>
			<view class="right" >
				<navigator url="" v-for="item in shop1" :key="item.id">
					<image :src="item.img" class="rightImg" mode=""></image>
				</navigator>
			</view>
		</view>
		<!-- 商品 -->
		<view class="bottom">
			<index v-for="item in shop"
			:key="item.id" 
			:img="item.img" 
			:price="item.price"
			:name="item.name"
			:url="item.url">
			</index>
		</view>
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
						img:'../static/11.jpeg',
						name:'白给商城1',
						price:999,
						url:'../details/details'
					},
					{
						id:1,
						img:'../static/22.jpeg',
						name:'白给商城2',
						price:1999,
						url:'../details/details'
					},
					{
						id:2,
						img:'../static/33.jpeg',
						name:'白给商城3',
						price:2999,
						url:'../details/details'
					}
				],
				shop1:[
					{
						id:0,
						img:'../../static/11.jpeg',
						name:'白给商城1',
						price:999
					},
					{
						id:1,
						img:'../../static/22.jpeg',
						name:'白给商城2',
						price:1999
					},
				]
			}
		},
		methods: {
			search(e){
				console.log(e)
			}
		},
		components:{
			index
		}
	}
</script>

<style>
	.container {
		padding-right: 20px;
		padding-left: 20px;
		font-size: 14px;
		line-height: 24px;
	}
	.uni-searchbar{
		padding: 0;
	}
/* 	.topImg{
		border: 1px solid #000000;
		height: 300rpx;
		width: 100%;
	} */
	.guanggao{
		display: flex;
		/* flex: row; */
	}
	.left{
		flex: 1;
		margin: 10rpx;
		height: 359rpx;
		border-radius: 20rpx;
	}
	.lunbo{
		width: 100%;
		height: 359rpx;
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
	.bottom{
		display: flex;
		flex-wrap: wrap;
	}
	index{
		width: 48%;
		margin-top: 15rpx;
		margin-left: 11rpx;
	}
</style>
