<template>
	<view>
			<van-empty
			  v-if="shop"
			  class="custom-image"
			  image="https://img.yzcdn.cn/vant/custom-empty-image.png"
			  description="购物车为空"
			/>
			<van-swipe-cell right-width="60" v-else>
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
			<!-- 底部结算栏 -->
		<van-submit-bar :price="price" button-text="购买" @submit="onSubmit">
		  <van-checkbox v-model="checked">全选</van-checkbox>
		</van-submit-bar>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				shop:[],
				price:0
			}
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
