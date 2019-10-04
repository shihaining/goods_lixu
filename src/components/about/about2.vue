<template>
  <div class="container g-piclist" ref="main">
			<img src="../../assets/img/about/mingqian_07.png"/>
			<div @click="changeBg">改变背景</div>
    </div>
</template>

<script>
export default {
	methods:{
		changeBg(){
			this.$refs.main.style.background="yellow";
		}
	}
}
</script>

<style>
.g-piclist{
	padding: 30px 120px;
}
.g-piclist p{
	padding: 40px 45px 40px 20px;
	line-height: 30px;
	text-indent: 32px;
}
.g-piclist p.u-firstP{
	padding-bottom: 0px;
}
.g-piclist p.u-lastP{
	padding-top: 15px;
}
</style>
