import {
  CHANGE_PERSONAL_CENTER_HOME__IS_REFRESH_STATUS
} from '../mutationTypes'

export default {
  state: {
    personalCenterHomeIsRefresh: true
  },
  mutations: {
    // 个人中心
    [CHANGE_PERSONAL_CENTER_HOME__IS_REFRESH_STATUS] (state, isRefresh) {
      state.personalCenterHomeIsRefresh = !!isRefresh
    }
  }
}
