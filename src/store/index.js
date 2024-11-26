import { createStore } from 'vuex'

export default createStore({
	state() {
		return {
			login: '',
			password: '',
			isAuthenticated: false,
			isSelected: null,
		}
	},
	mutations: {
		GET_LOGIN(state, payload) {
			state.login = payload.login
		},
		GET_PASSWORD(state, payload) {
			state.password = payload.password
		},
		SET_AUTH_STATUS(state, payload) {
			state.isAuthenticated = payload.isAuthenticated
		},
		SET_SELECTED(state, payload) {
			state.isSelected = payload.isSelected
		},
		RESET_SELECTED(state) {
			state.isSelected = null
		},
	},
	actions: {},
})
