

import axios from 'axios'
import { Loading, Message } from 'element-ui'

// 拦截器 reuquest 
var loadinginstace
axios.interceptors.request.use(config => {
    loadinginstace = Loading.service({ fullscreen: true })
    return config
}, err => {
    loadinginstace.close()
    return Promise.reject(err)
})

//拦截器 response
axios.interceptors.response.use(response => {
    loadinginstace.close()
    return response
}, err => {
    loadinginstace.close()
    if(err.response) {
        switch(err.response.status) {
            case 404:
            console.log('this is 404 page')
        }
    }
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