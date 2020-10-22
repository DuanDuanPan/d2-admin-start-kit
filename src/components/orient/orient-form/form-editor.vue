<!--
 * @Description: file information
 * @Author: enjoyjavapan
 * @Date: 2020-10-22 21:27:02
 * @LastEditors: enjoyjavapan
 * @LastEditTime: 2020-10-22 21:37:18
-->
<template>
    <div style="height:600px">
        <div id="jsoneditor"></div>
    </div>
</template>

<script>
import JSONEditor from 'jsoneditor/dist/jsoneditor-minimalist'
export default {
    data() {
        return {
            editor: null,
            innerValue: null
        }
    },
    model: {
        event: 'change',
        innerValue: 'value'
    },
    props: {
        options: {
            type: Object,
            default: () => {}
        },
        isReadonly: {
            type: Boolean,
            defalt: false
        },
        value: null
    },
    watch: {
        options(val) {
            this.setOption(val)
        },
        value(newVal, oldVal) {
            if (JSON.stringify(newVal) !== JSON.stringify(oldVal)) {
                this.editor.set(newVal)
            }
        }
    },
    mounted() {
        var options = this.isReadonly
            ? {
                  mode: 'view'
              }
            : {
                  mode: 'code',
                  modes: ['code', 'form', 'tree', 'view'],
                  onChange: () => {
                      try {
                          const value = this.editor.get()
                          this.setValue(value)
                      } catch (e) {
                          this.$log.warning(e)
                      }
                  }
              }
        options = Object.assign(options, this.options)
        this.editor = new JSONEditor(this.$el, options)
        if (this.value) {
            this.editor.set(this.value)
        }
    },
    methods: {
        setValue(val) {
            this.innerValue = val
            this.$emit('change', val)
        }
    }
}
</script>

<style scoped>
@import '~jsoneditor/dist/jsoneditor.min.css';
</style>>
