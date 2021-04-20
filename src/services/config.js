/*
 * @Description: 
 * @Version: 1.0
 * @Autor: StevenWu
 * @Date: 2021-03-03 17:28:03
 * @LastEditors: StevenWu
 * @LastEditTime: 2021-03-03 17:28:21
 */
const devBaseURL = "http://123.207.32.32:9001";
const proBaseURL = "http://123.207.32.32:9001";

export const BASE_URL = process.env.NODE_ENV === 'development' ? devBaseURL: proBaseURL;

export const TIMEOUT = 5000;
