<template>
    <div class="main">
        <ul class="clearfix">
            <li><img src="../assets/img/pet/logo.png" /></li>
            <li>
                <router-link to="/" exact>
                    <span>首页</span>
                    <span>HOME</span>
                    <span></span>
                </router-link>
            </li>
            <li @mouseover="changeIndex(1)" @mouseout="changeIndex(0)">
                <router-link to="/">
                    <span>宏物医疗</span>
                    <span>PET CART</span>
                    <span></span>
                </router-link>
                <home-pop v-show="flag[index-1]" :pop-data="popData[index-1]"></home-pop>
            </li>
            <li >
                <router-link to="/">
                    <span class="">分院布局</span>
                    <span class="">BRANCH LAYOUT</span>
                    <span></span>
                </router-link>
            </li>
            <li  @mouseover="changeIndex(2)" @mouseout="changeIndex(0)">
                <router-link to="/">
                    <span class="">艾贝尔兽医学院</span>
                    <span class="">AI-BI VETERINARY COLLEGE</span>
                    <span></span>
                </router-link>
                <home-pop v-show="flag[index-1]" :pop-data="popData[index-1]"></home-pop>
            </li>
            <li  @mouseover="changeIndex(3)" @mouseout="changeIndex(0)">
                <router-link to="/">
                    <span class="">关于我们</span>
                    <span class="">ABOUT US</span>
                    <span></span>
                </router-link>
                <home-pop v-show="flag[index-1]" :pop-data="popData[index-1]"></home-pop>
            </li>
            <li  @mouseover="changeIndex(4)" @mouseout="changeIndex(0)">
                <router-link to="/">
                    <span class="">加入我们</span>
                    <span class="">JOIN US</span>
                    <span></span>
                </router-link>
                <home-pop v-show="flag[index-1]" :pop-data="popData[index-1]"></home-pop>
            </li>
        </ul>
    </div>
</template>

<script>
import HomePop from "./homepop"
export default {
    data(){
        return{
            popData:[
                ["医疗服务","医疗团队","医疗设备","经典案例"],
                ["兽医学院","E-Learing"],
                ["公司简介","我们的优势","企业文化","联系我们","新闻动态"],
                ["用人理念","院校招聘","社会招聘"]
            ],
            flag:[false,false,false,false],
            index:1
        }
    },
    components:{
        HomePop
    },
    methods:{
        changeIndex(idx){
            this.index = idx;
            this.flag[this.index-1]=true;
           if(idx==0){
              this.flag=[false,false,false,false]
            }
        }
    }
}
</script>
<style>
.main {
    width: 100%;
    height: 80px;
    font-size: 14px;
    box-shadow: 0 3px 3px 0 rgba(180, 180, 180, 0.30);
    position: relative;
}
.main ul {
    width: 80%;
    margin: 0 auto;
    padding-top: 10px;
}
.main ul li:first-child {
    width: 25%;
}
.main ul li {
    float: left;
    margin-right: 4%;
    text-align: center;
}

.main ul li span {
     display: block; 
     text-align: center;
}
.main ul li span:nth-child(2) {
    color: #ccc;
}
.main ul li a {
    display: inline-block;
    padding-top: 10px;
    text-decoration: none;
    text-align: center;
}

.main ul li:hover span:nth-child(3) {
    width: 0px;
    height: 0px;
    border-top: 10px solid transparent;
    border-right: 8px solid transparent;
    border-left: 8px solid transparent;
    border-bottom: 10px solid red;
    display: block;
    margin-left: 45%;
    transform: translateY(2px);
}

</style>
