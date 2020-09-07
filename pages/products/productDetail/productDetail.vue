<template>
	<web-view :src="src[index]"></web-view>
</template>

<script>
export default {
	data () {
		return {
			index: 0,
			src: [
				'https://tpdataprod.cntpib.com/tb-web/#/pages/productDetail?goods_id=58',
				'https://pay.tpi.cntaiping.com/weshop/dft/gxb-a/0320000000001008940001/JC33/index?subAgencyCode=ZYTDGD'
			]
		}
	},
	methods: {
		
	},
	onLoad (option) {
		console.log(option)
		console.log(this.$_router.extract(option))
		this.index = this.$_router.extract(option).index
	}
}
</script>

<style>
</style>
