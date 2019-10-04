<template>
  <div class="container hea_b">
        <ul>
            <li><h3>{{titleName}}</h3></li>
            <li style="padding-bottom:10px;"></li>
        </ul>
 </div>
</template>

<script>

export default {
    props:["titleName"]
}
</script>

<style>
.hea_b{
	height: 120px;
}

.hea_b ul li:first-child h3{
	line-height: 90px;
	color: black;
}
.hea_b ul li:last-child{
	padding-bottom: 2px;
	border-bottom: 4px solid red;
	width: 30px;
	position: relative;
	bottom: 38px;
	left: 18px;
}
</style>
