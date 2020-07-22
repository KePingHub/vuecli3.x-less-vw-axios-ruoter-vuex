import api from '@/api/api'

import { CONFIG_VERSION } from '@/utils/platformConfig'
import {
  GET_SYS_USER_INFO,
  LOGIN,
  LOGOUT
} from '../actionTypes'
import {
  SYS_USER,
  TOKEN,
  VERSION
} from '@/utils/storageKeys'
import {
  UPDATE_TOKEN,
  UPDATE_USER_INFO,
  CLEAR_ALL_USER_INFO
} from '../mutationTypes'

let version = localStorage.getItem(VERSION)

if (CONFIG_VERSION !== version) {
  try {
    localStorage.clear()
    localStorage.setItem(VERSION, CONFIG_VERSION)
  } catch (e) {
    console.log('clearStorageErr', e)
    localStorage.removeItem(SYS_USER)
    localStorage.removeItem(TOKEN)
  }
}

let sysUserInfo = null
let token = ''
try {
  sysUserInfo = localStorage.getItem(SYS_USER)
  token = localStorage.getItem(TOKEN)
} catch (e) {
  console.log('getStorageErr', e)
}

export default {
  state: {
    userInfo: sysUserInfo || {},
    token: token || ''
  },
  getters: {
    isLogin (state) {
      return !!state.token
    }
  },
  mutations: {
    // 更新并保存用户信息
    [UPDATE_USER_INFO] (state, userInfo) {
      state.userInfo = userInfo
      localStorage.setItem(SYS_USER, userInfo)
    },
    // 更新并保存token
    [UPDATE_TOKEN] (state, newToken) {
      state.token = newToken
      localStorage.setItem(TOKEN, newToken)
    },
    // 退出登录 清除所有用户信息
    [CLEAR_ALL_USER_INFO] (state) {
      state.userInfo = {}
      state.token = ''
      localStorage.removeItem(TOKEN)
      localStorage.removeItem(SYS_USER)
    }
  },
  actions: {
    // 获取系统用户信息
    async [GET_SYS_USER_INFO] ({ commit, state }) {
      // try {
      //   let { data } = await api.getUserInfo({ mobilePhone: state.userInfo.moblilePhone })
      //   console.log(data)
      //   commit(UPDATE_USER_INFO, data[0])
      // } catch (e) {
      //   console.log(e)
      // }
    },
    // 登录
    async [LOGIN] ({ commit }, { phoneNum, pwd, webToken, code }) {
      // try {
      //   let data = await api.login({ mobilePhone: phoneNum, password: pwd, webToken, code })
      //   commit(UPDATE_USER_INFO, data.data[0])
      //   commit(UPDATE_TOKEN, webToken)
      //   console.log(data)
      // } catch (e) {
      //   console.log(e)
      // }
    },
    // 退出登录
    async [LOGOUT] ({ commit }) {
      // try {
      //   let data = await api.loginOut()
      //   if (data.code === 0) {
      //     wx.showToast({
      //       title: data.msg,
      //       icon: 'none',
      //       success: () => {
      //         commit(CLEAR_ALL_USER_INFO)
      //         setTimeout(() => {
      //           wx.reLaunch({
      //             url: pageUrl.ACCOUNT__USER_LOGIN
      //           })
      //         }, 1500)
      //       }
      //     })
      //   }
      //   console.log(data)
      // } catch (e) {
      //   console.log(e)
      // }
    }
  }
}
