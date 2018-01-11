<template>
	<div class="zhijian4">
	<div class="today">
			<div>
				<img src="../assets/img/data.png">
			</div>
			<div>
				<input value="请选择日期" />
			</div>
	</div>
		<div class="wrap">
			<div>
				<div class="backto" @click.stop="naviTo({path: '/jilu2'})">
					<div>
						<img src="../assets/img/backto.png">
					</div>
					<div class="back">返回</div>
				</div>
				<div class="divTitle">黑眼豆豆质检/<span class='span' style='color:#008CFF'>配料</span></div>
			</div>
			<ul>
				<li @click.stop="naviTo({path: '/jilu4'})">
					<div class="phone">
						<img src="../assets/img/phone.png" class="phone1">
						<img src="../assets/img/phone.png" class="phone2">
					</div>
					<div class="weight">
						<div>称重</div>
						<div class="begin">已验收</div>
					</div>
					<div class="detail">
						<div class="left">
							<div>操作负责人</div>
							<div>计划完成时间</div>
							<div>待处理问题数量</div>
						</div>
						<div class="right">
							<div>张三</div>
							<div>2018-01-08</div>
							<div>0</div>
						</div>
					</div>
				</li>
				<li @click.stop="naviTo({path: '/jilu4'})">
				<div class="phone">
						<img src="../assets/img/phone.png" class="phone1">
						<img src="../assets/img/phone.png" class="phone2">
					</div>
					<div class="weight">
						<div>是否过期</div>
						<div class="thought">已验收</div>
					</div>
					<div class="detail">
						<div class="left">
							<div>操作负责人</div>
							<div>计划完成时间</div>
							<div>待处理问题数量</div>
						</div>
						<div class="right">
							<div>张三</div>
							<div>2018-01-08</div>
							<div>0</div>
						</div>
					</div>
				</li>
			</ul>
		</div>
		
	</div>
</template>
<script type="text/javascript">
export default{
	name:'jilu3',
	methods:{
   
	    naviTo({path, query}) {
	        this.$router.push({
	          path, query
	        })
	    },
	    baidu:function(e){
	    	 window.location.href = e
	    }
  }
}
</script>
<style type="text/css">
	.zhijian4{
		width:100%;
		height: 81vh;
		/*padding-top: 1.28rem;*/
		background: #EFEFF4;
	}
	.zhijian4 .wrap{
		width:3.45rem;
		margin: 0 auto;
	}
	.zhijian4 .wrap>div{
		display: flex;
		width:3.30rem;
		height: 0.66rem;
		background: #fff;
		line-height: 0.46rem;
		padding-left: 0.15rem;
	}
	.zhijian4 .backto{
		display: flex;
		margin-right: 0.71rem;
		font-size: 0.16rem;
		color: #353535;
	}
	.zhijian4 .backto img{
		width: 0.06rem;
		height: 0.1rem;
		margin-top: 0.21rem;
		margin-right: 0.05rem;
	}
	.zhijian4 .wrap .back{
		color: #008CFF;
		font-size: 0.14rem;
	}
	.zhijian4 .wrap ul{
		
		margin-top: 0.1rem;
	}
	.zhijian4 .wrap ul li{
		padding-left: 0.15rem;
		margin-bottom: 0.11rem;
		background: #fff;
		position: relative;
	}
	.phone1{
		position: absolute;
		top:-0.3rem;
		left: 0.2rem;
	}
	.phone2{
		position: absolute;
		top:-0.3rem;
		right: 0.2rem;
	}
	.zhijian4 .wrap ul li img{
		width:0.16rem;
		height: 0.48rem;
	}
	.zhijian4 .wrap  .weight{
		display: flex;
		height: 0.32rem;
		padding-top: 0.34rem;
		border-bottom: 1px solid #e5e5e5;
		position: relative;
		font-size: 0.16rem;
		color: #353535;
	}
	.zhijian4 .begin{
		position: absolute;
		top:0.34rem;
		right:0.15rem;
		font-size: 0.14rem;
		color: #1AAD19;
	}
	.zhijian4 .detail{
		height: 1.055rem;
		display: flex;
		text-align: left;
		font-size: 0.14rem;
		color: #666;
		margin-top: 0.05rem;
		position: relative;
	}
	.zhijian4 .detail div{
		margin-top: 0.05rem;
		
	}
	.zhijian4 .right{
		position: absolute;
		right:0.15rem;
		text-align: right;
	}
	.zhijian4 .thought{
		position: absolute;
		top:0.34rem;
		right:0.15rem;
		font-size: 0.14rem;
		color: #1AAD19;
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