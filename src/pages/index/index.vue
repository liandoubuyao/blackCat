<template>
	<view>
		<view class="u-page" @click="reLaunch('/pages/login/login')">
			<!-- 所有内容的容器 -->
			首页
		</view>
		<!-- 与包裹页面所有内容的元素u-page同级，且在它的下方 -->
		<u-tabbar v-model="current" :list="footBarList" :mid-button="false"></u-tabbar>
	</view>
</template>

<script>
	import { tabBar } from '../../../common/common'
	export default {
		data() {
			return {
				footBarList: tabBar,
				current: 0
			}
		},
		onLoad:function(option) {
			console.log(uni)
			if(!window.localStorage.getItem('userInfo')){
				//页面跳转
				this.reLaunch('/pages/login/login')
			}

		},
		methods: {
			reLaunch(path){
				uni.reLaunch({
						url: path
				});		
			}
		}
	}
</script>

<style>

</style>
