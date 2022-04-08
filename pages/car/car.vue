<template>
	<view>
			<van-empty
			  v-if="shop"
			  class="custom-image"
			  image="https://img.yzcdn.cn/vant/custom-empty-image.png"
			  description="购物车为空"
			/>
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
