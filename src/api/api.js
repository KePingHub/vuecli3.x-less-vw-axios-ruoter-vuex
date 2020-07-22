import req from './interceptors'

export default {
  /**
   * 用户登录
   * @param userName
   * @param userPwd
   * @returns {Promise<AxiosResponse<T>>}
   */
  userLogin: ({ userName, userPwd }) => req.post('/login', {
    userName: userName,
    userPwd: userPwd
  })
}
