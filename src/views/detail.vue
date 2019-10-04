<template>
 <div class="container g-piclist" @click="closeHandle">
			<div class="g-return">
				<div class="text"><a href="shop.html">首页</a> > <span>{{onegoods.title}}</span></div>
			</div>
			<div class="row">
				<div class="m-xtlist col-sm-2 col-xs-2">
					<div class="u-xt active">
						<img :src="onegoods.pic"/>
					</div>
					<div class="u-xt">
						<img :src="onegoods.pic"/>
					</div>
				</div>
				
				<div class="u-dt col-sm-5 col-xs-5">
					<img :src="onegoods.pic"/>
				</div>
				<div class="u-content col-sm-5 col-xs-5">
					<h3 v-html="onegoods.title"></h3>
					<h4>新健康&nbsp; &nbsp;轻食养</h4>
					<div class="m-price">
						<p>价　　格<span class="f-price">¥{{onegoods.price}}</span></p>
						<p>配送服务<span class="f-time">16:30前下单 当日发货</span></p>
					</div>
					<p class="u-num">数　　量
						<span class="f-num less ico" @click="subHandle">-</span>
						<input type="text" name="num" id="num" v-model="num" value="1"/>
						 <span class="more ico" @click="addHandle">+</span>	 
					<div class="m-buyma">
						<input type="button" class="f-buyBtn" value="加入购物车"
						@click="buyHandle(1)" />
						<input type="button" class="f-buyBtn" value="立即购买"
						@click="buyHandle(2)" />
					</div>
				</div>
			</div>
			
			
			<img src="../assets/img/buy/d0db81116590422290cb469913249f56.jpg"/>
			<img src="../assets/img/buy/b8e5417fc4804c31b9761b51c2cae70b.jpg"/>
			<img src="../assets/img/buy/1578ca87f67b4d7481493d5bf72cf729.jpg"/>
		</div>
</template>

<script>
// import {goodsList} from "../datas/goodsdata.js"
import {mapActions} from "vuex"
export default {
  data(){
    return {
	  onegoods:{},
	  num:1
    }
  },
  //组件创建
 created(){
	  let that = this;
	  let gid = this.$route.params.gid;
	  this.$axios({
		  type:"get",
		  url:`/api/one?id=${gid}`,
	  }).then(res=>{
			that.onegoods = res.data.data[0];
	  })
 },

 methods:{
	 buyHandle(flag){
		 if(!this.$local.fetch("user").userName){
			 alert("请先登录");
			 return;
		 }
		 this.$store.dispatch("addAction",{onegoods:this.onegoods,num:this.num});
		 if(flag==1){
			 alert("添加到购物车")
		 }
		 //再去判断加入购物车还是立即购买
		
	 },
	  ...mapActions({"closeHandle":"closePopAction"}),
	  subHandle(){
		this.num--;
		if(this.num<1){
			this.num= 1;
		}
	  },
	  addHandle(){
		this.num ++;
	  }
 }
 
}
</script>

<style>
body{
	background-color: #FBFEF9;
}
.g-return{
	color: #74846B;
	height: 80px;
	width: 100%;
}
.g-return a{
	color: #74846B;
}
.g-return .text{
	float: left;
	line-height: 80px;
}
.g-piclist{
	padding: 0 120px;
}
.g-piclist img{
	width: 100%;
}
.u-xt{
	width: 80px;
	margin-right: 20px;
	margin-bottom: 20px;
}
.u-dt{
	width: 400px;
	border: 1px solid #E8E8E8;
	margin-right: 40px;
}
.u-xt.active{
	border: 2px solid  #79C053;
}

.u-xt,.u-content,.u-dt{
	float: left;
}
.u-content{
	width: 350px;
}
.u-content h3{
	padding-top: 0;
	margin-top: 0;
	font-size: 20px;
	color: #363636;
}
.u-content h4{
	font-size: 18px;
	color: #79C053;
}
.m-price span{
	margin-left: 30px;
}
.m-price{
	color: #617458;
	background-color: #EBFFE0;
	border-top: 1px solid #CCE8BD;
	border-bottom: 1px solid #CCE8BD;
	font-size: 12px;
	padding-left: 15px;
	padding-top: 20px;
	padding-bottom: 40px;
	width: 100%;
}
.f-price{
	color: #FE3131;
	font-size: 16px;
}
.u-num{
	margin-top: 20px;
	margin-bottom: 30px;
	font-size: 12px;
	color: #617458;
	padding-left: 10px;
}
.f-num{
	margin-left: 20px;
}
.f-buyBtn{
	background-color: #79C053;
	border: 1px solid #51A425;
	color: #fff;
	font-size: 12px;
	width: 100px;
	height: 40px;
	border-radius: 5px;
	margin-left: 10px;
	line-height: 40px;
}
.f-buyBtn:focus{
	outline: none;
	border: none;
}
.f-buyBtn:hover{
	opacity: 0.4;
}
.m-buyma{
	/* position: relative; */
}
.m-buyma img{
	width: 150px;
	height: 150px;
	border: 1px solid #51A425;
	position: absolute;
	right: 20px;
	top: -50px;
	display: none;
}
.f-buyBtn:hover+img{
	display: block;
}
.ico{
	border: 1px solid #DDDDDD;
	font-weight: bold;
	font-size: 20px;
	padding: 0px 10px;
	cursor: pointer;
	position: absolute;
	top: 0px;
	color: #807F7F;
}

.u-num{
	position: relative;
}
#num{
	border: 1px solid #DDDDDD;
	width: 59px;
	height: 30.5px;
	position: absolute;
	left: 116px;
	text-align: center;
}
.more{
	left: 174px;
}
.less{
	left: 66px;
	padding: 0 12px;
}

</style>
