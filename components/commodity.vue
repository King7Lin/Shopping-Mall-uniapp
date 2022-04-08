<template>
	<view class="book" >
		
			<van-swipe-cell right-width="60" left-width="60">
				<navigator class="row" url="" >
				  <van-card
					num="2"
					price="2.00"
					desc="描述信息"
					title="商品标题"
					class="goods-card"
					thumb="https://img01.yzcdn.cn/vant/cat.jpeg"
				  />
			  </navigator>
			  <template #right>
			    <button class="delete-button" @click="right">删除</button>
			  </template>
			  <template #left>
			    <button class="info-button">选择</button>
			  </template>
			</van-swipe-cell>
		
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
		},
		methods:{
			right(){
				console.log('click right button')
			}
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
		display: flex;
		justify-content: center;
		text-align: center;
		line-height: var(--button-line-height,100px);
		font-size: var(--button-normal-font-size,14px);
		color: #fff;
		background-color: red;
	  }
	  .info-button{
		  height: 100%;
		  display: flex;
		  justify-content: center;
		  text-align: center;
		  line-height: var(--button-line-height,100px);
		  font-size: var(--button-normal-font-size,14px);
		  color: #fff;
		  background-color: #007AFF;
	  }
</style>
