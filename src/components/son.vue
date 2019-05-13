<template>
  <div>
    <P>我是son p标签 样式不会波及到这</P>
    我是自定义组件son-儿子
    {{title}}---{{lifemsg}}---{{num}}---{{objdata.name}}---{{objdata.age}}
  </div>
</template>

<script>
export default {
  name: 'son',
  data () {
    return {}
  },
  // props: [ 'title', 'lifemsg', 'num' ]}
  // 带传参数据类型校验
  props: {
    title: [String, Number],
    lifemsg: {
      type: String,
      required: true
    },
    num: {
      type: Number,
      default: 5
    },
    objdata: {
      type: Object,
      default: function () {
        return {
          name: '未知',
          age: 17
        }
      }
    }
  }
}
</script>

<style scoped>

</style>
