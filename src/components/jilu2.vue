<template>
	<div class="zhijian3"  @click.stop="naviTo({path: '/jilu'})">
	<div class="today">
			<div>
				<img src="../assets/img/data.png">
			</div>
			<div>
				<input value="请选择日期" />
			</div>
	</div>
		<div class="box">
		
			<div>
				<div class="backto">
					<div>
						<img src="../assets/img/backto.png">
					</div>
					<div>返回</div>
				</div>
				<div class="divTitle">黑眼豆豆质检</div>
			</div>
			<ul>
			<li  @click.stop="naviTo({path: '/jilu3'})">
				<div class="flex">
					<div>黑眼豆豆</div>
					<div class="kai">
						<div>任务数</div>
						<div>
							<img src="../assets/img/kai.png">
						</div>
						
					</div>
				</div>
			</li>
			<li  @click.stop="naviTo({path: '/jilu3'})">
				<div class="flex">
					<div>黑眼豆豆</div>
					<div class="kai">
						<div>任务数</div>
						<div>
							<img src="../assets/img/kai.png">
						</div>
						
					</div>
				</div>
			</li><li  @click.stop="naviTo({path: '/jilu3'})">
				<div class="flex">
					<div>黑眼豆豆</div>
					<div class="kai">
						<div>任务数</div>
						<div>
							<img src="../assets/img/kai.png">
						</div>
						
					</div>
				</div>
			</li><li  @click.stop="naviTo({path: '/jilu3'})">
				<div class="flex">
					<div>黑眼豆豆</div>
					<div class="kai">
						<div>任务数</div>
						<div>
							<img src="../assets/img/kai.png">
						</div>
						
					</div>
				</div>
			</li>
		</ul>
		</div>
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
		/*padding-top: 0.5rem;*/
		width:100%;
		height: 81vh;
		background: #EFEFF4;
	}
	.box>div{
		width:3.45rem;
		margin: 0 auto;
	}
	.box>div{
		display: flex;
		width:3.30rem;
		height: 0.52rem;
		background: url('../assets/img/run1.png') no-repeat;
		line-height: 0.52rem;
		padding-left: 0.15rem;
	}
	.zhijian3 .backto{
		display: flex;
		margin-right: 0.71rem;
		font-size: 0.16rem;
		color: #353535;
	}
	.zhijian3 .backto img{
		width: 0.06rem;
		height: 0.1rem;
		margin-top: 0.21rem;
		margin-right: 0.05rem;
	}
	.zhijian3 ul{
		width:3.30rem;
		padding-left: 0.15rem;
	}
	.zhijian3 li{
		height: 0.51rem;
		background: #fff;
		padding-left: 0.2rem;
		width:3.25rem;
		/*width:96%;*/
		/*padding-left: 4%;*/
		border-bottom:1px solid #e5e5e5;
		line-height: 0.51rem;
	}
	.zhijian3 li:first-child{
		background: url('../assets/img/run2.png') no-repeat;
		height: 0.51rem;
	}
	.flex{
		display: flex;
		position: relative;
	}
	.zhijian3 .kai{
		display: flex;
		position: absolute;
		right: 0.2rem;	
	}
	.zhijian3 .kai img{
		width: 0.06rem;
		height: 0.1rem;
		margin-top:0.2rem;
		margin-left: 0.05rem;	
	}
	.zhijian3 li:last-child{
		border: none;
	}
	.today {
		width:3.45rem;
		height: 0.35rem;
		background: #fff;
		margin: 0 auto;
		margin-bottom: 0.15rem;
		border-radius: 0.24rem;
		display: flex;
	}
	.today  input{
		border:none;
		height: 0.25rem;
		line-height: 0.25rem;
		width:1.5rem;
		color: #999;
		margin-top: 0.05rem;
	}
	.today img{
		width:0.17rem;
		height: 0.16rem;
		margin-left:0.17rem;
		margin-top: 0.1rem;
		margin-right: 0.05rem;
	}
</style>