<template>
	<view>
		<view class="u-page">
			<!-- 所有内容的容器 -->
			<view class="user-head">
				<view class="username">{{userInfo.name}}</view>
				<view class="phone">{{userInfo.phone}}</view>

			</view>
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
				current: 3,
				userInfo:{}
			}
		},
		onLoad() {
			this.userInfo = JSON.parse(localStorage.getItem("userInfo"))
		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
.user-head{
	width: 90%;
	margin: 0 auto;
	padding: 5vw 0;
	.username{
		margin: 3vw 0 1vw 0;
		font-size: 5vw;
	}
	.phone{
		margin:0 0 1vw 0;
		font-size: 3vw;
	}
}

</style>
