<!--
 * @Date: 2020-11-18 17:07:37
 * @Author: enjoyjavapan
 * @LastEditors: enjoyjavapan
 * @LastEditTime: 2020-11-19 15:53:35
 * @Description: 角色管理
 * @FilePath: \d2-admin-start-kit\src\views\sysmgr\rolemgr\index.vue
-->
<template>
    <d2-container>
        <es-form ref="form" :schema="formSchema" v-model="formValue"></es-form>
    </d2-container>
</template>

<script>
export default {
    data() {
        return {
            formValue: {},
            formSchema: {
                title: '表单名称',
                ui: {
                    showBody: true,
                    colon: true
                },
                // 从一个对象开始，里面包含一个properties
                // 第一级ui在应用过程中一般都不会配置，基本都是使用全局配置(全局配置在esForm注册时设置)
                properties: {
                    // 最外层的properties(第一层级)
                    name: {
                        label: '名称',
                        component: {
                            name: 'el-input',
                            props: {
                                placeholder: '请输入投放目标'
                            },
                            ref: 'nameRef', // 索引值，可以通过 form.getRef("testRef")取出
                            actions: [
                                {
                                    // 默认为click, 多个事件写法: ["change", "input"]或"change input"
                                    trigger: 'change',
                                    // options =>
                                    handler: ({value, event, pathKey, index, idxChain, target}) => {
                                        target.$parent.$parent.schema.component.props.clearable = true
                                    }
                                }
                            ], // 见下面
                            value: '首页位置' // 组件的默认值
                        }
                    },
                    baseInfo: {
                        properties: {
                            // 下一层级(第二层级)：properties理论上可以无限级下去
                            age: {
                                label: '年龄',
                                component: 'el-input-number',
                                value: 18
                            },
                            score: {
                                label: '得分',
                                component: 'el-rate',
                                value: 4,
                                rowHeight: 20 // 覆盖上一级的ui.rowHeight(若没有ui就往上取，直到全局)
                            }
                        }
                    }
                }
            }
        }
    }
}
</script>

<style></style>
