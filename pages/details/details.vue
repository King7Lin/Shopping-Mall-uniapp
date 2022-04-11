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
		    <view class="title">商品名字</view>
			<!-- 收藏 -->
			<uni-fav 
			:checked="checkList"
			class="favBtn" 
			@click="ChangeCheck" 
			/>
			  <van-notify id="van-notify" />
			  
			  <text class="price">￥999</text>
			  <van-cell title="广东包邮 - 7天无理由退货 - 48小时发货" icon="location-o" />
		  </view>
		  <!-- 选择 -->
			  <view class="choose">
				  <van-cell is-link title="选择"  @click="show = true" />
				  <choose name='参数'></choose>
			  </view>
			  <!-- 详情 -->
			  <view class="details">
				  <text class="text">-----商品详情-----</text>
				  <!-- 详情图 -->
				  <view class="detailImg">
					  <image src="../../static/11.jpeg" class="detailImgs" mode=""></image>
					  <image src="../../static/22.jpeg" class="detailImgs" mode=""></image>
				  </view>
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
			  round
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
			      <view class="small">已选择：</view>
				  <van-stepper v-model="value" class='stepper'/>
			    </view>
			  </view>
			  <view class="sel">
			    <view class="tab small">规格</view>
			    <view>
			      <van-button color="#7B7B7B" size="small " plain>规格1</van-button>
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
						show:false,
						value:1
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
					this.$notify({ type: "success", message: "收藏成功" });
				}else{
					this.$notify({ type: "danger", message: "取消收藏" });
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
	.uni-padding-wrap 
	.page-section 
	.page-section-spacing 
	.swiper{
		height: 250px;
		
	}
  .detail {
    display: flex;
    flex-direction: column;
    margin-bottom: 15rpx;
    margin-top: 15rpx;
	background-color: #fff;
  }
  // 收藏
  .uni-fav{
	  margin-top: 15rpx;
  }
   .title {
    font-size: 40rpx;
    margin: 10rpx;
    color: black;
    text-align: justify;
	margin-left: 20rpx;
  }
  // .title 
  // .price{
	 //  margin-left: 20rpx;
  // }
   .price {
    color: red;
    font-size: 40rpx;
    margin: 10rpx;
	margin-left: 20rpx;
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
		margin-bottom: 20rpx;
	}
	.ShopName>.title{
		margin: 20rpx;
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
		border: 1px solid #C7C7C7;
	}
	.goods-info-right{
		
		display: flex;
		flex-direction: column;
		font-size: 50rpx;
		padding-left: 20rpx;
	    // padding: 80rpx 30rpx 0rpx;
	}
	.goods-info-right >view{
	    padding: 5rpx 0rpx;
		display: flex;
		flex-wrap: wrap;
		width:  460rpx;
	}
	.goods-price{
	    font-weight: 600;
	    color: red;
	}
	.small{
	    font-size: 30rpx;
		overflow-x: hidden;
		// width: 100%;
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
	.van-stepper{
		position: absolute;
		right: 0;
	}
	.active{
		background-color: red;
	}
	.detailImg{
		margin-left: 10rpx;
		margin-right: 10rpx;
		margin-bottom: 88rpx;
		width: 97%;
		height: 500rpx;
	}
	.detailImgs{
		margin-left: 10rpx;
		// margin-right: 10rpx;
		width: 97%;
		height: 100%;
	}
</style>
