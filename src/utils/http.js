

import axios from 'axios'
import { Loading, Message } from 'element-ui'

//超时设定
axios.defaults.timeout = 10000;

// 拦截器 reuquest 
axios.interceptors.request.use(config => {
    return config
}, err => {
    Message.error('请求超时');
    return Promise.reject(err)
})

//拦截器 response  相应错误的统一处理
axios.interceptors.response.use(response => {
    switch(response.status) {}
    return response
}, err => {
    return Promise.reject(err)
})

/**
 * GET 封装
 * @param url
 * @param data
 * @return { Promise }
 * 
 */

export function get(url, params = {}) {
    return new Promise((resolve, reject) => {
        axios.get(url, {
            params: params
        })
            .then((res) => {
                resolve(res.data)
            })
            .catch((err) => {
                reject(err)
            })
    })
}

/**
* POST 封装
* @param url
* @param data
* @return { Promise }
* 
*/

export function post(url, params = {}) {
    return new Promise((resolve, reject) => {
        axios.post(url, params)
            .then((res) => {
                resolve(res.data)
            })
            .catch((err) => {
                reject(err)
            })
    })
}

/**
* PATCH 封装
* @param url
* @param data
* @returns { Promise }
* 
*/

export function patch(url, params = {}) {
    return new Promise((resolve, reject) => {
        axios.patch(url, params)
            .then((res) => {
                resolve(res.data)
            })
            .catch((err) => {
                reject(err)
            })
    })
}


/**
* put 封装
* @param url
* @param data
* @returns { Promise }
* 
*/

export function put(url, params = {}) {
    return new Promise((resolve, reject) => {
        axios.put(url, params)
            .then((res) => {
                resolve(res.data)
            })
            .catch((err) => {
                reject(err)
            })
    })
}