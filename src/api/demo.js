import request from '../utils/request'

//快速下单列表
export function productList(){
    return request({
        url:'app/web/product/list'
    })
}