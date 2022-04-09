<template>
	<view class="book" >
			<van-swipe-cell right-width="60">
				  <navigator url="">
					  <van-card
					  	price="2.00"
					  	desc="描述信息"
					  	title="商品标题"
					  	class="goods-card"
					  	thumb="https://img01.yzcdn.cn/vant/cat.jpeg"
					   />
				  </navigator>
			  <template #right>
			    <button class="delete-button" @click="right">{{operation}}</button>
			  </template>
			</van-swipe-cell>
	</view>
</template>

<script>
	import Stepper from"../components/Stepper.vue"
	export default {
		name:"commodity",
		data() {
			return {
				
			};
		},
		props:{
			// shop:{
			// 	required:true
			// },
			operation:{
				type:String,
				required:true
			},
			foot:{
				type:Boolean,
				default:false,
				required:true
			}
		},
		methods:{
			right(){
				console.log('click right button')
			},
			to(e){
				console.log(e)
			}
		},
		components:{
			Stepper
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
	  
</style>
