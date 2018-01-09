<template>
	<div class="two">
		<ul>
			<li  @click.stop="naviTo({path: '/zhijian3'})">555</li>
			<li>666</li>
			<li>777</li>
		</ul>
	</div>
</template>
<script type="text/javascript">
export default{
	name:'zhijian2',
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
	.two{
		padding-top: 0.5rem;
	}
	.two ul{
		display: flex;
	}
	.two li{
		margin-right: 0.8rem;
	}
</style>