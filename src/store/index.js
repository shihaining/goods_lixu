import Vue from "vue"
import Vuex from "vuex"
import {goodsList,imgList1} from "../datas/goodsdata"
import axios from "axios"
Vue.use(Vuex);
let store = new Vuex.Store({
    state:{
        goodsList,
        imgList1,
        cartData:[],
        isShowCart:false,
        choose:true
    },
    mutations:{
        addCart(state,data){
            // console.log("data:",cartData);
            //如果商品存在购物车中，加数量，如果商品没有在购物车，添加到cartData
            let boff= true;
            state.cartData.forEach((goods)=>{
                if(goods.id==data.onegoods.id){
                    goods.count+=data.num;
                    boff = false;
                }
            })
            // for(let i=0;i<state.cartData.length;i++){
            //     let goods = state.cartData[i];
            //     if(goods.id == data.onegoods.id){
            //         goods.count+=data.num;
            //         boff = false;
            //     }
            // }
            if(boff){
                let goodsData = data.onegoods;
                Vue.set(goodsData,"count",data.num);
                Vue.set(goodsData,"checked",true)
                state.cartData.push(goodsData);
            }   
        },
        changeNum(state,data){
            if(data.flag==1){
                state.cartData[data.index].count--;
                 if(state.cartData[data.index].count<1){
                    state.cartData.splice(data.index,1);
                }
            }else if(data.flag==2){
                state.cartData[data.index].count++;
            }
        },
        popShow(state){
            state.isShowCart = !state.isShowCart;
        },
        closePop(state){
            if(state.isShowCart){
                state.isShowCart = false;
            }
        },
        //全选或全不选
        isCheckAll(state,check){
             state.cartData.forEach(item=>{
                    item.checked = check
          })
        },
        //选其中一个
        choseOne(state,data){
            state.cartData[data.idx].checked=data.che;
            state.choose=state.cartData.every(item=>item.checked);
        },
        listGoods(state,data){
            state.goodsList = data;
        }
     
    },
    actions:{
        addAction(context,data){
            context.commit("addCart",data)
        },
        changeAction(context,data){
            context.commit("changeNum",data);
        },
        changePop(context){
            context.commit("popShow");
        },
        closePopAction(context){
            context.commit("closePop");
        },
        checkAllAction(context,check){
            context.commit("isCheckAll",check);
        },
        choseOneAction(context,check){
            context.commit("choseOne",check);
        },
        listGoodsAction(context){
            axios({
                method:"get",
                url:`/api/list`,
            }).then((response)=>{
                context.commit("listGoods",response.data.data);
            }).catch((error)=>{
                console.log(error);
            })

        }
      
    },
    getters:{
        totalCount(state){
            return state.cartData.reduce((sum,item)=>{
                       if(item.checked){
                           sum +=item.count;
                       }
                      return sum;
                   },0);
        },
        totalPrice(state){
                return state.cartData.reduce((proTotal,item)=>{
                        if(item.checked){
                            proTotal+=item.count*item.price;
                        }
                        return proTotal;
                    },0)     
        }
    }
})
export default store;