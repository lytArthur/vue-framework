/**
 *  setting 模块接口
 */

import { get } from '../../utils/http'


/**
 * 接口配置列表 interface
 */
export const interfaceList = (params) => get('/setting/api', params)


/**
 * 获取属性列表 getAttributes
 */
export const getAttributes = (params) => get('/pdm/attribute', params)