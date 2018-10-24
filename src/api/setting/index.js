/**
 *  setting 模块接口
 */

import { get } from '../../util/http'


/**
 * 接口配置列表 interface
 */
export const interfaceList = (params) => get('/setting/api', params)