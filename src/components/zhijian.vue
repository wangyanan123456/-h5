<template>
	<div class="zhijian">
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
	}
}
</script>
<style type="text/css">
	.zhijian{
		padding-top: 1.28rem;
	}
</style>