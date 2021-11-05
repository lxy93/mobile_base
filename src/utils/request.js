import axios from "axios"
import Vue from "vue";
import store from "../store";
import util from '../utils/util' //公用方法
//创建axios实例
const service = axios.create({
    baseURL:'/customer_api',
    UserAgent:"51app/iPhone/1.0(iPhone OS;8.4;640x1136)",
    timeout:5000
});
//请求拦截器
service.interceptors.request.use(config=>{
    store.commit('app/SET_LOADING',true);
    if(store.getters.wx_token==''){
        store.commit('app/SET_TOKEN',util.getQueryString('wx_token'))
    }
    config.headers['Authorization'] = store.getters.wx_token;
    return config
},error=>{
    store.commit('app/SET_LOADING',false);
    return Promise.reject(error)
})

//响应拦截器
service.interceptors.response.use(response=>{
    
    if(response.status === 200){

        store.commit('app/SET_LOADING',false)

        if(response.data.errcode===99991){
            console.log('重新登录')
        }
    }
    return response.data
},error=>{
    store.commit('app/SET_LOADING',false)
    return Promise.reject(error.message);
});

export default service
