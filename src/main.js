import Vue from 'vue'
import 'bootstrap'
import 'babel-polyfill'
import 'bootstrap/dist/css/bootstrap.css'
import VueFetch from './plugins/fetch'
import './finelets/components/global-components'
import AppLayout from './components/AppLayout.vue'
import router from './router'
import * as filters from './filters'
import store from './store'
import {
  sync
} from 'vuex-router-sync'

sync(store, router)

for (const key in filters) {
  Vue.filter(key, filters[key])
}

Vue.use(VueFetch, {
  loginUrl: process.env.NODE_ENV === 'production' ? 'http://192.168.5.166/textrade/auth/login' : 'http://localhost:9501/textrade/auth/login',
  entryUrl: process.env.NODE_ENV === 'production' ? 'http://192.168.5.166/textrade/index.html' : 'http://localhost:9501/textrade/index.html',
  baseUrl: process.env.NODE_ENV === 'production' ? 'http://192.168.5.166/textrade/api' : 'http://localhost:9501/textrade/api'
})

async function main () {
  await store.dispatch('entry')
  new Vue({
    ...AppLayout,
    router,
    store
  }).$mount('#app')
}

main()
