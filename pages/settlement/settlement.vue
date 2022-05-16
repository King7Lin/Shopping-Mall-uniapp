<template>
	<view>
		<view class="address">
			
		</view>
		<view class="shop">
			<van-card
			  v-for="item in shop"
			  :key="item[0].id"
			/>
		</view>
		<view class="pay">
			<van-submit-bar :price="price" button-text="给钱" @clickt="pay" />
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				price:0,
				id:0,
				shop:[]
			}
		},
		methods: {
			pay(){
				
			}
		},
		onLoad(option) {
			console.log(option)
			// this.id = option.id.split(',')
			this.id = '47,48'
			uni.request({
				url:'http://127.0.0.1:3007/all/ReadyPay?id=' + this.id,
				success: (res) => {
					console.log(res)
					let {data} = res
					for(let i=0;i<data.length;i++){
						this.shop[i]=data[0]
					}
				}
			})
			console.log(this.shop)
			this.price = option.price
		}
	}
</script>

<style>

</style>
