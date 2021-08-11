import axios from "axios";
import { decodeAuthString, getQuery } from "../utils";
import envConfig from '../config/environmentConfig'

const isDev = process.env.NODE_ENV === 'development';

/**
 * 请求通用配置
 */
const instance = axios.create({

});



// 请求拦截配置
instance.interceptors.request.use((req) => {
    const auth = decodeAuthString(localStorage.token);
    if(!auth) throw Error('获取token失败');
    const params = Object.assign(auth, getQuery());
    if(req.method === "get") {
       req.params = addParams(req.params, params);
    }

    if(req.method === "post") {
        req.data = addParams(req.data, params)
    }

    console.log('------拦截配置：', req)
    return req
},  (error) => {
    return Promise.reject(error);
});


// 响应拦截
instance.interceptors.response.use(function (res) {
    return res
}, function (err) {
    console.log('响应拦截：', err)
    return Promise.reject(err);
})


/**
 * 将传入参数与默认参数进行合并
 * @param target
 * @param params
 */
function addParams(target:any, params:any){
    target = Object.assign({...target}, {
        userId: params.user_id || params.userId,
        hotelId: params.hotel_id || params.hotelId,
        brandId: params.brand_id || params.brandId
    });
    if(isDev) {
        target.merchantId = envConfig.merchantId;
    }
    return target;
}

export default instance;
