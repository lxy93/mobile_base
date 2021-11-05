const state = {
    wx_token:'',
    loading:false //加载
}

const mutations = {
    SET_TOKEN(state,data){
        state.wx_token = data;
    },
    SET_LOADING(state,data){
        state.loading = data
    }
}

const actions = {
    set_token({commit},data){
        commit('SET_TOKEN',data)
    }
}

export default {
    namespaced:true,
    state,
    mutations,
    actions
}