/**
 * 公用正则表达式
 */

var commonPattern = {
  // 特殊字符
  specialCharInQueryFei: /[?!$%^*？！]/im,
  specialCharInQuery: /[?[!$%^*？\]！]/im,
  // specialChar: /[·！#￥（——）：；“”‘’、，|《。》？、【】[\]]/im,
  specialEngModeNeed: /[`~!@#$%^&*()_+<>?:"{}.;'[\]]/im,
  specialCharModeNeed: /[！#￥：；“”‘’、|《。》？、【】[\]]/im,
  specialChar: /[！#￥：；“”‘’、，|《。》？、【】[\]]/im,
  specialCharM: /[#￥|《》【】[\]]/im,
  specialCharB: /[！#￥：；“”‘’、，|《。》？、]/im,
  specialEngB: /[`~!@#$%^&*+<>?:"{},.\/;']/im,
  specialEng: /[`~!@#$%^&*+<>?:"{},.\/;'[\]]/im,
  specialEngM: /[`~@#$%^&*+<>{}\/[\]]/im,
  // 去掉 %
  specialQueryEng: /[`~!@#$^&*+<>?:"{},.\/;'[\]]/im,
  specialEngMY: /[`~!@#$%^&*+<>?:"{}.\/;'[\]]/im,
  specialEngSxp: /[`~!_@#$^&*+<>?:"{},\/;'[\]]/im,
  specialEngBuZheng: /[`~!@#$%^&*+<>?:"{}.\/;'[\]]/im,
  specialIp: /[`~!@#$%^&*()_+<>?:"{},\/;'[\]]/im,
  // 特殊字符去掉 ：.
  specialDataName: /[！#￥；“”‘’、，|《。》？、【】[\]]/im,
  specialEngDataName: /[`~!@#$^&*_+<>?"{},\/;'[\]]/im,
  // 特殊字符去掉()（）
  specialSignChar: /[·！#￥——：；“”‘’、，|《。》？、【】[\]]/im,
  specialSignEng: /[`~!@#$%^&*_+<>?:"{},.\/;'[\]]/im,
  // 特殊字符去掉（）【】[]()
  specialSignCharFei: /[·！#￥——：；“”‘’、，|《。》？、]/im,
  specialSignEngFei: /[`~!@#$%^&*_+<>?:"{},.\/;']/im,
  // 空格
  spaceBar: /^\S*$/,
  headerAndFooter: /(^\s)|(\s$)/,
  // 三位小数金钱
  money: /(^[1-9]([0-9]+)?(\.[0-9]{1,3})?$)|(^(0){1}$)|(^[0-9]\.[0-9]([0-9])?$)/,

  moneyPoint: /^\d+(\.\d+)?$/,

  // 数字
  number: /^\d+(\.\d+)?$/,

  // 手机号
  phone: /^((1[0-9]{10})|((\d{3,4}-)?\d{7,8}))$/,

  // 邮箱
  email: /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/,

  // 仅手机号验证
  onlyPhone: /^((134|135|136|137|138|139|147|150|151|152|157|158|159|182|183|187|188)|(130|131|132|155|156|185|186|145)|(133|153|180|189))[0-9]{8}$/,

  // 中文
  chinaNull: /[\u4e00-\u9fa5]/,

  //
  // bankCard: /^([1-9]{1})(\d{14}|\d{18})$/,

  // ip地址
  ipAddress: /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/
}
/**
 * [公共验证]
 * @param  {[type]}   rule     [description]
 * @param  {[type]}   value    [description]
 * @param  {Function} callback [description]
 * @return {[type]}            [description]
 */

// 报告机构编码
const reportCode = (rule, value, callback) => {
  if (commonPattern.chinaNull.test(value)) {
    callback(new Error('内容不能含中文'))
  } else if (!commonPattern.spaceBar.test(value)) {
    callback(new Error('内容不能含有空格'))
  } else if (commonPattern.specialChar.test(value)) {
    callback(new Error('内容不能填写特殊字符'))
  } else {
    callback()
  }
}

// 数据包名
const dataCodeName = (rule, value, callback) => {
  if (commonPattern.chinaNull.test(value)) {
    callback(new Error('内容不能含中文'))
  } else if (!commonPattern.spaceBar.test(value)) {
    callback(new Error('内容不能含有空格'))
  } else {
    callback()
  }
}

const common_Validate = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('内容不能为空'))
  } else if (!commonPattern.spaceBar.test(value)) {
    callback(new Error('内容不能含有空格'))
  } else if (commonPattern.specialChar.test(value) || commonPattern.specialEng.test(value)) {
    callback(new Error('内容不能填写特殊字符'))
  } else {
    callback()
  }
}
const common_ValidateB = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('内容不能为空'))
  } else if (!commonPattern.spaceBar.test(value)) {
    callback(new Error('内容不能含有空格'))
  } else if (commonPattern.specialCharB.test(value) || commonPattern.specialEngB.test(value)) {
    callback(new Error('内容不能填写特殊字符'))
  } else {
    callback()
  }
}

// 不包含中文
const isChinaNull = (rule, value, callback) => {
  if (commonPattern.chinaNull.test(value)) {
    callback(new Error('内容不能含中文'))
  } else {
    callback()
  }
}

const isValidInput = (rule, value, callback) => {
  if (!commonPattern.spaceBar.test(value)) {
    callback(new Error('内容不能含有空格'))
  } else if (commonPattern.specialChar.test(value) || commonPattern.specialEng.test(value)) {
    callback(new Error('内容不能填写特殊字符'))
  } else {
    callback()
  }
}
const isValidInputBuZheng = (rule, value, callback) => {
  if (!commonPattern.spaceBar.test(value)) {
    callback(new Error('内容不能含有空格'))
  } else if (commonPattern.specialCharInQuery.test(value)) {
    callback(new Error('内容不能填写特殊字符'))
  } else {
    callback()
  }
}
const isValidTengFei = (rule, value, callback) => {
  if (!commonPattern.spaceBar.test(value)) {
    callback(new Error('内容不能含有空格'))
  } else if (commonPattern.specialSignEngFei.test(value) || commonPattern.specialSignCharFei.test(value)) {
    callback(new Error('内容不能填写特殊字符'))
  } else {
    callback()
  }
}
const isSignValidInput = (rule, value, callback) => { // 允许（）的
  if (!commonPattern.spaceBar.test(value)) {
    callback(new Error('内容不能含有空格'))
  } else if (commonPattern.specialSignChar.test(value) || commonPattern.specialSignEng.test(value)) {
    callback(new Error('内容不能填写特殊字符'))
  } else {
    callback()
  }
}
// 特定查询查询客户信息--账户、证件号码
const isValidNameInput = (rule, value, callback) => {
  if (!commonPattern.spaceBar.test(value)) {
    callback(new Error('内容不能含有空格'))
  } else if (commonPattern.specialChar.test(value) || commonPattern.specialEng.test(value)) {
    callback(new Error('内容不能填写特殊字符'))
  } else {
    callback()
  }
}
// 查询 --ip
const isIpValidInput = (rule, value, callback) => {
  if (!commonPattern.spaceBar.test(value)) {
    callback(new Error('内容不能含有空格'))
  } else if (commonPattern.specialChar.test(value) || commonPattern.specialIp.test(value)) {
    callback(new Error('内容不能填写特殊字符'))
  } else {
    callback()
  }
}
// 规则申请事项校验
const isApplyInfoValidInput = (rule, value, callback) => {
  if (!commonPattern.spaceBar.test(value)) {
    callback(new Error('内容不能含有空格'))
  } else if (commonPattern.specialEng.test(value)) {
    callback(new Error('内容不能填写特殊字符'))
  } else {
    callback()
  }
}
// 名单分析
const adminisValidInput = (rule, value, callback) => {
  if (!commonPattern.spaceBar.test(value)) {
    callback(new Error('内容不能含有空格'))
  } else if (commonPattern.specialChar.test(value) || commonPattern.specialEng.test(value)) {
    callback(new Error('内容不能填写特殊字符'))
  } else {
    callback()
  }
}
// 模型提交审核
const adminisValidInputModel = (rule, value, callback) => {
  if (!commonPattern.spaceBar.test(value)) {
    callback(new Error('内容不能含有空格'))
  } else if (commonPattern.specialChar.test(value) || commonPattern.specialEngSxp.test(value)) {
    callback(new Error('内容不能填写特殊字符'))
  } else {
    callback()
  }
}
const headerAndFooter = (rule, value, callback) => {
  if (commonPattern.headerAndFooter.test(value)) {
    callback(new Error('首尾不能有空格'))
  } else {
    callback()
  }
}
const adminisValid = (rule, value, callback) => {
  if (!commonPattern.spaceBar.test(value)) {
    callback(new Error('内容不能含有空格'))
  } else if (commonPattern.specialCharB.test(value) || commonPattern.specialEngB.test(value)) {
    callback(new Error('内容不能填写特殊字符'))
  } else {
    callback()
  }
}
const delDataValidInput = (rule, value, callback) => {
  if (commonPattern.specialDataName.test(value) || commonPattern.specialEngDataName.test(value)) {
    callback(new Error('内容不能填写特殊字符'))
  } else if (commonPattern.headerAndFooter.test(value)) {
    callback(new Error('首尾不能有空格'))
  } else {
    callback()
  }
}

const ValidQueryInput = (rule, value, callback) => {
  if (!commonPattern.spaceBar.test(value)) {
    callback(new Error('内容不能含有空格'))
  } else if (commonPattern.specialCharInQuery.test(value)) {
    callback(new Error('内容不能填写特殊字符'))
  } else {
    callback()
  }
}

const ValidQueryInputFei = (rule, value, callback) => {
  if (!commonPattern.spaceBar.test(value)) {
    callback(new Error('内容不能含有空格'))
  } else if (commonPattern.specialCharInQueryFei.test(value)) {
    callback(new Error('内容不能填写特殊字符'))
  } else {
    callback()
  }
}

const spaceBarAndSpecial = (rule, value, callback) => {
  if (commonPattern.specialCharInQuery.test(value)) {
    callback(new Error('内容不能填写特殊字符'))
  } else if (commonPattern.headerAndFooter.test(value)) {
    callback(new Error('首尾不能有空格'))
  } else {
    callback()
  }
}

const ValidCanSpace = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('内容不能为空'))
  } else if (commonPattern.specialCharB.test(value) || commonPattern.specialEngB.test(value)) {
    callback(new Error('内容不能填写特殊字符'))
  } else if (commonPattern.headerAndFooter.test(value)) {
    callback(new Error('首尾不能有空格'))
  } else {
    callback()
  }
}
const isValidBlank = (rule, value, callback) => {
  if (!commonPattern.spaceBar.test(value)) {
    callback(new Error('内容不能含有空格'))
  } else {
    callback()
  }
}

const isValidNull = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('内容不能为空'))
  } else {
    callback()
  }
}

const isValidMoney = (rule, value, callback) => {
  if (value !== null) {
    if (value.length > 20) {
      callback(new Error('最多输入20位!'))
      return
    }

    if (value === '') {
      callback(new Error('内容不能为空'))
    } else if (!commonPattern.moneyPoint.test(value)) {
      callback(new Error('请输入正确的数字，最多保留三位小数!'))
    } else {
      callback()
    }
  } else {
    callback()
  }
}
// 长度校验
const maxLength = (rule, value, callback) => {
  if (value !== null) {
    if (value.length > 50) {
      callback(new Error('最多输入50位'))
      return
    }
  } else {
    callback()
  }
}
const maxLengthTwenty = (rule, value, callback) => {
  if (value !== null) {
    if (value.length > 20) {
      callback(new Error('最多输入20位'))
      return
    }
  } else {
    callback()
  }
}
// 数字检查
var onlyNumberValidate = (rule, value, callback) => {
  if (value !== null && value !== undefined) {
    if (value === '') {
      callback()
    } else {
      if (!commonPattern.number.test(value)) {
        callback(new Error('必须输入数值'))
      } else {
        callback()
      }
    }
  } else {
    callback()
  }
}
// 数字检查不能为空
var onlyNumberValidateNotNull = (rule, value, callback) => {
  if (value !== null) {
    if (value === '') {
      callback(new Error('内容不能为空'))
    } else {
      if (!commonPattern.number.test(value)) {
        callback(new Error('必须输入数值'))
      } else {
        callback()
      }
    }
  } else {
    callback()
  }
}
// 座机号
var phoneValidate = (rule, value, callback) => {
  if (value !== null) {
    if (value === '') {
      callback()
    } else {
      if (!commonPattern.phone.exec(value)) {
        callback(new Error('请正确输入座机，如：010-56894493'))
      } else {
        callback()
      }
    }
  } else {
    callback()
  }
}

// 手机号
var telValidate = (rule, value, callback) => {
  if (value !== null) {
    if (value === '') {
      callback()
    } else {
      if (!commonPattern.onlyPhone.exec(value)) {
        callback(new Error('请正确输入手机号，如：13655556666'))
      } else {
        callback()
      }
    }
  } else {
    callback()
  }
}

// 邮箱
var emailValidate = (rule, value, callback) => {
  if (!commonPattern.email.exec(value)) {
    callback(new Error('请输入邮箱，如：123456@163.com'))
  } else {
    callback()
  }
}

// 登录用户名
var user_Validate = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('用户名不能为空'))
  } else if (!commonPattern.spaceBar.test(value)) {
    callback(new Error('内容不能含有空格'))
  } else if (commonPattern.specialChar.test(value)) {
    callback(new Error('内容不能填写特殊字符'))
  } else {
    callback()
  }
}

// 登录用户名
var password_Validate = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('密码不能为空'))
  } else if (!commonPattern.spaceBar.test(value)) {
    callback(new Error('密码不能含有空格'))
  } else {
    callback()
  }
}

// ip地址
const isIpAddress = (rule, value, callback) => {
  if (value !== null) {
    if (value === '') {
      callback()
    } else {
      if (!commonPattern.ipAddress.test(value)) {
        callback(new Error('内容格式不符，如：127.0.0.1'))
      } else {
        callback()
      }
    }
  } else {
    callback()
  }
}
// 查询条件不能有空格和特殊字符
const noSpaceAndTs = (rule, value, callback) => {
  if (!commonPattern.spaceBar.test(value)) {
    callback(new Error('内容不能含有空格'))
  } else if (commonPattern.specialChar.test(value) || commonPattern.specialEng.test(value)) {
    callback(new Error('内容不能填写特殊字符'))
  } else {
    callback()
  }
}
// 去掉斜杠
const noSpaceAndTsModelCL = (rule, value, callback) => {
  if (!commonPattern.spaceBar.test(value)) {
    callback(new Error('内容不能含有空格'))
  } else if (commonPattern.specialCharModeNeed.test(value) || commonPattern.specialEngModeNeed.test(value)) {
    callback(new Error('内容不能填写特殊字符'))
  } else {
    callback()
  }
}
// 模型预警配置需要
const noSpaceAndTsModelNeed = (rule, value, callback) => {
  if (!commonPattern.spaceBar.test(value)) {
    callback(new Error('内容不能含有空格'))
  } else if (commonPattern.specialCharModeNeed.test(value) || commonPattern.specialEngModeNeed.test(value)) {
    callback(new Error('内容不能填写特殊字符'))
  } else {
    callback()
  }
}
// 查询条件不能有空格和为空
var noNothing = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('内容不能为空'))
  } else if (!commonPattern.spaceBar.test(value)) {
    callback(new Error('内容不能含有空格'))
  } else {
    callback()
  }
}
var noSpaceAndNothing = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('密码不能为空'))
  } else if (!commonPattern.spaceBar.test(value)) {
    callback(new Error('密码不能含有空格'))
  } else {
    callback()
  }
}
export {
  ValidCanSpace,
  common_Validate,
  common_ValidateB,
  onlyNumberValidate,
  phoneValidate,
  user_Validate,
  emailValidate,
  telValidate,
  isValidMoney,
  isValidInput,
  isValidNameInput,
  isValidInputBuZheng,
  isApplyInfoValidInput,
  isValidBlank,
  isValidNull,
  password_Validate,
  adminisValidInput,
  adminisValid,
  reportCode,
  dataCodeName,
  commonPattern,
  delDataValidInput,
  isIpAddress,
  isChinaNull,
  noSpaceAndTs,
  noSpaceAndTsModelCL,
  isIpValidInput,
  maxLength,
  maxLengthTwenty,
  noSpaceAndNothing,
  onlyNumberValidateNotNull,
  noNothing,
  isSignValidInput,
  isValidTengFei,
  headerAndFooter,
  adminisValidInputModel,
  noSpaceAndTsModelNeed,
  ValidQueryInput,
  ValidQueryInputFei,
  spaceBarAndSpecial
}
