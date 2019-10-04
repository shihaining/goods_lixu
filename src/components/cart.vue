<template>
    <div class="myshop">
          <h3 class="title">我的购物车</h3>
          <div class="empty" v-if="!cartData.length>0">
               <h3>购物车为空</h3>
               <p>您还没有选购任何商品，现在前往选购吧!</p>
               <p style="text-align:center;padding-top:20px;">
                   <img src="../assets/img/shop/cart-empty.png" />
               </p>
           </div>
           <div class="content" v-else>
               <div class="item" style="height:40px;">
                   <span><input type="checkbox" @click="checkAllHandle"
                   v-model="checkAll" />全选</span>
                    <span>图&nbsp;&nbsp;片</span>
                    <span>单价</span>
                    <span>数量</span>
                    <span>小计</span>
                    <span>删除</span>
               </div>
               <div class="item" v-for="item,index in cartData">
                   <span><input type="checkbox"  v-model="item.checked"
                   @click="choseOneHandle(item.checked,index)"/></span>
                    <span><img :src="item.pic"/></span>
                    <span>￥{{item.price}}</span>
                    <span>
                        <input  type="button" value="-" @click="subNum(index)"/>
                        <input type="text" v-model="item.count" 
                        style="width:18px;" />
                        <input  type="button" value="+" @click="addNum(index)"/>
                    </span>
                    <span>￥{{item.count*item.price}}</span>
                    <span style="cursor:pointer;">X</span>
               </div>
             
           </div>
           <div class="my-footer">
               <div v-if="cartData.length>0"><span>商品共{{totalCount}}件</span>
                <span>总价:￥{{totalPrice}}</span>
               </div>
                <span　class="close-shop" @click="closepane">关闭</span>
           </div>
      </div>
</template>
<script>
import goodsList from "../datas/goodsdata.js"
import "../assets/css/common.css"
import {mapState,mapGetters} from "vuex"
export default {
   data(){
        return{
            goodsList,
            checkAll:true
        }
    },
    computed:{
        ...mapState(["cartData"]),
        ...mapGetters(["totalCount","totalPrice"])
    },
    methods:{
        closepane(){
            this.$emit("closecart");
        },
        addNum(idx){
            this.$store.dispatch("changeAction",{flag:2,index:idx});
        },
        subNum(idx){
            this.$store.dispatch("changeAction",{flag:1,index:idx});
        },
        //全选
        checkAllHandle(){
            this.checkAll = !this.checkAll;
            this.$store.dispatch("checkAllAction",this.checkAll);
        },
        //选中一个
        choseOneHandle(c,index){
            c = !c;
            this.$store.dispatch("choseOneAction",{che:c,idx:index});
            this.checkAll = this.$store.state.choose;
        }

    }
 
}
</script>

<style>
.myshop{
    font-size: 14px;
    position: absolute;
    top:70px;
    right:80px;
    background: #fff;
    z-index: 100;
    border-radius: 20px;
    box-shadow: 1px 1px 2px #ccc;
    width: 500px;
    line-height: 30px;
    border: 1px solid #ccc;
}
.myshop .title{
    padding: 20px; 
    font-size: 20px;
    color:#666;
}
.myshop .empty{
    padding-left:20px;
    font-size: 16px;
}
.myshop .empty h3,.myshop .empty p{
    font-size: 16px;
    margin: 0px;
    padding: 0px;
}
.myshop .content{
    padding-left: 30px;
    padding-right: 30px;
    padding-bottom: 50px;
}
.myshop .content span:first-child{
    display: inline-block;
    width: 60px;
    height: 60px;
}
.myshop .content img{
    width: 100%;
    height: 100%;
    border: 1px solid #ccc;
}
.myshop .content span{
    padding: 6px;
    width: 60px;
    display: inline-block;
    text-align: center;
}
.myshop .content .item{
    padding-bottom: 10px;
    
}
.myshop .my-footer{
    padding: 30px;
}
.myshop .close-shop{
    margin-left: 200px;
    cursor: pointer;
}
.v-enter{
    top: -20px;
}
.v-enter-to{
    top:70px;
}
.v-enter-active{
    transition:.5s;
} 
</style>
