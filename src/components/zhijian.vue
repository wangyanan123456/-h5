<template>
	<div class="zhijian">
	<div class="none"></div>
	<router-view/>
	<zhijians></zhijians>
	</div>
</template>
<script type="text/javascript">
import zhijians from '@/components/zhijians'

export default{
	name:'zhijian',
	components:{
		zhijians
	},
	mounted(){
		console.log('zhijian')
	}
}
</script>
<style type="text/css">
	.zhijian{
		padding-top: 1.26rem;
	}
</style>