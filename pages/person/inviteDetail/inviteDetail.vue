<template>
	<!-- 邀请明细 -->
	<scroll-view scroll-y="true" class="inviteDetailPage">
		<block v-for="(item, index) in list" :key="index">
			<InviteItem :item="item"></InviteItem>
		</block>
	</scroll-view>
</template>

<script>
import InviteItem from '@/components/common/InviteItem/InviteItem'
export default {
	components: {
		InviteItem
	},
	data () {
		return {
			list: [
				{
					name: '朱飞燕',
					status: 0,
					register: '2020/09/02 15:06:01',
					birth: '1951/06/21',
					phone: '18911110000'
				},
				{
					name: '朱飞燕',
					status: 1,
					register: '2020/09/02 15:06:01',
					birth: '1951/06/21',
					phone: '18911110000'
				},
				{
					name: '朱飞燕',
					status: 0,
					register: '2020/09/02 15:06:01',
					birth: '1951/06/21',
					phone: '18911110000'
				},
				{
					name: '朱飞燕',
					status: 1,
					register: '2020/09/02 15:06:01',
					birth: '1951/06/21',
					phone: '18911110000'
				}
			]
		}
	}
}
</script>

<style lang="less" scoped>
.inviteDetailPage {
	width: 100%;
	height: 100vh;
}
/* #ifdef H5 */
.inviteDetailPage {
	height: calc(100vh - 88rpx) !important;
}	
/* #endif */
</style>
