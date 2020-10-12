<!--
 * @Date: 2020-10-12 14:19:11
 * @Author: enjoyjavapan
 * @LastEditors: enjoyjavapan
 * @LastEditTime: 2020-10-12 16:14:37
 * @Description: 描述文件作用
 * @FilePath: \d2-admin-start-kit\src\views\system\index\page.vue
-->
<template>
    <d2-container class="page"> </d2-container>
</template>

<script>
export default {
    components: {}
}
</script>

<style lang="scss" scoped>
.page {
    .logo {
        width: 120px;
    }
    .btn-group {
        color: $color-text-placehoder;
        font-size: 12px;
        line-height: 12px;
        margin-top: 0px;
        margin-bottom: 20px;
        .btn-group__btn {
            color: $color-text-sub;
            &:hover {
                color: $color-text-main;
            }
            &.btn-group__btn--link {
                color: $color-primary;
            }
        }
    }
}
</style>
