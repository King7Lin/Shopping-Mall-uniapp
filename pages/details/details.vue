<template>
	<view>
		<!-- 轮播 -->
		<view class="uni-padding-wrap">
			<view class="page-section swiper">
				<view class="page-section-spacing">
					<swiper class="swiper" indicator-dots="true" autoplay="true" interval="4000" duration="500">
						<swiper-item>
							<image src="../../static/c1.png" style="width: 100%; height: 250px;"></image>
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
			  <van-cell is-link title="选择"  @click="show = true" />
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
		
		<!-- prpos弹出框 -->
		<view class="">
			<van-popup
			  :show="show"
			  position="bottom"
			  closeable="true"
			  custom-style="height: 65%"
			  @close="close"
			>
			<view class="content">
			  <view class="goods-info">
			    <view >
					<image class="img" src="../../static/c1.png"></image>
				</view>
			    <view class="goods-info-right">
			      <view class="goods-price">¥ 16.66</view>
			      <view class="small">库存100件</view>
			      <view class="small">选择 产品 配件 服务</view>
			    </view>
			  </view>
			  <view class="sel">
			    <view class="tab small">规格</view>
			    <view>
			      <van-button color="#7B7B7B" size="mini" plain>规格1</van-button>
			      <van-button color="#7B7B7B" size="mini" plain>规格2</van-button>
			    </view>
			    <view class="tab small">颜色</view>
			    <view>
			      <van-button color="#7B7B7B" size="mini" plain>白色</van-button>
			      <van-button color="#7B7B7B" size="mini" plain>黑色</van-button>
			    </view>
			    <view class="level">
			      <view class="tab small">数量</view>
			      <van-stepper value="1" integer theme="round" button-size="20px"/>
			    </view>
			    <view>
			      <van-button color="#7B7B7B" size="mini" plain>送货上门</van-button>
			      <van-button color="#7B7B7B" size="mini" plain>上门安装</van-button>
			    </view>
			  </view>
			  <view class="goods-carts">
			  	<uni-goods-nav 
			  	:options="optionsa" 
			  	:fill="true" 
			  	:button-group="buttonGroup" 
			  	@buttonClick="buttonClick" />
			  </view>
			</view>
			</van-popup>
		</view>
	</view>
</template>

<script>
	import choose from"../../components/choose.vue"
	export default {
		data() {
			return {
				options: [{
							icon: 'home',
							text: '首页'
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
						checkList:false,
						show:false
			}
			
		},
		methods: {
			onClick(e) {
				console.log(e)
				if(e.index ===0){
					wx.switchTab({
						url:'../index/index'
					})
				}else{
					wx.switchTab({
						url:'../car/car'
					})
				}
				uni.showToast({
					title: `点击${e.content.text}`,
					icon: 'none'
				})
			},
			buttonClick(e) {
				console.log(e,this.$refs.prpos)
				  this.show = true	
			},
			ChangeCheck(){
				this.checkList = !this.checkList
				if(this.checkList){
					Notify({ type: 'success', message: '通知内容' });
				}else{
					Notify({ type: 'danger', message: '通知内容' });
				}
			},
			close(){
				this.show = false;
			}
		},
		components:{
			choose
		}
	}
</script>

<style lang="scss">
	.uni-padding-wrap .page-section .page-section-spacing .swiper{
		height: 250px;
	}
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
	// prpos弹出框
	.content{
	    margin: 40rpx 10rpx 0rpx 50rpx;
	}
	.goods-info{
	    display: flex;
	}
	.img{
	    height: 200rpx;
	    width: 200rpx;
	}
	.goods-info-right{
	    padding: 80rpx 30rpx 0rpx;
	}
	.goods-info-right >view{
	    padding: 5rpx 0rpx;
	}
	.goods-price{
	    font-weight: 600;
	    color: red;
	}
	.small{
	    font-size: 25rpx;
	}
	van-button{
	    padding:0rpx 50rpx 0rpx 0rpx;
	}
	.sel > view{
	    margin: 15rpx 0rpx;
	}
	.tab{
	    font-weight: 600;
	    padding-right: 450rpx;
	}
	.level{
	    display: flex;
	    align-items: center;
	    padding:  5rpx 0rpx;
	}
	.level-tab{
	    font-weight: 600;
	    padding-right: 290rpx;
	}
	.level-size{
	    font-size: 20rpx;
	    color: red;
	}
	.btn{
	    padding-top: 30rpx;
	    display: flex;
	    justify-content: center;
	}
	
</style>
