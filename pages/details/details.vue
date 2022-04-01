<template>
	<view>
		<!-- 轮播 -->
		<view class="uni-padding-wrap">
			<view class="page-section swiper">
				<view class="page-section-spacing">
					<swiper class="swiper" indicator-dots="true" autoplay="true" interval="4000" duration="500">
						<swiper-item>
							<image src="../../static/c1.png" mode=""></image>
						</swiper-item>
					</swiper>
				</view>
			</view>
		</view>
		  <view class="detail" >
		    <text class="price">￥999</text>
			<!-- 收藏 -->
			<uni-fav 
			:checked="checkList"
			class="favBtn" 
			@click="ChangeCheck" 
			/>
			  <van-notify id="van-notify" />
		  </view>
		  <view class="ShopName">
			  <text class="title">商品名字</text>
		  </view>
		  <!-- 选择 -->
			  <choose name='送至'></choose>
			  <choose name='选择'></choose>
			  <choose name='参数'></choose>
			  <!-- 详情 -->
			  <view class="details">
				  <text class="text">-----商品详情-----</text>
				  <!-- 详情图 -->
				  
			  </view>
		<!-- 底部悬浮栏 -->
		<view class="goods-carts">
			<uni-goods-nav 
			:options="options" 
			:fill="true" 
			:button-group="buttonGroup" 
			@click="onClick"
			@buttonClick="buttonClick" />
		</view>
	</view>
</template>

<script>
	import choose from"../../components/choose.vue"
	export default {
		data() {
			return {
				options: [{
							icon: 'headphones',
							text: '客服'
						},{
							icon: 'cart',
							text: '购物车',
						}],
					    buttonGroup: [{
					      text: '加入购物车',
					      backgroundColor: '#ff0000',
					      color: '#fff'
					    },
					    {
					      text: '立即购买',
					      backgroundColor: '#ffa200',
					      color: '#fff'
					    }
					    ],
						checkList:false
			}
			
		},
		methods: {
			onClick(e) {
				console.log(e)
				uni.showToast({
					title: `点击${e.content.text}`,
					icon: 'none'
				})
			},
			buttonClick(e) {
				console.log(e)
			},
			ChangeCheck(){
				this.checkList = !this.checkList
				if(this.checkList){
					Notify({ type: 'success', message: '通知内容' });
				}else{
					Notify({ type: 'danger', message: '通知内容' });
				}
			}
		},
		components:{
			choose
		}
	}
</script>

<style lang="scss">
  .detail {
    display: flex;
    flex-direction: row;
    margin-top: 15rpx;
    margin-bottom: 0rpx;
  }
  .detail .title {
    font-size: 40rpx;
    margin: 10rpx;
    color: black;
    text-align: justify;
  }
  .detail .price {
    color: red;
    font-size: 40rpx;
    margin: 10rpx;
  }
 .goods-carts {
 		/* #ifndef APP-NVUE */
 		display: flex;
 		/* #endif */
 		flex-direction: column;
 		position: fixed;
 		left: 0;
 		right: 0;
 		/* #ifdef H5 */
 		left: var(--window-left);
 		right: var(--window-right);
 		/* #endif */
 		bottom: 0;
 	}
	.favBtn {
			margin: 0 20rpx 20rpx 0;
			position: absolute;
			right: 0;
	}
	.ShopName{
		margin: 15rpx;
		display: flex;
		flex-wrap: wrap;
	}
	.details{
		margin-top: 20rpx;
	}
	.text{
		margin-bottom: 10rpx;
		font-weight: bold;
		display: flex;
		justify-content: center;
	}
</style>
