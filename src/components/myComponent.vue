<template>
  <div>
    <p>我是样式,hello,vue!~LC</p>
    我是自定义组件MyComponent-父亲
   <!-- <Son title="父到子:传递的数据"/>-->

    <!-- 完整语法 -->
    <!-- <Son v-bind:title="msg"/>-->

    <!-- 缩写 -->
    <input type="text" v-model="lifemsg"/>
    <Son :title="msg" :lifemsg="lifemsg" :num="num" :objdata="myobj"/>

    <!--所有的v-on都可以简写为@，比如说v-click可以简写为@click-->
    <button @click="changeMsg">按钮</button>
  </div>
</template>

<script>
import Son from './son'
export default {
  name: 'mc',
  data () {
    return {
      msg: '我是活的-父到子:传递的数据',
      lifemsg: 'hello',
      num: 10,
      myobj: {
        name: 'LC',
        age: 18
      }
    }
  },
  components: {
    Son
  },
  methods: {
    changeMsg (event) {
      this.msg = '我变化了-我是活的-父到子:传递的数据' + Date().toLocaleString()
    }
  }
}
</script>

<!--使用scoped,可以将此样式只用在这个地方-->
<style scoped>

  p {
    color: green;
    font-family: Consolas;
    font-size: 24px;
  }

</style>
