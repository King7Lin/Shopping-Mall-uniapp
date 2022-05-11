<template>
	<view>
		<view class="address">
			
		</view>
		<view class="shop">
			
		</view>
		<view class="pay">
			<van-submit-bar :price="price" button-text="给钱" @submit="onSubmit" />
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				price:0
			}
		},
		methods: {
			
		},
		onLoad(option) {
			console.log(option)
			this.price = option.price
		}
	}
</script>

<style>

</style>
