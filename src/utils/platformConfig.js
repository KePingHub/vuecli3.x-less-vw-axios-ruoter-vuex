
export const ENV = 'dev' // 环境
let isDebug = false
let baseUrl = ''

if (ENV === 'dev') {
  isDebug = true
  baseUrl = 'http://47.113.106.164:8080'
} else {
  baseUrl = ''
}

export const IS_DEBUG = isDebug
export const BASE_URL = baseUrl

export const CONFIG_VERSION = 'dev_1.0'
