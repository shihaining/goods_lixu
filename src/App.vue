<template>
  <div id="app">
    <my-header v-show="this.$route.meta.showHeader"/>  
    <!-- <home-header />  -->
    <router-view/>
    <my-footer />
  </div>
</template>

<script>
import MyHeader from "./components/header"
import HomeHeader from "./components/homeheader"
import MyFooter from "./components/footer"
import "./assets/css/common.css"
export default {
  name: 'App',
  components:{
    MyHeader,
    MyFooter,
    HomeHeader
  }
}
</script>

<style>
a{
  color:black;
  text-decoration: none;
}
/*点击后的样式*/
/* .router-link-exact-active,a:hover,li.m-header:hover{
  color:green;
  text-decoration: none;
}  
*/
li.m-header:hover{
  cursor: pointer;
}
 
</style>
