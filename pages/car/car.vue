<template>
	<view>
		<p>购物车</p>
		<van-submit-bar :price="price" button-text="购买" @submit="onSubmit">
		  <van-checkbox v-model="checked">全选</van-checkbox>
		</van-submit-bar>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				shop:[
					{
						img:'../static/c4.png',
						name:'白给商城',
						money:999,
						type:'白给'
					},
					{
						img:'../static/c3.png',
						name:'白给商城',
						money:1999,
						type:'白给1'
					},
					{
						img:'../static/c5.png',
						name:'白给商城',
						money:2999,
						type:'白给2'
					}
				],
				price:0
			}
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
