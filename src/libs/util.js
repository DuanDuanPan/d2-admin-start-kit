/*
 * @Date: 2020-10-12 14:19:11
 * @Author: enjoyjavapan
 * @LastEditors: enjoyjavapan
 * @LastEditTime: 2020-10-12 15:21:51
 * @Description: 描述文件作用
 * @FilePath: \d2-admin-start-kit\src\libs\util.js
 */
import cookies from './util.cookies'
import db from './util.db'
import log from './util.log'

const util = {
    cookies,
    db,
    log
}

/**
 * @description 更新标题
 * @param {String} title 标题
 */
util.title = function(titleText) {
    const processTitle = process.env.VUE_APP_TITLE || '奥兰托协同研发平台'
    window.document.title = `${processTitle}${titleText ? ` | ${titleText}` : ''}`
}

/**
 * @description 打开新页面
 * @param {String} url 地址
 */
util.open = function(url) {
    var a = document.createElement('a')
    a.setAttribute('href', url)
    a.setAttribute('target', '_blank')
    a.setAttribute('id', 'd2admin-link-temp')
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(document.getElementById('d2admin-link-temp'))
}

export default util
