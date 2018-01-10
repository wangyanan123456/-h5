<template>
	<div class="two">
	 <div class="backto" @click.stop="naviTo({path: '/'})">
      <img src="../assets/img/backto.png">
      <div>返回</div>
    </div>
		<ul>
			<li  @click.stop="naviTo({path: '/zhijian3'})">
				<div class="flex">
					<div>黑眼豆豆</div>
					<div class="kai">
						<img src="../assets/img/kai.png">
					</div>
				</div>
			</li>
			<li  @click.stop="naviTo({path: '/zhijian3'})">
				<div class="flex">
					<div>黑眼豆豆</div>
					<div class="kai">
						<img src="../assets/img/kai.png">
					</div>
				</div>
			</li>
			<li  @click.stop="naviTo({path: '/zhijian3'})">
				<div class="flex">
					<div>黑眼豆豆</div>
					<div class="kai">
						<img src="../assets/img/kai.png">
					</div>
				</div>
			</li>
			<li  @click.stop="naviTo({path: '/zhijian3'})">
				<div class="flex">
					<div>黑眼豆豆</div>
					<div class="kai">
						<img src="../assets/img/kai.png">
					</div>
				</div>
			</li>
			<li  @click.stop="naviTo({path: '/zhijian3'})">
				<div class="flex">
					<div>黑眼豆豆</div>
					<div class="kai">
						<img src="../assets/img/kai.png">
					</div>
				</div>
			</li>
			<li  @click.stop="naviTo({path: '/zhijian3'})">
				<div class="flex">
					<div>黑眼豆豆</div>
					<div class="kai">
						<img src="../assets/img/kai.png">
					</div>
				</div>
			</li>
			<li  @click.stop="naviTo({path: '/zhijian3'})">
				<div class="flex">
					<div>黑眼豆豆</div>
					<div class="kai">
						<img src="../assets/img/kai.png">
					</div>
				</div>
			</li>
			

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
		width: 100%;
		min-height: 81vh;
		background:#EFEFF4;
	}
	.two ul{
		
	}
	.two li{
		height: 0.5rem;
		background: #fff;
		width:96%;
		padding-left: 4%;
		border-bottom:1px solid #e5e5e5;
		line-height: 0.5rem;
	}
	.two .backto{
	    position: fixed;
	    top:0.32rem;
	    z-index: 1200;
	    color: #fff;
	    display: flex;
	    left: 0.05rem;
	   }
   	.two .backto img{
		width: 0.1rem;
		height: 0.18rem;
		margin-right: 0.05rem;
   	}
	.two .flex{
		display: flex;
		position: relative;
	}
	.two .kai{
		width: 0.06rem;
		height: 0.1rem;
		position: absolute;
		top:0.2rem;
		right: 0.2rem;
	}
	.two li:last-child{
		border: none;
	}

</style>