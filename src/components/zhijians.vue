<template>
	<div class="tab">
		<ul>
			<li @click.stop="naviTo({path: '/zhijian'})">质检任务</li>
			<li >问题清单</li>
			<li>质检记录</li>
		</ul>
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
		top:1.28rem;
	}
	.tab ul{
		display: flex;
	}
	.tab li{
		margin-right: 0.5rem;
		margin-left: 0.5rem;
		height: 0.62rem;
		line-height: 0.62rem;
	}
</style>