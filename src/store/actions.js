
import types from "./type.js"

var actions={
	change:({commit},item) => {
    commit(types.CHANGE,item);
	},
	showChannelsPage:({commit}) => {
		commit(types.SHOWCHANNELS)
	},
	hideChannelsPage:({commit}) => {
		commit(types.HIDECHANNELS)
	},
	showLoginPage:({commit}) => {
		commit(types.SHOWLOGIN)
	},
	hideLoginPage:({commit}) => {
		commit(types.HIDELOGIN)
	}
}



export default actions;