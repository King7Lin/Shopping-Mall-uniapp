<template>
	<view>
		<van-cell is-link :title="name"  @click="show = true" />
		<!-- <van-action-sheet 
		v-model="show" 
		title="标题" 
		:show="show" 
		closeable="true"
		@close="onSelect">
		</van-action-sheet> -->
		
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
				<image class="img" src="../static/c1.png"></image>
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
		  	:options="options" 
		  	:fill="true" 
		  	:button-group="buttonGroup" 
		  	@click="onClick"
		  	@buttonClick="buttonClick" />
		  </view>
		</view>
		</van-popup>
	</view>
</template>

<script>
	export default {
		name:"choose ",
		data() {
			return {
				buttonGroup: [{
						text: '加入购物车',
						backgroundColor: '#ff0000',
						color: '#fff'
					},
					{
						text: '立即购买',
						backgroundColor: '#ffa200',
						color: '#fff'
				}],
				show:false,
			};
		},
		props:{
			name:'',
			show:Boolean
		},
		methods:{
			close(){
				this.show = false;
			}
		}
	}
</script>

<style>
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
