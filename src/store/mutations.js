const mutations = {
	setFontValue(state, size) {
		state.font.fontValue = size
	},
	setRootSize(state, size) {
		state.font.rootSize = size
	},
	setFontType(state, type) {
		state.font.fontType = type
	},
	setDark(state) {
		state.dark = !state.dark
	},
	setNextPath(state,path) {
		state.nextPath = path
	},
	setKeepLogin(state, value) {
		state.keepLogin = value
	},
	setUserLocal(state, value) {
		state.userLocal = value
	},
	setUserSession(state, value) {
		state.userSession = value
	}
}
export default mutations
