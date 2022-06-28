<template>
	<view>
		<!-- 轮播 -->
		<view class="lunbo">
			<uni-swiper-dot class="uni-swiper-dot-box"
							@clickItem=clickItem 
							:info="detailImg"
							:current="current" 
							>
				<swiper class="swiper-box" @change="changeImg" :current="swiperDotIndex">
					<swiper-item v-for="(item, index) in detailImg" :key="index">
						<image :src="item" mode="" style="width: 100%; height: 100%;"></image>
					</swiper-item>
				</swiper>
			</uni-swiper-dot>
		</view>
		  <view class="detail" >
		    <view class="title">{{shop.title}}</view>
			<view class="" style="display: flex;">
				<!-- 价格 -->
				<text class="price">￥{{shop.price}}</text>
				<!-- 收藏 -->
				<uni-fav
				:checked="checkList"
				class="favBtn" 
				@click="ChangeCheck" 
				/>
				
			</view>
			  <van-notify id="van-notify" />
			  
			 
			  <van-cell title="广东包邮 - 7天无理由退货 - 48小时发货" icon="location-o" />
		  </view>
		  <!-- 选择 -->
			  <view class="choose">
				  <van-cell is-link title="选择" :value='desc' @click="show = true" />
				  <van-cell is-link title="送至" :value='Daddress.address' @click="showAddres = true" />
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
					<image class="img" :src="detailImg[0]"></image>
				</view>
			    <view class="goods-info-right">
			      <view class="goods-price">￥{{shop.price}}</view>
			      <view class="small">已选择：{{ALLchoose}}</view>
				  <van-stepper v-model="stevalue" class='stepper' @change='Stevalue'/>
			    </view>
			  </view>

			 <view class="sel">
			  	<view class="sel-type" v-for="(item,index) in specifications" :key='index'>
			  			<view class="sel-title">
			  				{{item.title}}
			  			</view>
			  		<uni-data-checkbox 
			  			selectedColor="red" 
			  			mode="tag" 
			  			v-model="value" 
			  			:localdata="item.select" 
			  			@change="selchange">
			  		</uni-data-checkbox>
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
			<view class="content">
				<view class="address-title">
					<text>选择地址</text>
				</view>
					<radio-group name="addinf" @change="radioChange">
						<label  v-for="(item,index) in address" :key="index">
							<view class="address-content">
								<view class="address-flex">
									<uni-icons type="location-filled" size="30" style='line-height: 100rpx;'></uni-icons>
									<view>
										<view class="name">{{item.name}}</view>
										<view class="number">{{item.number}}</view>
										<view class="address">{{item.address}}</view>
									</view>									
								</view>
								<radio color="#007AFF" :value="item.id" :checked="address_check" />
							</view>
						</label>
						<view class="add-address" @click="addAddress">
							新增地址
						</view>
					</radio-group>
			</view>
			</van-popup>
		</view>
	</view>
</template>

<script>
	import Notify from'../../wxcomponents/vant/notify/notify'
	export default {
		data() {
			return {
				user_id:getApp().globalData.user_id,
				address:null,
				share: [
				        [
				          { name: '微信', icon: 'wechat' },
				          { name: '朋友圈', icon: 'wechat-moments' },
				          { name: '微博', icon: 'weibo' },
				          { name: 'QQ', icon: 'qq' },
				        ]
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
						showAddres:false,
						showShare:false,
						detailImg:[],
						shop:[],
						specifications:[],
						Fchoose:[],
						stevalue:1,
						desc:'',
						Daddress:'',
						current:0
			}
		},
		 onLoad(option) {
			// let a= await this.$address()
			// console.log('$address',getApp().globalData)
			// 详情
			uni.request({
				url:`http://47.94.11.39:3007/all/selectDetails?shop_id=${option.shop_id}&user_id=${this.user_id}`,
				// url:`http://47.94.11.39:3007/all/selectDetails?shop_id=3&user_id=1`,
				success: (res) => {
					let { detailImg,shop,specifications } = res.data
					this.checkList = res.data.check
					this.detailImg = detailImg
					this.shop = shop[0][0]
					
					// 规格
					for(let i = 0;i<specifications.length;i++){
						let a = specifications[i][1]
						let select = []
						for(let j = 0;j<specifications[i][1].length;j++){
							select.push({
								value:i+','+j,
								text:a[j]
							})
						}
						// console.log('select',select)
						this.specifications[i] = {
							title:specifications[i][0],
							select:select
						}
					}
					// console.log(this.specifications)
				}
			})
			// 地址
			uni.request({
				url:'http://47.94.11.39:3007/all/selectAddress?user_id=' + this.user_id,
				success: (res) => {
					console.log(res)
					this.address = res.data
					
					this.address.forEach(value=>{
						// console.log(value)
						if(value.address_default == 1){
							this.Daddress = value
						}
					})
					console.log(this.Daddress)
				}
			})
			uni.request({
				url:'http://47.94.11.39:3007/all/insertfootprint?user_id=' + this.user_id +'&shop_id=' + option.shop_id,
				success: (res) => {
					console.log(res)
				}
			}) 
			// console.log('address')
			// console.log(option)
		},
		methods: {
			// 轮播
			clickItem(e){
				console.log(e)
			},
			changeImg(e){
				console.log(e.detail.current)
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
				let a = 0
				this.desc.split('').forEach((value)=>{
					if(value === '，'){
						a ++
					}
				})
				// console.log(a)
				if(this.desc ==='' || a !== this.specifications.length){
					this.$notify({ type: "danger", message: "请选择规格" });
					 this.show = true	
				}else{
					// 加入购物车
					if(e.index == 0){
						uni.request({
							url:'http://47.94.11.39:3007/all/insertCart',
							method:'POST',
							header:{
							'content-type':'application/x-www-form-urlencoded'
							},
							data:{
								user_id:this.user_id,
								shop_id:this.shop.shop_id,
								desc:this.desc,
								num:this.stevalue
							},
							success: (res) => {
								console.log(res)
								if(res.data.status !== 1){
									this.$notify({ type: "success", message: "加入购物车成功" });
									this.show = false;
								}else{
									this.$notify({ type: "danger", message: "加入购物车失败,请联系客服" });
								}
							}
						})
					}else{
						// 立即购买
						console.log(this.stevalue)
						this.shop.desc = this.desc
						this.shop.num = this.stevalue
						let shop1 ='[' + JSON.stringify(this.shop) + ']'
						console.log(shop1)
						uni.request({
							url:'http://47.94.11.39:3007/all/insertOrder',
							method:'POST',
							header:{
							'content-type':'application/x-www-form-urlencoded'
							},
							data:{
								user_id:this.user_id,
								shop_id:[3,this.stevalue],
								desc:this.desc
							},
							success: (res) => {
								console.log(res)
								if(res.data.status !== 1){
									this.$notify({ type: "success", message: "操作成功" });
									setTimeout(()=>{
										uni.navigateTo({
											url:'../settlement/settlement?id=' + res.data.id + '&shop=' + shop1 + '&address_id=' + this.Daddress.id
										})
									},1000)
								}else{
									this.$notify({ type: "success", message: "操作失败" });
								}
							}
						})
						
					}
				}
				 
			},
			// 收藏
			ChangeCheck(){
				this.checkList = !this.checkList
				if(this.checkList){
					uni.request({
						url:'http://47.94.11.39:3007/all/insertCollection?user_id='+this.user_id+'&shop_id='+this.shop.shop_id,
						success: (res) => {
							console.log(res)
							if(res.data.status !== 1){
								this.$notify({ type: "success", message: "收藏成功" });
							}else{
								this.$notify({ type: "danger", message: "操作失败，请联系客服" });
							}
						}
					})
					
				}else{
					uni.request({
						url:'http://47.94.11.39:3007/all/deleteCollection?user_id='+this.user_id+'&shop_id='+this.shop.shop_id,
						success: (res) => {
							console.log(res)
							if(res.data.status !== 1){
								this.$notify({ type: "warning", message: "取消收藏成功" });
							}else{
								this.$notify({ type: "danger", message: "操作失败，请联系客服" });
							}
						}
					})
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
			},
			//商品选择
			 selchange(e){
				 console.log('selchange',e)
				 let a = e.detail.data.value.split(',')
				 // console.log('a',a)
				if(this.Fchoose.length<1){
					this.Fchoose.push({
						value:a,
						text:e.detail.data.text
					})
					console.log('外层')
				}else{
					let num = 999
					let choose = false
					 this.Fchoose.forEach((value,index)=>{
						 if(index>this.specifications.length-1) return
						 if(value.value[0] === a[0]){
							 console.log(value,value.value[0],a[0])
							 value.value = a
							 value.text = e.detail.data.text
							 console.log(index)
							 num = index
						 }
					 })
					 if(num === 999){
						 this.Fchoose.push({
						 	value:a,
						 	text:e.detail.data.text
						 })
					 }
				}
				
				 console.log('fchoose',this.Fchoose)
			 },
			 //地址radio
			radioChange(e) {
				console.log(e)
			    this.address.forEach(value=>{
					console.log(value.id)
					if(parseInt(e.detail.value) === value.id){
						this.Daddress = value
					}
				})
				console.log(this.Daddress)
			},
			// 步进器
			Stevalue(e){
				console.log(e)
				this.stevalue = e.detail
				this.shop.num = e.detail
				// console.log(this.shop)
			},
			addAddress(){
				console.log('address')
				uni.navigateTo({
					url: '../address/addAddress'
				})
			},
		},
		computed:{
			ALLchoose(){
				let text =''
				this.Fchoose.forEach(value=>{
					text += value.text+'，'
				})
				this.desc = text
				return text
			},
			address_check(){
				let num = 0
				if(this.address){
					this.address.forEach((value,index)=>{
						if(value.address_default === 1){
							num = index
						}
					})
				}
				return num
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
    font-size: 32rpx;
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
	flex: 3;
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
			// position: absolute;
			// right: 0;
			// top: 675rpx;
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
	    margin: 40rpx 20rpx 0rpx 20rpx;
		overflow-y: scroll;
		height: 100%;
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
		flex-direction: row;
		flex-wrap: wrap;
	}
	//送至
	.address-title{
		text-align: center;
	}
	.address-content{
		margin-top: 25rpx;
		display: flex;
		justify-content: space-between;
	}
	.address-flex{
		display: flex;
		font-size: 16px;
	}
	//商品选项
	.sel-title{
		font-weight: bold;
		margin: 10px 0px;
	}
	.name{
		
	}
	.number{
		position: relative;
		top: -35rpx;
		left: 370rpx;
		color: gray;
	}
	.add-address {
	  margin: 0 auto;
	  margin-top: 30px;
	  width: 150px;
	  height: 35px;
	  border: 1px #000 solid;
	  line-height: 35px;
	  text-align: center;
	  color: #000;
	  border-radius: 5rpx;
	  display: block;
	}
</style>
