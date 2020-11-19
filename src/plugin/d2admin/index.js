/*
 * @Date: 2020-10-12 14:19:11
 * @Author: enjoyjavapan
 * @LastEditors: enjoyjavapan
 * @LastEditTime: 2020-11-19 13:52:51
 * @Description: 描述文件作用
 * @FilePath: \d2-admin-start-kit\src\plugin\d2admin\index.js
 */
// Element
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// flex 布局库
import 'flex.css'
// 组件
import '@/components'
// svg 图标
import '@/assets/svg-icons'
// 国际化
import i18n from '@/i18n.js'

// 功能插件
import pluginApi from '@/plugin/api'
import pluginError from '@/plugin/error'
import pluginLog from '@/plugin/log'
import pluginOpen from '@/plugin/open'
import esForm from 'vue-easy-form'

export default {
    async install(Vue, options) {
        // 设置为 false 以阻止 vue 在启动时生成生产提示
        // https://cn.vuejs.org/v2/api/#productionTip
        Vue.config.productionTip = false
        // 当前环境
        Vue.prototype.$env = process.env.NODE_ENV
        // 当前的 baseUrl
        Vue.prototype.$baseUrl = process.env.BASE_URL
        // 当前版本
        Vue.prototype.$version = process.env.VUE_APP_VERSION
        // 构建时间
        Vue.prototype.$buildTime = process.env.VUE_APP_BUILD_TIME
        // Element
        Vue.use(ElementUI, {
            i18n: (key, value) => i18n.t(key, value)
        })
        // 插件
        Vue.use(pluginApi)
        Vue.use(pluginError)
        Vue.use(pluginLog)
        Vue.use(pluginOpen)
        Vue.use(esForm, {
            rowHeight: 40,
            rowSpace: 20,
            labelWidth: 100,
            offsetLeft: 0,
            offsetRight: 0,
            colon: false,
            direction: 'h',
            defaultCom: 'el-input', // 如：若用element-ui, 改为el-input
            defaultVal: '', // 对defaultCom这个组件的value设置默认值
            trimDoms: ['input', 'textarea', 'el-input'], // 数组，空数组会全部清空
            hasConsole: false
        })
    }
}
