<!--
 * @Date: 2020-10-12 16:44:10
 * @Author: enjoyjavapan
 * @LastEditors: enjoyjavapan
 * @LastEditTime: 2020-10-20 23:14:45
 * @Description: 用户管理
 * @FilePath: \d2-admin-start-kit\src\views\sysmgr\usermgr\index.vue
-->
<template>
    <d2-container>
        <orient-form :formComponentList="formComponentList">
            <el-form-item>
                <el-button type="primary" @click="onSubmit">立即创建</el-button>
                <el-button>取消</el-button>
            </el-form-item>
        </orient-form>
    </d2-container>
</template>

<script>
export default {
    data() {
        return {
            formComponentList: [
                {
                    componentName: 'el-input',
                    formLabel: '活动名称'
                },
                {
                    componentName: 'el-select',
                    formLabel: '活动区域',
                    options: [
                        {label: '区域一', value: 'shanghai'},
                        {label: '区域二', value: 'beijing'}
                    ],
                    placeholder: '请选择活动区域'
                },
                {
                    componentName: 'el-date-picker',
                    formLabel: '活动时间',
                    type: 'date',
                    valueFormat: 'yyyy-MM-dd',
                    placeholder: '选择日期'
                },
                {
                    componentName: 'el-time-picker',
                    valueFormat: 'HH:mm:ss',
                    placeholder: '选择时间'
                },
                {
                    componentName: 'el-switch',
                    formLabel: '即时配送'
                },
                {
                    componentName: 'el-checkbox-group',
                    formLabel: '活动性质',
                    options: [
                        {label: '美食/餐厅线上活动'},
                        {label: '地推活动'},
                        {label: '线下主题活动'},
                        {label: '单纯品牌曝光'}
                    ],
                    value: []
                },
                {
                    componentName: 'el-radio-group',
                    formLabel: '特殊资源',
                    options: [{label: '线上品牌商赞助'}, {label: '线下场地免费'}],
                    type: 'textarea'
                }
            ]
        }
    },
    created() {
        // this.$log.capsule('测试日志', 'primary', 'primary')
        // this.$log.capsule('测试日志', 'success', 'success')
        // this.$log.capsule('测试日志', 'warning', 'warning')
        // this.$log.capsule('测试日志', 'danger', 'danger')
        // this.$log.primary('primary style')
        // this.$log.success('success style')
        // this.$log.warning('warning style')
        // this.$log.danger('danger style')
        this.getUsers()
    },
    methods: {
        async getUsers() {
            try {
                const res = await this.$api.SYSMGR_USER_LIST()
                console.log(res)
            } catch (error) {
                console.log(error)
            }
        },
        onSubmit() {
            this.$log.success('submit form')
            const formValueList = this.formComponentList.map(x => x.value)
            console.log({formValueList})
        }
    }
}
</script>

<style></style>
