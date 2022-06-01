<template>
	<view class="book" >
		<slot></slot>
			<van-swipe-cell right-width="60">
				  <navigator @click="to">
					  <van-card
					  	:price="price"
					  	:title="title"
					  	class="goods-card"
					  	:thumb="img"
					   />
				  </navigator>
			  <template #right>
			    <button class="delete-button" @click="right">{{operation}}</button>
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
			shop_id:0,
			img:'',
			title:'',
			price:0,
			do:'',
			operation:{
				type:String,
				required:true
			}
		},
		methods:{
			right(){
				let user_id = getApp().globalData.user_id
				// console.log('http://127.0.0.1:3007/all/' + this.do +'?user_id='++'&shop_id=' + this.shop_id)
				uni.request({
					url:'http://127.0.0.1:3007/all/' + this.do +'?user_id='+user_id+'&shop_id=' + this.shop_id,
					success: (res) => {
						console.log(res)
						this.$emit('transfer',res.data)
					}
				})
				
			},
			to(e){
				uni.navigateTo({
					url:'../details/details?shop_id='+this.shop_id
				})
			}
		},
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
	  
</style>
