<!--
 * @Date: 2020-10-12 16:44:10
 * @Author: enjoyjavapan
 * @LastEditors: enjoyjavapan
 * @LastEditTime: 2020-10-20 22:59:00
 * @Description: 用户管理
 * @FilePath: \d2-admin-start-kit\src\views\sysmgr\usermgr\index.vue
-->
<template>
    <d2-container>
        <orient-form />
    </d2-container>
</template>

<script>
export default {
    data() {
        return {}
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
        }
    }
}
</script>

<style></style>
