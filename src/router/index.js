import { createWebHistory, createRouter } from 'vue-router'
import App from '@/App.vue'
import AuthPage from '@/pages/AuthPage.vue'

const routes = [
	{ path: '/', component: App, redirect: '/auth' },
	{ path: '/auth', component: AuthPage },
]

export default createRouter({
	history: createWebHistory(),
	routes,
})
