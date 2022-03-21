<template>
	<view class="book" >
		<navigator class="row" url="" v-for="item in shop">
			<!-- 图片 -->
			<view class="pic" style="height: 300rpx; width: 30%;">
				<image :src="item.img" style="width: 200rpx; height: 180rpx; margin-top: 10rpx;"></image>
			</view>
			<!-- 字体 -->
			<view class="text">
				<view class="BName">{{item.name}}</view>
				<view class="Bmoney">￥{{item.money}}</view>
			</view>
		</navigator>
	</view>
</template>

<script>
	export default {
		name:"commodity",
		data() {
			return {
				
			};
		},
		props:{
			shop:[]
		}
	}
</script>

<style>
.row{
	height: 200rpx;
	display: flex;
	flex-direction: row;
	border-bottom:1px solid #000000;
}
.book{  
	height: 200rpx;
}
.text{
    display: flex;
    flex-direction: column;
	padding-top: 15rpx;
}
/* 书名 */
.BName{
  padding-top: 20rxp;
  font-size: 40rpx;
  font-weight: bold;
  height: 70%;
}
/* 价钱 */
.Bmoney{
  position: relative;
  bottom: 0;
  color: red;
}
.line{
	border-bottom: 1px solid #000000;
	
}
</style>
