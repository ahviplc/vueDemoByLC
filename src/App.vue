<template>
  <div id="app">
    <img src="./assets/logo.png">
     <router-view/>
    <MyComponent/>
  </div>
</template>

<script>
import MyComponent from './components/myComponent'

export default {
  name: 'App',
  components: {
    MyComponent
  }}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
