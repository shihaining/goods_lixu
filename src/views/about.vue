<template>
  <div >
    <my-title title-name="关于我们"></my-title>
    <!-- <div>
        <input type="button" value="返回" @click="handle" />
    </div> -->
    <div class="about-nav">
        <router-link to="/about">介绍我们</router-link>
        <router-link to="/about/two">我们产品</router-link>
        <router-link to="/about/three">我们内容</router-link>
        <div class="content">
             <transition mode="out-in" :name="names"> 
                 <keep-alive>
                    <router-view />
                 </keep-alive>
             </transition> 
        </div>
    </div>
  </div>
</template>

<script>
import MyTitle from "../components/title"
export default {
    data(){
        return{
            names:"left"
        }
    },
    components:{
       MyTitle 
    },
    methods:{
        handle(){
            // this.$router.back();
            this.$router.push({path:"/"})
        }
    },
    watch:{
        $route(to,from){
            if(to.meta.index<from.meta.index){
                this.names="right";
            }else{
                this.names="left";
            }

        }
    }
}
</script>

<style>
.about-nav{
    width: 80%;
    margin: 0 auto;
}
.about-nav a{
    margin-right: 50px;
    line-height: 30px;
}
.content{
    height: auto;
    background: #ECFDE7;
    margin-bottom: 30px;
    padding: 10px;
}
/* .v-enter{
    opacity: 0;
}
.v-enter-to{
    opacity: 1;
}
.v-enter-active{
    transition:1s;
}
.v-leave{
    opacity: 1;
}
.v-leave-active{
    transition:1s;
}
.v-leave-to{
    opacity: 0;
} */
.left-enter{
    transform: translateX(100%);
}
.left-enter-to{
    transform: translateX(0);
}
.left-enter-active{
    transition: 1s;
}
.right-enter{
    transform: translateX(-100%);
}
.right-enter-to{
    transform: translateX(0);
}
.right-enter-active{
    transition: 1s;
}
</style>
