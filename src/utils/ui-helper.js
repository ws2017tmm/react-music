/*
 * @Description: 
 * @Version: 1.0
 * @Autor: StevenWu
 * @Date: 2021-03-24 11:21:15
 * @LastEditors: StevenWu
 * @LastEditTime: 2021-03-24 15:45:56
 */

export function scrollTo(element, to, duration = 300) {
  if (duration <= 0) return
  let difference = to - element.scrollTop
  let perTick = difference / duration * 10
  
  setTimeout(function() {
      element.scrollTop = element.scrollTop + perTick
      if (element.scrollTop === to) return
      scrollTo(element, to, duration - 10)
  }, 10)
}