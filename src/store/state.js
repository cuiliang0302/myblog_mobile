const state = {
  // 字体大小设置
  font: {
    fontSize: 50,
    fontType: '标准'
  },
  // 是否开启暗黑模式
  dark: false,
  // 是否保持登录
  keepLogin: false,
  // 保持登录用户信息(localStorage)
  userLocal: {},
  // 临时登录用户信息(sessionStorage)
  userSession: {}
}
export default state

