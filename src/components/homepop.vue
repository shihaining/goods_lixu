<template>
    <div class="u-pop">
        <a href="#" v-for="item in popData">{{item}}</a>
    </div>
</template>

<script>
export default {
    props:{
         popData:{
             type:Array
         }
    }
}
</script>

<style>
.u-pop {
    position: absolute;
    left: 0px;
    top: 80px;
    background: rgba(255, 0, 0, 0.1);
    display: block;
    padding-left: 30px;
    text-align: center;
    z-index: 9;
    width: 100%;
}
.u-pop a {
        color: white;
        font-size: 13px;
        line-height: 60px;
        margin-right: 30px;
        text-decoration: none;
    }
</style>
