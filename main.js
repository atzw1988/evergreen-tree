import Vue from 'vue'
import App from './App'

import pageHead from './components/page-head.vue'
import pageFoot from './components/page-foot.vue'
import uLink from '@/components/uLink.vue'
import TreeButton from '@/components/common/TreeButton/TreeButton.vue'
import Notify from '@/components/common/Notify/Notify.vue'
import router from '@/router/index.js'
import store from './store'
import base from '@/util/base.js'

Vue.config.productionTip = false

Vue.prototype.$store = store
Vue.prototype.$_router = router
Vue.prototype.$base = base
Vue.prototype.$backgroundAudioData = {
	playing: false,
	playTime: 0,
	formatedPlayTime: '00:00:00'
}
Vue.prototype.$adpid = "1111111111"

Vue.component('page-head', pageHead)
Vue.component('page-foot', pageFoot)
Vue.component('uLink', uLink)
Vue.component('tree-button', TreeButton)
Vue.component('Notify', Notify)

App.mpType = 'app'

const app = new Vue({
	store,
	...App
})
app.$mount()
