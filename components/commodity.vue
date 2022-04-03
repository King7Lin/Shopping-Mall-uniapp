<template>
	<view class="book" >
		<!-- <navigator class="row" url="" v-for="item in shop"> -->
			<van-swipe-cell right-width=" 50 " left-width=" 50 ">
			  <van-card
			    num="2"
			    price="2.00"
			    desc="描述信息"
			    title="商品标题"
			    class="goods-card"
			    thumb="https://img01.yzcdn.cn/vant/cat.jpeg"
			  />
			  <template #right>
			    <van-button square text="删除" type="danger" class="delete-button" />
			  </template>
			  <!-- <template #left>
			    <van-button square text="选择" type="info" class="delete-button" />
			  </template> -->
			</van-swipe-cell>
		<!-- </navigator> -->
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
	 .goods-card {
	    margin: 0;
	    background-color: white;
	  }
	  .delete-button{
	    height: 100%;
	  }
</style>
