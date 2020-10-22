<!--
 * @Date: 2020-10-12 16:44:10
 * @Author: enjoyjavapan
 * @LastEditors: enjoyjavapan
 * @LastEditTime: 2020-10-22 21:57:55
 * @Description: 用户管理
 * @FilePath: \d2-admin-start-kit\src\views\sysmgr\usermgr\index.vue
-->
<template>
    <d2-container>
        <el-container>
            <el-header>配置化表单</el-header>
            <el-main>
                <el-row :gutter="50">
                    <!-- 左侧为表单展示相关 -->
                    <el-col :span="12">
                        <!-- 上方为表单展示 -->
                        <el-card class="box-card">
                            <div slot="header" class="clearfix">
                                <span>表单展示</span>
                            </div>
                            <!-- 传入 formComponentList 配置数据 -->
                            <!-- v-model 绑定表单值 -->
                            <orient-form :formComponentList="formComponentList" v-model="formModel">
                                <el-form-item>
                                    <el-button type="primary" @click="onSubmit">立即创建</el-button>
                                    <el-button>取消</el-button>
                                </el-form-item>
                            </orient-form>
                        </el-card>
                        <!-- 下方为表单值 -->
                        <el-card class="box-card">
                            <div slot="header" class="clearfix">
                                <span>表单数据</span>
                            </div>
                            <form-editor v-model="formModel"></form-editor>
                        </el-card>
                    </el-col>
                    <!-- 右侧为 jsoneditor 编辑器 -->
                    <el-col :span="12">
                        <el-card class="box-card">
                            <div slot="header" class="clearfix">
                                <span>表单配置</span>
                            </div>
                            <!-- v-model 绑定 formComponentList -->
                            <form-editor v-model="formComponentList" height="600px"></form-editor>
                        </el-card>
                    </el-col>
                </el-row>
            </el-main>
        </el-container>
    </d2-container>
</template>

<script>
export default {
    data() {
        return {
            formModel: {
                name: '123'
            },
            formComponentList: [
                {
                    componentName: 'el-input',
                    formLabel: '活动名称',
                    value: 'default value',
                    name: 'name'
                },
                {
                    componentName: 'el-select',
                    formLabel: '活动区域',
                    options: [
                        {label: '区域一', value: 'shanghai'},
                        {label: '区域二', value: 'beijing'}
                    ],
                    placeholder: '请选择活动区域',
                    name: 'region'
                },
                {
                    componentName: 'el-date-picker',
                    formLabel: '活动时间',
                    type: 'date',
                    valueFormat: 'yyyy-MM-dd',
                    placeholder: '选择日期',
                    name: 'date'
                },
                {
                    componentName: 'el-time-picker',
                    valueFormat: 'HH:mm:ss',
                    placeholder: '选择时间',
                    name: 'time'
                },
                {
                    componentName: 'el-switch',
                    formLabel: '即时配送',
                    name: 'send'
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
                    name: 'nature'
                },
                {
                    componentName: 'el-radio-group',
                    formLabel: '特殊资源',
                    options: [{label: '线上品牌商赞助'}, {label: '线下场地免费'}],
                    type: 'textarea',
                    name: 'resource'
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
