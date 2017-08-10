/**
 * 工具函数集合
 */

// 判断是否是手机客户端
export const isMobile = () => {
  return /mobile/i.test(window.navigator.userAgent)
}
