<template>
	<div class="check">
		<div class="backto" @click.stop="naviTo({path: '/zhijian4'})">
	      <img src="../assets/img/backto.png">
	      <div>返回</div>
	    </div>
	    <div class="begincheck" @click.stop="naviTo({path: '/yanshou'})">开始检查</div>
	    <ul>
				<li >
					<div class="weight">
						<div>称重</div>
						<div class="begin">未开始</div>
					</div>
					<div class="detail">
						<div class="left">
							<div>待处理问题数量</div>
							<div>生产人员已经完成本项检查工作</div>
						</div>
						<div class="right">
							<div>0</div>
						</div>
					</div>
				</li>
				<li >
					<div class="weight">
						<div>称重</div>
						<div class="thought">已通过</div>
					</div>
					<div class="detail">
						<div class="left">
							<div>待处理问题数量</div>
							<div>生产人员已经完成本项检查工作</div>
						</div>
						<div class="right">
							<div>0</div>
						</div>
					</div>
				</li>
			</ul>
		
	</div>
</template>
<script type="text/javascript">
	export default{
		name:'check',
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
	.check{
		padding-top: 0.64rem;
		width:100%;
		min-height: 110vh;
		background: #EFEFF4;
	}
   	.check .backto{
	    position: fixed;
	    top:0.32rem;
	    z-index: 1200;
	    color: #fff;
	    display: flex;
	    left: 0.05rem;
	   }
   	.check .backto img{
		width: 0.1rem;
		height: 0.18rem;
		margin-right: 0.05rem;
   	}
   	.check .begincheck{
   		width:0.84rem;
   		height: 0.32rem;
   		line-height: 0.32rem;
   		color: #fff;
   		font-size: 0.16rem;
   		background: #008CFF;
   		border-radius: 0.03rem;
   		margin-top: 0.15rem;
   		margin-left: 2.80rem;
   	}
   	.check  ul{
   		width:3.45rem;
   		margin:0 auto;
		
		margin-top: 0.1rem;
	}
	.check ul li{
		padding-left: 0.15rem;
		margin-bottom: 0.11rem;
		background: #fff;
	}
	.check  .weight{
		display: flex;
		height: 0.32rem;
		padding-top: 0.15rem;
		border-bottom: 1px solid #e5e5e5;
		position: relative;
		font-size: 0.16rem;
		color: #353535;
	}
	.check .begin{
		position: absolute;
		top:0.15rem;
		right:0.15rem;
		font-size: 0.14rem;
		color: #008CFF;
	}
	.check .detail{
		height: 0.67rem;
		display: flex;
		text-align: left;
		font-size: 0.14rem;
		color: #666;
		/*margin-top: 0.05rem;*/
		position: relative;
	}
	.check .detail div{
		margin-top: 0.07rem;
		
	}
	.check .right{
		position: absolute;
		right:0.15rem;
		text-align: right;
	}
	.check .thought{
		position: absolute;
		top:0.15rem;
		right:0.15rem;
		font-size: 0.14rem;
		color: #1AAD19;
	}

	


</style>