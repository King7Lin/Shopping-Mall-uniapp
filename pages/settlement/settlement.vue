<template>
	<view>
		<view class="address">
			<van-cell-group>
			  <van-cell title="姓名" value="电话" label="地址" is-link  />
			</van-cell-group>
		</view>
		<view class="shop">
			<van-card
			  v-for="item in shop"
			  :key="item.id"
			  :title='item.title'
			  :thumb='item.img'
			  :desc='item.desc'
			  :num='item.num'
			/>
		</view>
		<view class="pay">
			<van-submit-bar :price="money" button-text="给钱" @clickt="pay" />
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
			this.id = option.id
			this.shop = JSON.parse(option.shop)
			console.log(this.shop.title)
			console.log(this.shop)
			// this.price = option.price
		},
		computed:{
			money(){
				let num = 0
				if(this.shop.length>=1){
					this.shop.forEach(value=>{
						num += value.num*value.price *100
					})
				}else{
					num = this.shop.num * this.shop.price * 100
				}
				
				return num
			}
		}
	}
</script>

<style>
page{
	margin: 2px 0 ;
}
.address{
	margin-bottom: 10px;
	border-bottom: 1px solid gray;
}
.van-card{
	border-bottom: 1px solid gray;
	/* border-top: 1px solid gray; */
	margin-bottom: 5px;
}
/* .shop{
	border: 1px solid gray;
} */
</style>
