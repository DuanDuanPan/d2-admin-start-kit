<!--
 * @Date: 2020-10-12 16:44:10
 * @Author: enjoyjavapan
 * @LastEditors: enjoyjavapan
 * @LastEditTime: 2020-10-12 17:13:05
 * @Description: 用户管理
 * @FilePath: \d2-admin-start-kit\src\views\sysmgr\usermgr\index.vue
-->
<template>
    <d2-container :betterScroll="betterScroll">
        <template slot="header">header</template>
        系统管理-用户管理
        针对集团公司各成员单位在信息化建设过程中信息系统架构不统一、业务流程数据集成度不高、知识构建及推送不及时等问题，通过数字化管控基础平台的建设，积极推动基于统一架构的知识管理、图样资料管理等业务应用的数字化建设，形成软件接口标准规范，提升数字化管控系统的二次开发能力、系统集成能力和数据可视化展会能力，达到满足集团公司战略与财务管控的目的。
        针对基础平台与示范应用之间接口集成，保证接口灵活通信，减少耦合引起的集成成本增加，从安全、高效、稳定、灵活等多维度综合考虑，进行应用开发软件接口标准的制订工作，包括常用接口通讯协议及常用接口通讯格式。并在此基础上开发软件接口标准中间件原型系统，以此验证接口标准制订的合理性。
        <template slot="footer">footer</template>
    </d2-container>
</template>

<script>
export default {
    data() {
        return {
            betterScroll: true
        }
    }
}
</script>

<style></style>
