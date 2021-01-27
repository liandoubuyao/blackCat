<template>
	<view>
		<view class="u-page">
			<!-- 所有内容的容器 -->
			食谱
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
				current: 2
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style>

</style>
