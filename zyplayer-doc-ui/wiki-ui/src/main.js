import hljs from 'highlight.js'
import 'highlight.js/styles/googlecode.css'
// import 'highlight.js/styles/monokai-sublime.css'

import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHashHistory, useRoute } from 'vue-router'

import ElementUI from 'element-plus'
import 'element-plus/dist/index.css'
import './assets/scss/base.scss'
import Antd from 'ant-design-vue';
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import routes from './routes'
import Vant from 'vant'
import userApi from '@/assets/api/user'
import { createPinia } from 'pinia'

const route = useRoute();
const router = createRouter({
	history: createWebHashHistory(),
	routes,
});
router.beforeEach(async (to, from, next) => {
	// console.log(to);
	// console.log(route);
	let accessToken = to.query.accessToken;
	let id = to.query.id;
	let username = to.query.username;
	if (!accessToken) {
		next();
	} else {
		const awaitMin = await userApi.tokenAuth({ accessToken, id, username });
		next();
	}

});
const app = createApp(App);
app.config.productionTip = false;
app.use(Antd)
app.use(ElementUI, {
	locale: zhCn,
});
app.use(Vant);
app.use(router);
app.use(createPinia());
app.mount('#app');

app.directive('highlight', function (el) {
	let blocks = el.querySelectorAll('pre code');
	blocks.forEach((block) => {
		hljs.highlightBlock(block);
	});
});
