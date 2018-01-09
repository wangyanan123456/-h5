<template>
  <div class="head">
  	<div class="title">{{count}}</div>
  	<div class="hui"></div>
  </div>
</template>
<script type="text/javascript">
import { mapState } from 'vuex'
  export default {
    name: 'Head',
     computed:{
        count(){
            return this.$store.state.count
        },
    },
  }
</script>

<style scoped>
.head{
	width:100%;
	height: 1.23rem;
	position: fixed;
	top:0;
}
.title{
	
	width:100%;
	height: 1.05rem;
	text-align: center;
	line-height: 1.3rem;
	font-size:0.3rem;
	color: #fff;
	background: -webkit-linear-gradient(top, #2C2D31, #101013);
	opacity: 0.9;
	font-weight: bold;
}
.hui{
	width:100%;
	height: 0.23rem;
	background: #EFEFF4;
}

 
</style>