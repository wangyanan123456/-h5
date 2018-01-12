<template>
	<div class="yanshou">
	<div class="problem" v-if='isthought'>
		<div class="renwu">验收任务</div>
		<div class="isthought">是否通过验收任务</div>
		<div class="sure">
			<div class="no" @click='nothough'>不通过</div>
			<div class="ok" @click.stop= "naviTo({path: '/zhijian4'})">通过</div>
		</div>
	</div>
	<div class="yanshou1" v-if='isthought'></div>
		<div class="backto" @click.stop="naviTo({path: '/zhijian4'})">
	      <img src="../assets/img/backto.png">
	      <div>返回</div>
	    </div>
	    <div class="daiyanshou">
	    	<div>待验收</div>
	    	<div class="begincheck" @click='yanshou'>验收</div>
	    </div>
	    <ul>
				<li >
					
					<div class="weight">
						<div>
		  	 				<label><input type="checkbox" name="items"><span></span></label><br>
		  				</div>
						<div class="zhong">称重结果足秤</div>
						<div class="begin" @click.stop="naviTo({path: '/problem'})">
							<div>添加问题</div>
							<div>
								<img src="../assets/img/jia.png">
							</div>
						</div>
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
						<div>
			  	 			<label @click='click'><input type="checkbox" name="items"><span></span></label><br>
			  			</div>
						<div class="zhong">称重结果足秤</div>
						<div class="begin">
							<div>添加问题</div>
							<div>
								<img src="../assets/img/jia.png">
							</div>
						</div>
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
						<div>
			  	 			<label><input type="checkbox" name="items"><span></span></label><br>
			  			</div>
						<div class="zhong">称重结果足秤</div>
						<div class="begin">
							<div>添加问题</div>
							<div>
								<img src="../assets/img/jia.png">
							</div>
						</div>
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
		<!-- <div class="toast">请先处理有问题的任务</div> -->
	</div>
</template>
<script type="text/javascript">
	export default{
		name:'yanshou',
		data:function(){
			return{
				isthought:false
			}
		},
		methods:{
			naviTo({path, query}) {
	        this.$router.push({
	          path, query
	        })
	      },
	      nothough:function(){
	      	this.isthought = false
	      },
	      yanshou:function(){
	      	this.isthought = true
	      },
	      click:function(){
	      	console.log(8)
	      }

		}
	}

</script>
<style type="text/css">
	.yanshou{
		padding-top: 0.64rem;
		width:100%;
		min-height: 90vh;
		background: #EFEFF4;
		position: relative;
	}
	.yanshou .yanshou1{
		top: 0.64rem;
		width:100%;
		height: 90vh;
		background: #000;
		position: absolute;
		z-index: 3000;
		opacity: 0.6;
	}
   	.yanshou .backto{
	    position: fixed;
	    top:0.32rem;
	    z-index: 1200;
	    color: #fff;
	    display: flex;
	    left: 0.05rem;
	   }
   	.yanshou .backto img{
		width: 0.1rem;
		height: 0.18rem;
		margin-right: 0.05rem;
		
   	}
   	.yanshou .daiyanshou{
   		display: flex;
   		padding-left: 0.15rem;
   	}
   	.yanshou .daiyanshou  div{
   		margin-top: 0.15rem;
   		line-height: 0.32rem;
   	}
   	.yanshou .begincheck{
   		width:0.84rem;
   		height: 0.32rem;
   		
   		color: #fff;
   		font-size: 0.16rem;
   		background: #008CFF;
   		border-radius: 0.03rem;
   		
   		margin-left: 2.17rem;
   	}
   	.yanshou  ul{
   		width:3.45rem;
   		margin:0 auto;
		
		margin-top: 0.1rem;
	}
	.yanshou ul li{
		padding-left: 0.15rem;
		/*margin-bottom: 0.11rem;*/
		background: #fff;
		border-bottom:1px solid #e5e5e5;
		position: relative;
	}
	.yanshou  .weight{
		display: flex;
		height: 0.31rem;
		padding-top: 0.11rem;
		border-bottom: 1px solid #e5e5e5;
		position: relative;
		font-size: 0.16rem;
		color: #353535;
		margin-left: 0.2rem;
		/*background: red;*/
	}
	.yanshou .begin{
		position: absolute;
		top:0.15rem;
		right:0.15rem;
		font-size: 0.14rem;
		color: #008CFF;
		display: flex;
	}
	.yanshou .begin img{
		width:0.15rem;
		height: 0.15rem;
		margin-left: 0.05rem;

	}
	.yanshou .detail{
		height: 0.67rem;
		display: flex;
		text-align: left;
		font-size: 0.14rem;
		color: #666;
		/*margin-top: 0.05rem;*/
		position: relative;
	}
	.yanshou .detail .left{
		margin-left: 0.2rem;
	}
	.yanshou .detail div{
		margin-top: 0.07rem;
		
	}
	.yanshou .right{
		position: absolute;
		right:0.15rem;
		text-align: right;
	}
	.yanshou .thought{
		position: absolute;
		top:0.15rem;
		right:0.15rem;
		font-size: 0.14rem;
		color: #1AAD19;
	}
	.yanshou .zhong{
		margin-left: 0.05rem;
	}
	.yanshou input[type="checkbox"]{
		appearance: none; 
		-webkit-appearance: none;
		outline: none;
		display:none;
	}
	.yanshou label{
		width:20px;
		height:20px;
		display:inline-block;
		cursor:pointer;
		line-height: 0.14rem;
		font-size: 0.34rem;
		color: #666;
		/*margin-top:0.2rem;*/
		position: absolute;
		top:0.11rem;
		left: -0.23rem;
	}
	.yanshou label input[type="checkbox"] + span{
		width:20px;
		height:20px;
		display:inline-block;
		background:url(../assets/img/dui1.png)  no-repeat;
	}
	.yanshou label input[type="checkbox"]:checked + span{
		width:20px;
		height:20px;
		display:inline-block;
		background:url(../assets/img/dui.png)  no-repeat;
	}
	
	.yanshou .toast{
	    width:2.4rem;
	    height:0.6rem;
	    line-height: 0.6rem;
	    background:#000;
	    opacity: 0.7;
	    color: #fff;
	    text-align: center;
	    font-size: 0.17rem;
	    border-radius: 0.08rem;
	    position: fixed;
	    top:2.25rem;
	    z-index: 4000;
	    left: 0.6rem;
   }
	.yanshou .problem{
		width:2.85rem;
		height: 3.26rem;
		background: url('../assets/img/problem.png') no-repeat;
		position: absolute;
		z-index: 4000;
		top:1.26rem;
		left: 0.45rem;
	}
	.yanshou .renwu{
		margin-top: 1.63rem;
		font-size: 0.26rem;
		color: #363D48;
	}
	.yanshou .isthought{
		margin-top:0.05rem;
		font-size: 0.16rem;
		color: #666;
	}
	.yanshou .sure{
		display: flex;
		margin-top: 0.41rem;
	}
	.yanshou .sure div{
		margin-left: 0.15rem;
		width:1.2rem;
		height: 0.38rem;
		line-height: 0.38rem;
		font-size: 0.2rem;
	}
	.yanshou .sure .no{
		background: #E7E7E7;
		color: #999;
	}
	.yanshou .sure .ok{
		background: #008CFF;
		color: #fff;
	}



</style>