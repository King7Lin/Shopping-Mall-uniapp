<template>
	<view class="container">
		<!-- 小程序头部兼容 -->
		<van-notify id="van-notify" />
		<!-- #ifdef MP -->
		<view class="mp-search-box">
			<input class="ser-input" type="text" @click="toseach" placeholder="搜索" />
		</view>
		<!-- #endif -->
		<!-- 头部轮播 -->
			<mySwiper :shop="advertisement" :shopNum="true"></mySwiper>
		
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
						v-for="(item, index) in activity" :key="index"
						class="floor-item"
						@click="navToDetailPage(item)"
					>
						<navigator url="">
							<image :src="item.img" mode="aspectFill"></image>
						</navigator>
						<text class="title clamp">{{item.name}}</text>
						<text class="price">￥{{item.price}}</text>
					</view>
				</view>
			</scroll-view>
		</view>
		
		<!-- 最新上架 -->
		<view class="newShop">
			<van-cell title="最新上架" />
			<view class="newShops">
				<view class="shops" v-for="(item,index) in shop[0]" :key='index' @click="navToDetailPage(item)">
					<image :src="item.img" mode=""></image>
					<text class="shopTitle">{{item.name}}</text>
					<text class="shopPrice">￥{{item.price}}</text>
				</view>
			</view>
		</view>
		
		<!-- 导航栏 -->
		
		<!-- 商品 -->
		<view class="bottom">
			<index v-for="item in shop[0]"
			:key="item.id" 
			:img="item.img" 
			:price="item.price"
			:title="item.title"
			:url="item.url"
			:shop_id="item.shop_id">
			</index>
		</view>
	</view>
</template>

<script>
	import index from "../../components/index.vue"
	import mySwiper from "../../components/mySwiper.vue"
	export default {
		data() {
			return {
				shop:[],
				activity:[],
				advertisement:[],
				star:0,
				end:6
			}
		},
		methods: {
			toseach(){
				wx.navigateTo({
					url:'../search/search'
				})
			},
			navToDetailPage(e){
				console.log(e)
				uni.navigateTo({
					url:'../details/details?shop_id='+e.shop_id
				})
			},
			// 上拉
			 onReachBottom(){
				console.log('11')
				this.star+=6
				this.end+=6
				console.log(this.star,this.end)
				 uni.request({
					url:'http://47.94.11.39:3007/all/selectShop?star=' + this.star + '&end='+ this.end,
					success:(res)=>{
						console.log(res)
						// let { shop } = res.data
						// console.log(shop.length)
						this.shop[0] = this.shop[0].concat(res.data[0])
						console.log(this.shop[0])

					}
				})
				
			}
		},
		created(){
				
			let app = getApp()
			let token = uni.getStorageSync('token_key')
			
			console.log('token',token)
			// if(app.globalData.login == false || app.globalData.user_id == 0 || token == undefined || token ==''){
			// 	uni.redirectTo({
			// 		url:'../login/login'
			// 	})
			// }
			console.log(getApp().globalData)
			uni.request({
				url:'http://47.94.11.39:3007/all/selectShop?star=' + this.star + '&end='+ this.end,
				success:(res)=>{
					// let { activity,advertisement,shop } = res.data
					console.log(res)
					this.activity = res.data[1]
					this.advertisement = res.data[2]
					this.shop.push(res.data[0])
					console.log(this.shop)
				}
			})
		},
		components:{
			index,
			mySwiper
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
	// .header{
	// 	height: 400rpx;
	// }
	
	/* 爆火专区 */
	.seckill-section{
		padding: 4upx 30upx 0upx;
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
	
	// 最新上架
	.newShop{
		height: 350rpx;
		margin-top: 20rpx;
		margin-bottom: 20rpx;
		background-color: #fff;
	}
	.shops{
		display: flex;
		flex-direction: column;
		height: 270rpx;
		font-size: 24rpx;
		line-height: 40rpx;
	}
	.newShops{
		display: flex;
		height: 270rpx;
		overflow-x: scroll;
	}
	.shops image{
		margin: 10rpx;
		height: 150rpx;
		width: 150rpx;
	}
	.shopTitle{
		margin-left: 20rpx;
	}
	.shopPrice{
		color: red;
		margin-left: 20rpx;
	}
	
	.guanggao{
		display: flex;
		/* flex: row; */
		height: 460rpx;
	}
	.left{
		flex: 1;
		margin: 10rpx;
		// height: 359rpx;
		border-radius: 20rpx;
		box-shadow: 0px 10px 8px #A5A4A4;
	}
	.lunbo{
		width: 100%;
		// height: 359rpx;
		border: 1px solid ;
		border-radius: 20rpx;
	}
	.right{
		flex: 1;
		width: 100%;
		margin: 10rpx;
		// height: 350rpx;
	}
	.rightImg{
		border-radius: 20rpx;
		border: 1px solid rgba(0,0,0,.6);
		width: 100%;
		height: 215rpx;
		box-shadow: 0px 10px 8px #A5A4A4;
	}
	.bottom{
		border-radius: 20rpx 20rpx 0 0;
		display: flex;
		flex-wrap: wrap;
		margin-bottom: 30rpx;
	}
	index{
		border-radius: 30rpx 30rpx 30rpx 30rpx;
		width: 48%;
		margin-top: 15rpx;
		margin-bottom: 15rpx;
		margin-left: 11rpx;
		box-shadow: 0px 10px 8px #A5A4A4;
	}
</style>
