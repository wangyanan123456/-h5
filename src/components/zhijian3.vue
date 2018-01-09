<template>
	<div class="zhijian3"  @click.stop="naviTo({path: '/zhijian'})">
		质检列表3
	</div>
</template>
<script type="text/javascript">
export default{
	name:'zhijian3',
	methods:{
		naviTo({path, query}) {
			console.log(9)
        this.$router.push({
          path, query
        })
      }
	}
}
</script>
<style type="text/css">
	.zhijian3{
		padding-top: 0.5rem;
	}
</style>