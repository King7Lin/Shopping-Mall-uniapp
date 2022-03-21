<template>
	<view class="container">
		<p>首页</p>
		<commodity :shop="shop"></commodity>
	</view>
</template>

<script>
	import commodity from "../../components/commodity.vue"
	export default {
		data() {
			return {
				shop:[
					{
						img:'../static/c4.png',
						name:'白给商城1',
						money:999
					},
					{
						img:'../static/c3.png',
						name:'白给商城2',
						money:1999
					},
					{
						img:'../static/c5.png',
						name:'白给商城3',
						money:2999
					}
				]
			}
		},
		methods: {

		},
		components:{
			commodity
		}
	}
</script>

<style>
	.container {
		padding: 20px;
		font-size: 14px;
		line-height: 24px;
	}
</style>
