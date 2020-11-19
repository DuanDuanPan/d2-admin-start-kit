<!--
 * @Description: Orient Form组件
 * @Author: enjoyjavapan
 * @Date: 2020-10-20 22:56:08
 * @LastEditors: enjoyjavapan
 * @LastEditTime: 2020-11-18 14:23:16
-->
<template>
    <el-form ref="form" label-width="80px" :model="formModel">
        <!-- 遍历 formComponentList，生成表单组件列表 -->
        <!-- 通过 formLabel 配置左侧 label 标签名称 -->
        <el-form-item :label="item.formLabel" v-for="(item, index) in formComponentList" :key="index">
            <!-- 通过 v-if 判断，插入对应的表单组件 -->
            <!-- 每个表单组件都有 v-model 来绑定 value 值 -->
            <el-input
                v-if="item.componentName === 'el-input'"
                v-model="formModel[item.name]"
                @change="updateValue"
                :type="item.type"
                :placeholder="item.placeholder"
            ></el-input>
            <el-select
                v-if="item.componentName === 'el-select'"
                v-model="formModel[item.name]"
                @change="updateValue"
                :placeholder="item.placeholder"
            >
                <!-- select、checkbox-group、radio-group 等选项组件可通过 options 来配置相应的选项 -->
                <el-option
                    v-for="option in item.options"
                    :label="option.label"
                    :value="option.value"
                    :key="option.value"
                ></el-option>
            </el-select>
            <!-- 日期和时间组件，可通过 valueFormat 配置值的格式 -->
            <el-date-picker
                v-if="item.componentName === 'el-date-picker'"
                :type="item.type || 'date'"
                :value-format="item.valueFormat"
                :placeholder="item.placeholder"
                v-model="formModel[item.name]"
                @change="updateValue"
            ></el-date-picker>
            <el-time-picker
                v-if="item.componentName === 'el-time-picker'"
                :value-format="item.valueFormat"
                :placeholder="item.placeholder"
                v-model="formModel[item.name]"
                @change="updateValue"
            ></el-time-picker>
            <el-switch
                v-if="item.componentName === 'el-switch'"
                v-model="formModel[item.name]"
                @change="updateValue"
            ></el-switch>
            <el-checkbox-group
                v-if="item.componentName === 'el-checkbox-group'"
                v-model="formModel[item.name]"
                @change="updateValue"
            >
                <el-checkbox v-for="option in item.options" :label="option.label" :key="option.label">{{
                    option.text || option.label
                }}</el-checkbox>
            </el-checkbox-group>
            <el-radio-group
                v-if="item.componentName === 'el-radio-group'"
                v-model="formModel[item.name]"
                @change="updateValue"
            >
                <el-radio v-for="option in item.options" :label="option.label" :key="option.label">{{
                    option.text || option.label
                }}</el-radio>
            </el-radio-group>
        </el-form-item>
        <!-- slot 留个性化的内容 -->
        <slot></slot>
    </el-form>
</template>

<script>
export default {
    // 传入选项
    props: {
        // 表单组件信息
        formComponentList: {
            type: Array,
            default: () => []
        },
        value: null
    },
    model: {
        event: 'change',
        prop: 'value'
    },
    data() {
        return {
            // 内部值，用于与外部值比较和更新
            formModel: {}
        }
    },
    watch: {
        value(val) {
            this.updateFormModel(val)
        }
    },
    methods: {
        updateValue() {
            // 更新外部值，需要变更应用才会生效
            this.$emit('change', {...this.formModel})
            this.$children[0].$children[0].$data.validateState = 'error'
            this.$children[0].$children[0].$data.validateMessage = '外部错误'
        },
        updateFormModel(value) {
            const formModelInit = {}
            this.formComponentList.forEach(item => {
                if (item.componentName === 'el-checkbox-group') {
                    formModelInit[item.name] = []
                }
            })
            this.formModel = value ? {...formModelInit, ...value} : {...formModelInit, ...this.formModel}
        }
    },
    created() {
        this.updateFormModel(this.value)
    }
}
</script>

<style></style>
