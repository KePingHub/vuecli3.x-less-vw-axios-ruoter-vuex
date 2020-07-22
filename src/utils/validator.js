// 验证器

/**
 * 替换字符串中的空白字符
 * @param str
 * @returns {void | string | *}
 */
export const replaceSpaceChar = (str) => {
  return str.replace(/\s/gi, '')
}

// 正则匹配
const Pattern = {
  isEmpty: /(^\s*)|(\s*$)/g,
  isNum: /^[0-9]+$/,
  isCn: /^[\u4E00-\u9FA5]+$/,
  isCnAndEn: /^[\u4E00-\u9FA5a-zA-Z]+$/,
  isCnAndEnAndNum: /^[\u4e00-\u9fa5a-zA-Z0-9]+$/,
  isEnAndNum: /^[a-zA-Z0-9]+$/,
  isCnName: /^[\u4E00-\u9FA5]{2,}$/,
  isPassword: /^(?![0-9]+$)(?![a-zA-Z]+$)[^\u4E00-\u9FA5\s]{6,20}$/, // 非纯数字纯字母（非中文字符或者空白符）
  isAuthCode: /^[0-9]{6}$/,
  isMobile: /^1[3|4|5|6|7|8][0-9]{9}$/,
  isTelAndMobile: /^(1[3|4|5|7|8][\d]{9}|0[\d]{2,3}-[\d]{7,8}|400[-]?[\d]{3}[-]?[\d]{4})$/
}

export const validator = {
  /**
   * 执行正则表达式
   * @param pattern 校验的正则表达式
   * @param strValue 校验的值
   * @returns {boolean}
   */
  executeExp: function (pattern, strValue) {
    return pattern.test(strValue)
  },
  /**
   * 判断字符串是否为空
   * @param strValue 校验的值
   * @returns {boolean}
   */
  isEmpty: function (strValue) {
    strValue = strValue.replace(Pattern.isEmpty, '')
    return strValue.length === 0
  },
  /**
   * 判断字符串是否非空
   * @param strValue 校验的值
   * @returns {boolean}
   */
  isNotEmpty: function (strValue) {
    return !this.isEmpty(strValue)
  },
  /**
   * 判断字符串是否为中文
   * @param strValue
   * @returns {*}
   */
  isCn: function (strValue) {
    if (this.isEmpty(strValue)) {
      return false
    }

    return this.executeExp(Pattern.isCn, strValue)
  },
  /**
   * 判断是否为中英文
   * @param strValue 校验的值
   * @returns {boolean}
   */
  isCnAndEn: function (strValue) {
    if (this.isEmpty(strValue)) {
      return false
    }

    return this.executeExp(Pattern.isCnAndEn, strValue)
  },
  /**
   * 判断是否为中文名字
   * @param strValue
   * @returns {*}
   */
  isCnName: function (strValue) {
    if (this.isEmpty(strValue)) {
      return false
    }
    return this.executeExp(Pattern.isCnName, strValue)
  },
  /**
   * 判断是否为中英文、数字
   * @param strValue 校验的值
   * @returns {boolean}
   */
  isCnAndEnAndNum: function (strValue) {
    if (this.isEmpty(strValue)) {
      return false
    }

    return this.executeExp(Pattern.isCnAndEnAndNum, strValue)
  },
  /**
   * 判断是否位英文、数字
   * @param strValue
   * @returns {*}
   */
  isEnAndNum: function (strValue) {
    if (this.isEmpty(strValue)) {
      return false
    }

    return this.executeExp(Pattern.isEnAndNum, strValue)
  },
  /**
   * 判断验证码格式
   * @param strValue 校验的值
   * @returns {boolean}
   */
  isAuthCode: function (strValue) {
    if (this.isEmpty(strValue)) {
      return false
    }
    return this.executeExp(Pattern.isAuthCode, strValue)
  },
  /**
   * 判断是否为手机号码
   * @param strValue 校验的值
   * @returns {boolean}
   */
  isMobile: function (strValue) {
    if (this.isEmpty(strValue)) {
      return false
    }
    return this.executeExp(Pattern.isMobile, strValue)
  },
  /**
   * 判断是否为手机或电话号码
   * @param strValue 校验的值
   * @returns {boolean}
   */
  isTelAndMobile: function (strValue) {
    if (this.isEmpty(strValue)) {
      return false
    }
    return this.executeExp(Pattern.isTelAndMobile, strValue)
  },
  /**
   * 判断是否符合密码规则
   * @param strValue 校验的值
   * @returns {boolean}
   */
  isPassword: function (strValue) {
    if (this.isEmpty(strValue)) {
      return false
    }
    return this.executeExp(Pattern.isPassword, strValue)
  },
  /**
   * 对象是否为空
   * @param obj 检验对象
   * @returns {boolean}
   */
  isEmptyObj: (obj) => {
    return Object.keys(obj).length === 0
  },
  /**
   * 是否在范围长度内
   * @param strValue
   * @param lenArr 范围数组 [1, 10] 长度在1-10内
   * @returns {boolean}
   */
  isLenRange: (strValue, lenArr) => {
    return strValue.length >= lenArr[0] && strValue.length <= lenArr[1]
  },
  /**
   * 是否在数值范围内
   * @param numValue
   * @param numArr 范围数组 [1, 10] 数值在1-10内
   * @returns {boolean}
   */
  isNumRange: (numValue, numArr) => {
    return numValue >= numArr[0] && numValue <= numArr[1]
  }
}
