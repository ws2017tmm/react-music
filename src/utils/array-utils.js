/*
 * @Description: 
 * @Version: 1.0
 * @Autor: StevenWu
 * @Date: 2021-03-29 11:52:56
 * @LastEditors: StevenWu
 * @LastEditTime: 2021-03-29 12:22:30
 */

export const spArr = (arr, num) => { 
  if (!(num && num > 0)) return arr
  if (arr.length <= num) return arr
  let newArr = [] 
  for (let i = 0; i < arr.length;) { 
    newArr.push(arr.slice(i, i += num))
  }
  return newArr
}