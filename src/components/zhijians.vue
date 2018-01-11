<template>
	<div class="tab">
		<ul>
			<li @click.stop="naviTo({path: '/zhijian'})"  :class="($route.path === '/zhijian' || $route.path === '/zhijian4' || $route.path === '/zhijian3')?'color':'color2'" >质检任务</li>
			<li @click.stop="naviTo({path: '/wenlist1'})" :class="($route.path === '/wenlist1' || $route.path ==='/wenlist2' )?'color':'color2'">问题清单</li>
			<li @click.stop="naviTo({path: '/jilu'  })" style="margin-right:none;" :class="($route.path === '/jilu'  ||  $route.path ==='/jilu2'    ||  $route.path ==='/jilu3'    ||  $route.path ==='/jilu4' )?'color':'color2'">质检记录</li>
		</ul>
		<div class="hui"></div>
	</div>
</template>
<script type="text/javascript">

export default{
	name:'zhijians',
	methods:{
		naviTo({path, query}) {
        this.$router.push({
          path, query
        })
      }
	}
}
</script>
<style type="text/css">
	.tab{
		position: fixed;
		top:0.64rem;
		width:100%;
	}
	.tab ul{
		display: flex;
		width:100%;
		height: 0.47rem;
		background: #fff;
	}
	.tab li{
		margin-right: 0.5rem;
		height: 0.47rem;
		font-size: 0.14rem;
		width:0.64rem;
		line-height: 0.47rem;
	}
	.tab li:first-child{
		margin-left: 0.37rem;

	}
	.hui{
		width:100%;
		height: 0.15rem;
		background: #EFEFF4;
	}
	.color{
		color: #1AAD19;
		border-bottom: 3px solid #1AAD19;
	}
	.color2{
		color: #353535;
	}
	
</style>