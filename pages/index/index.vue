<template>
	<view class="container">
		<!-- 小程序头部兼容 -->
		<!-- #ifdef MP -->
		<view class="mp-search-box">
			<input class="ser-input" type="text" @click="toseach" placeholder="搜索" />
		</view>
		<!-- #endif -->
		<!-- 头部轮播 -->
		<view class="carousel-section">
			<!-- 标题栏和状态栏占位符 -->
			<view class="titleNview-placing"></view>
			<!-- 背景色区域 -->
			<view class="titleNview-background" ></view>
			<swiper class="carousel" circular>
				<swiper-item v-for="(item, index) in shop1" :key="index" class="carousel-item" >
					<image :src="item.img" />
				</swiper-item>
			</swiper>
			<!-- 自定义swiper指示器 -->
			<view class="swiper-dots">
				<text class="num">1</text>
				<text class="sign">/</text>
				<text class="num">2</text>
			</view>
		</view>
		
		<!-- 近期爆火 -->
		<view class="seckill-section m-t">
			<view class="s-header">
				<text class="title">近期爆火</text>
				<van-icon name="fire-o" color='red' size='60rpx'/>
				<van-icon name="fire-o" color='red' size='60rpx'/>
				<van-icon name="fire-o" color='red' size='60rpx'/>
			</view>
			<scroll-view class="floor-list" scroll-x>
				<view class="scoll-wrapper">
					<view 
						v-for="(item, index) in shop1" :key="index"
						class="floor-item"
						@click="navToDetailPage(item)"
					>
						<image :src="item.img" mode="aspectFill"></image>
						<text class="title clamp">{{item.name}}</text>
						<text class="price">￥{{item.price}}</text>
					</view>
				</view>
			</scroll-view>
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
		
		<!-- 导航栏 -->
		
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
			toseach(){
				wx.navigateTo({
					url:'../search/search'
				})
			}
		},
		components:{
			index
		}
	}
</script>

<style lang="less">
	/* #ifdef MP */
	.mp-search-box{
		position:absolute;
		left: 0;
		top: 30upx;
		z-index: 9999;
		width: 80%;
		padding: 0 80upx;
		.ser-input{
			flex:1;
			height: 56upx;
			line-height: 56upx;
			text-align: center;
			font-size: 28upx;
			// color:$font-color-base;
			border-radius: 20px;
			background: rgba(255,255,255,.6);
		}
	}
	page{
		.cate-section{
			position:relative;
			z-index:5;
			border-radius:16upx 16upx 0 0;
			margin-top:-20upx;
		}
		.carousel-section{
			padding: 0;
			.titleNview-placing {
				padding-top: 0;
				height: 0;
			}
			.carousel{
				.carousel-item{
					padding: 0;
				}
			}
			.swiper-dots{
				left:45upx;
				bottom:40upx;
			}
		}
	}
	/* #endif */
	
	
	page {
		background: #f5f5f5;
	}
	.m-t{
		margin-top: 16upx;
	}
	/* 头部 轮播图 */
	.carousel-section {
		position: relative;
		padding-top: 10px;
	
		.titleNview-placing {
			height: var(--status-bar-height);
			padding-top: 44px;
			box-sizing: content-box;
		}
	
		.titleNview-background {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 426upx;
			transition: .4s;
		}
	}
	.carousel {
		width: 100%;
		height: 350upx;
	
		.carousel-item {
			width: 100%;
			height: 100%;
			padding: 0 28upx;
			overflow: hidden;
		}
	
		image {
			width: 100%;
			height: 100%;
			border-radius: 10upx;
		}
	}
	.swiper-dots {
		display: flex;
		position: absolute;
		left: 60upx;
		bottom: 15upx;
		width: 72upx;
		height: 36upx;
		background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAABkCAYAAADDhn8LAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTMyIDc5LjE1OTI4NCwgMjAxNi8wNC8xOS0xMzoxMzo0MCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OTk4MzlBNjE0NjU1MTFFOUExNjRFQ0I3RTQ0NEExQjMiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OTk4MzlBNjA0NjU1MTFFOUExNjRFQ0I3RTQ0NEExQjMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6Q0E3RUNERkE0NjExMTFFOTg5NzI4MTM2Rjg0OUQwOEUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6Q0E3RUNERkI0NjExMTFFOTg5NzI4MTM2Rjg0OUQwOEUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4Gh5BPAAACTUlEQVR42uzcQW7jQAwFUdN306l1uWwNww5kqdsmm6/2MwtVCp8CosQtP9vg/2+/gY+DRAMBgqnjIp2PaCxCLLldpPARRIiFj1yBbMV+cHZh9PURRLQNhY8kgWyL/WDtwujjI8hoE8rKLqb5CDJaRMJHokC6yKgSCR9JAukmokIknCQJpLOIrJFwMsBJELFcKHwM9BFkLBMKFxNcBCHlQ+FhoocgpVwwnv0Xn30QBJGMC0QcaBVJiAMiec/dcwKuL4j1QMsVCXFAJE4s4NQA3K/8Y6DzO4g40P7UcmIBJxbEesCKWBDg8wWxHrAiFgT4fEGsB/CwIhYE+AeBAAdPLOcV8HRmWRDAiQVcO7GcV8CLM8uCAE4sQCDAlHcQ7x+ABQEEAggEEAggEEAggEAAgQACASAQQCCAQACBAAIBBAIIBBAIIBBAIABe4e9iAe/xd7EAJxYgEGDeO4j3EODp/cOCAE4sYMyJ5cwCHs4rCwI4sYBxJ5YzC84rCwKcXxArAuthQYDzC2JF0H49LAhwYUGsCFqvx5EF2T07dMaJBetx4cRyaqFtHJ8EIhK0i8OJBQxcECuCVutxJhCRoE0cZwMRyRcFefa/ffZBVPogePihhyCnbBhcfMFFEFM+DD4m+ghSlgmDkwlOgpAl4+BkkJMgZdk4+EgaSCcpVX7bmY9kgXQQU+1TgE0c+QJZUUz1b2T4SBbIKmJW+3iMj2SBVBWz+leVfCQLpIqYbp8b85EskIxyfIOfK5Sf+wiCRJEsllQ+oqEkQfBxmD8BBgA5hVjXyrBNUQAAAABJRU5ErkJggg==);
		background-size: 100% 100%;
	
		.num {
			width: 36upx;
			height: 36upx;
			border-radius: 50px;
			font-size: 24upx;
			color: #fff;
			text-align: center;
			line-height: 36upx;
		}
	
		.sign {
			position: absolute;
			top: 0;
			left: 50%;
			line-height: 36upx;
			font-size: 12upx;
			color: #fff;
			transform: translateX(-50%);
		}
	}
	
	/* 爆火专区 */
	.seckill-section{
		padding: 4upx 30upx 24upx;
		margin-bottom: 10rpx;
		background: #fff;
		.s-header{
			display:flex;
			align-items:center;
			height: 92upx;
			line-height: 1;
			.title{
				color: red;
				font-size: 50rpx;
				font-weight: bold;
			}
		}
		.floor-list{
			white-space: nowrap;
		}
		.scoll-wrapper{
			display:flex;
			align-items: flex-start;
		}
		.floor-item{
			display: flex;
			flex-direction: column;
			width: 150upx;
			margin-right: 20upx;
			font-size: 24rpx;
			color: #000;
			line-height: 1.8;
			image{
				width: 150upx;
				height: 150upx;
				border-radius: 6upx;
			}
			.price{
				color: red;
			}
		}
	}
	.clamp{
		overflow: hidden;
		    text-overflow: ellipsis;
		    white-space: nowrap;
		    display: block;
	}
	
	.container {
		// padding-right: 5px;
		// padding-left: 5px;
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
