/*
 * @Description: file information
 * @Author: enjoyjavapan
 * @Date: 2020-10-12 20:31:13
 * @LastEditors: enjoyjavapan
 * @LastEditTime: 2020-10-22 21:38:55
 */
import Vue from 'vue'

import d2Container from './d2-container'

// 注意 有些组件使用异步加载会有影响
Vue.component('d2-container', d2Container)
Vue.component('d2-icon', () => import('./d2-icon'))
Vue.component('d2-icon-svg', () => import('./d2-icon-svg/index.vue'))
Vue.component('orient-form', () => import('./orient/orient-form/index.vue'))
Vue.component('form-editor', () => import('./orient/orient-form/form-editor.vue'))
