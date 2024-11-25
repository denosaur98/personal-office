import { createWebHistory, createRouter } from 'vue-router'
import App from '@/App.vue'
import AuthPage from '@/pages/AuthPage.vue'
import MainPage from '@/pages/MainPage.vue'

const routes = [
	{ path: '/', component: App, redirect: '/auth' },
	{ path: '/auth', component: AuthPage },
	{ path: '/main', component: MainPage },
]

export default createRouter({
	history: createWebHistory(),
	routes,
})
