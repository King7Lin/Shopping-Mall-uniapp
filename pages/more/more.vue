<template>
	<view class="container">
		<van-tree-select 
			height="100vh" 
			:items="shops" 
			:main-active-index.sync="activeKey"
			:active-id.sync="activeId"
			@click-nav="onNavClick" 
			>
		  <template #content>
					
		  </template>
		</van-tree-select>
	</view>
</template>

<script>

	export default {
		data() {
			return {
				activeKey:0,
				
				shops:[],
			}
		},
		methods: {
			onNavClick(e){
				
				// this.activeKey=e.detail.index
			}
		},
		components:{

		},
		created() {
			uni.request({
				url:'http://127.0.0.1:3007/all/selectMore',
				success: (res) => {
					this.shop = res.data
					console.log(this.shop)
				}
			})
		}
	}
</script>

<style>
	
</style>
