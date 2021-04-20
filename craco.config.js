/*
 * @Description: 
 * @Version: 1.0
 * @Autor: StevenWu
 * @Date: 2021-02-25 17:35:23
 * @LastEditors: StevenWu
 * @LastEditTime: 2021-02-25 17:47:50
 */
const path = require("path")
const resolve = dir => path.resolve(__dirname, dir)

module.exports = {
  webpack: {
    alias: {
      "@" : resolve("src")
    }
  }
}