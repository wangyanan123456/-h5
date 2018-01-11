<template>
	<div class="jilu4">
		<div class="backto" @click.stop="naviTo({path: '/jilu3'})">
	      <img src="../assets/img/backto.png">
	      <div>返回</div>
	    </div>
	    <ul>
				<li >
					<div class="weight">
						<div>称重</div>
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
		name:'jilu4',
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
	.jilu4{
		/*padding-top: 0.05rem;*/
		width:100%;
		min-height: 90vh;
		background: #EFEFF4;
	}
   	.jilu4 .backto{
	    position: fixed;
	    top:0.32rem;
	    z-index: 1200;
	    color: #fff;
	    display: flex;
	    left: 0.05rem;
	   }
   	.jilu4 .backto img{
		width: 0.1rem;
		height: 0.18rem;
		margin-right: 0.05rem;
   	}
   	.jilu4 .begincheck{
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
   	.jilu4  ul{
   		width:3.45rem;
   		margin:0 auto;
	}
	.jilu4 ul li{
		padding-left: 0.15rem;
		margin-bottom: 0.11rem;
		background: #fff;
	}
	.jilu4  .weight{
		display: flex;
		height: 0.32rem;
		padding-top: 0.15rem;
		border-bottom: 1px solid #e5e5e5;
		position: relative;
		font-size: 0.16rem;
		color: #353535;
	}
	
	.jilu4 .detail{
		height: 0.67rem;
		display: flex;
		text-align: left;
		font-size: 0.14rem;
		color: #666;
		/*margin-top: 0.05rem;*/
		position: relative;
	}
	.jilu4 .detail div{
		margin-top: 0.07rem;
		
	}
	.jilu4 .right{
		position: absolute;
		right:0.15rem;
		text-align: right;
	}
	

	


</style>