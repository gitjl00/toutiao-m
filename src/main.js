import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 引入字体图标
import '@/assets/fonts/iconfont.css'
// 引入 移动 rem 适配
import 'amfe-flexible/index.min.js'
// 一次性引入组件
import Vant from 'vant'
import 'vant/lib/index.css'

Vue.use(Vant)

Vue.config.productionTip = false

// $store 等于 store
new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
