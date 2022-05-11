<template>
	<view>
		<!-- 轮播 -->
		<view class="lunbo">
			<uni-swiper-dot class="uni-swiper-dot-box"
							@clickItem=clickItem 
							:info="detailImg"
							:current="current" 
							>
				<swiper class="swiper-box" @change="change" :current="swiperDotIndex">
					<swiper-item v-for="(item, index) in detailImg" :key="index">
						<image :src="item" mode="" style="width: 100%; height: 100%;"></image>
					</swiper-item>
				</swiper>
			</uni-swiper-dot>
		</view>
		  <view class="detail" >
		    <view class="title">{{shop.title}}</view>
			<!-- 收藏 -->
			<uni-fav 
			:checked="checkList"
			class="favBtn" 
			@click="ChangeCheck" 
			/>
			  <van-notify id="van-notify" />
			  
			  <text class="price">￥{{shop.price}}</text>
			  <van-cell title="广东包邮 - 7天无理由退货 - 48小时发货" icon="location-o" />
		  </view>
		  <!-- 选择 -->
			  <view class="choose">
				  <van-cell is-link title="选择"  @click="show = true" />
				  <van-cell is-link title="送至"  @click="showAddres = true" />
				  <van-cell is-link title="点击分享" @click="showShare = true" />
				  <van-share-sheet
					:show='showShare'
				    title="立即分享给好友"
				    :options="share"
					@select="onSelect"
					@cancel="close"
				  />
			  </view>
			  <!-- 详情 -->
			  <view class="details">
				  <text class="text">-----商品详情-----</text>
				  <!-- 详情图 -->
				  <view class="detailImg" v-for="(item,index) in detailImg" :key='index'>
					  <image :src="item" class="detailImgs" mode=""></image>
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
		
		<!-- prpos选规格弹出框 -->
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
			  <view class="sel" v-for="(item,index) in specifications" :key='index'>
			    <view class="tab small">{{item[0]}}</view>
				  <view v-model="radio" v-for="(items,index1) in item[1]" :key='index1' class="speci">
				  	<label class="radio">
						<radio value="r1" />{{items}}
					</label>
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
		
		<!-- props 地址弹出 -->
		<view class="">
			<van-popup
			  :show="showAddres"
			  round
			  position="bottom"
			  closeable="true"
			  custom-style="height: 65%"
			  @close="close"
			>
			</van-popup>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				share: [
				        [
				          { name: '微信', icon: 'wechat' },
				          { name: '朋友圈', icon: 'wechat-moments' },
				          { name: '微博', icon: 'weibo' },
				          { name: 'QQ', icon: 'qq' },
				        ],
				        [
				          { name: '复制链接', icon: 'link' },
				          { name: '分享海报', icon: 'poster' },
				          { name: '二维码', icon: 'qrcode' },
				          { name: '小程序码', icon: 'weapp-qrcode' },
				        ],
				      ],
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
						value:1,
						showAddres:false,
						showShare:false,
						detailImg:[],
						shop:[],
						specifications:[],
						current:0,
						shop_id:0
			}
			
		},
		onShow() {
			uni.showLoading({
				title:'正在加载中',
			})
			uni.request({
				url:'http://127.0.0.1:3007/all/selectDetails?shop_id='+this.shop_id,
				success: (res) => {
					
					let { detailImg,shop,specifications } = res.data
					this.detailImg = detailImg
					this.shop = shop[0][0]
					this.specifications = specifications
					console.log(this.specifications)
				}
			})
			uni.request({
				url:'http://127.0.0.1:3007/all/insertfootprint?user_id=1&shop_id='+this.shop_id,
				success: (res) => {
					uni.hideLoading()
					console.log(res)
				}
			})
		},
		onLoad(option) {
			console.log(option.shop_id.split())
			this.shop_id = option.shop_id
		},
		methods: {
			// 轮播
			clickItem(e){
				console.log(e)
			},
			change(e){
				this.current = e.detail.current
			},
			
			// 主页购物车跳转
			onClick(e) {
				console.log(e)
				if(e.index ===0){
					uni.switchTab({
						url:'../index/index'
					})
				}else{
					uni.switchTab({
						url:'../car/car'
					})
				}
				uni.showToast({
					title: `点击${e.content.text}`,
					icon: 'none'
				})
			},
			
			// 加入购物车、立即购买
			buttonClick(e) {
				console.log(e,this.$refs.prpos)
				  this.show = true	
			},
			// 收藏
			ChangeCheck(){
				this.checkList = !this.checkList
				if(this.checkList){
					this.$notify({ type: "success", message: "收藏成功" });
				}else{
					this.$notify({ type: "danger", message: "取消收藏" });
				}
			},
			
			// prpos关闭
			close(){
				this.show = false;
				this.showAddres = false
				this.showShare = false
			},
			
			// 分享
			onSelect(){
				this.showShare = false
			}
		}
	}
</script>

<style lang="scss">
	// 轮播
	.lunbo,
	.uni-swiper-dot-box,
	.swiper-box
	{
		height: 550rpx;
	}
	
	// .uni-padding-wrap 
	// .page-section 
	// .page-section-spacing 
	// .swiper{
	// 	height: 250px;
		
	// }
  .detail {
    display: flex;
    flex-direction: column;
    margin-bottom: 15rpx;
    // margin-top: 15rpx;
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
		overflow-y: scroll;
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
	
	// 规格
	.speci{
		display: flex;
		flex-wrap: wrap;
	}
</style>
