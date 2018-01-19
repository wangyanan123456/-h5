<template>
  <div class="head">
  	<div class="title">{{count}}</div>
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
	height: 0.44rem;
	position: fixed;
	top:0;
	z-index: 1000;
}
.title{
	
	width:100%;
	height: 0.44rem;
	text-align: center;
	line-height: 0.44rem;
	font-size:0.16rem;
	color: #fff;
	background: -webkit-linear-gradient(top, #2C2D31, #101013);
	opacity: 0.9;
	font-weight: bold;
}

 
</style>