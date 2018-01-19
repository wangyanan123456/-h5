<template>
	<div class="wenyanshou2">
	<div class="problem" v-if='isthought'>
		<div class="renwu">验收任务</div>
		<div class="isthought">是否通过验收任务</div>
		<div class="sure">
			<div class="no" @click='nothough'>不通过</div>
			<div class="ok" @click.stop= "naviTo({path: '/zhijian4'})">通过</div>
		</div>
	</div>
	<div class="yanshou1" v-if='isthought'></div>
		<div class="backto" @click.stop="naviTo({path: '/wenlist1'})">
	      <img src="../assets/img/backto.png">
	      <div>返回</div>
	    </div>
	    
	    <ul>
				<li v-for='list in lists'>
					<div class="weight">
						
						<div class="zhong">{{list.sub_project_name}}</div>
						<div class="begin">
							<div>已验收</div>
							
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
		name:'wenyanshou2',
		data:function(){
			return{
				isthought:false,
				lists:[]
			}
		},
		mounted(){
			console.log(this.$route.params)
			this.gitlist()
		},
		methods:{
			gitlist(list){
				var that = this
				$.ajax({
					type:'POST',
					url:'/wio/Inspection_record/sub_project',
					data:{
						project_id:that.$route.params.project_id,
	
					},
					success:function(res){
						if(JSON.parse(res).status == 1){
							that.lists = JSON.parse(res).data.list
						}
						
					}
				})
			},
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

		}
	}

</script>
<style type="text/css">
	.wenyanshou2{
		padding-top: 0.64rem;
		width:100%;
		min-height: 90vh;
		background: #EFEFF4;
		position: relative;
	}
	.wenyanshou2 .yanshou1{
		top: 0.64rem;
		width:100%;
		height: 90vh;
		background: #000;
		position: absolute;
		z-index: 3000;
		opacity: 0.6;
	}
   	.wenyanshou2 .backto{
	    position: fixed;
	    top:0.32rem;
	    z-index: 1200;
	    color: #fff;
	    display: flex;
	    left: 0.05rem;
	   }
   	.wenyanshou2 .backto img{
		width: 0.1rem;
		height: 0.18rem;
		margin-right: 0.05rem;
		
   	}
   	.wenyanshou2 .daiyanshou{
   		display: flex;
   		padding-left: 0.15rem;
   	}
   	.wenyanshou2 .daiyanshou  div{
   		margin-top: 0.15rem;
   		line-height: 0.32rem;
   	}
   	.wenyanshou2 .begincheck{
   		width:0.84rem;
   		height: 0.32rem;
   		
   		color: #fff;
   		font-size: 0.16rem;
   		background: #008CFF;
   		border-radius: 0.03rem;
   		
   		margin-left: 2.17rem;
   	}
   	.wenyanshou2  ul{
   		width:3.45rem;
   		margin:0 auto;
		
		margin-top: 0.1rem;
	}
	.wenyanshou2 ul li{
		padding-left: 0.15rem;
		margin-bottom: 0.11rem;
		background: #fff;
		/*border-bottom:1px solid #e5e5e5;*/
	}
	.wenyanshou2  .weight{
		display: flex;
		height: 0.31rem;
		padding-top: 0.11rem;
		border-bottom: 1px solid #e5e5e5;
		position: relative;
		font-size: 0.16rem;
		color: #353535;
	}
	.wenyanshou2 .begin{
		position: absolute;
		top:0.15rem;
		right:0.15rem;
		font-size: 0.14rem;
		color: #008CFF;
		display: flex;
	}
	.wenyanshou2 .begin img{
		width:0.15rem;
		height: 0.15rem;
		margin-left: 0.05rem;

	}
	.wenyanshou2 .detail{
		height: 0.67rem;
		display: flex;
		text-align: left;
		font-size: 0.14rem;
		color: #666;
		/*margin-top: 0.05rem;*/
		position: relative;
	}
	.wenyanshou2 .detail div{
		margin-top: 0.07rem;
		
	}
	.wenyanshou2 .right{
		position: absolute;
		right:0.15rem;
		text-align: right;
	}
	.wenyanshou2 .thought{
		position: absolute;
		top:0.15rem;
		right:0.15rem;
		font-size: 0.14rem;
		color: #1AAD19;
	}
	.wenyanshou2 .zhong{
		margin-left: 0.05rem;
	}
	
	
	.wenyanshou2 .toast{
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
	.wenyanshou2 .problem{
		width:2.85rem;
		height: 3.26rem;
		background: url('../assets/img/problem.png') no-repeat;
		background-image: 100% 100%;
		background-size: 100% 100%;
		position: absolute;
		z-index: 4000;
		top:1.26rem;
		left: 0.45rem;
	}
	.wenyanshou2 .renwu{
		margin-top: 1.63rem;
		font-size: 0.26rem;
		color: #363D48;
	}
	.wenyanshou2 .isthought{
		margin-top:0.05rem;
		font-size: 0.16rem;
		color: #666;
	}
	.wenyanshou2 .sure{
		display: flex;
		margin-top: 0.41rem;
	}
	.wenyanshou2 .sure div{
		margin-left: 0.15rem;
		width:1.2rem;
		height: 0.38rem;
		line-height: 0.38rem;
		font-size: 0.2rem;
	}
	.wenyanshou2 .sure .no{
		background: #E7E7E7;
		color: #999;
	}
	.wenyanshou2 .sure .ok{
		background: #008CFF;
		color: #fff;
	}
	.wenyanshou2 .isok{
		width:100%;
		height: 0.52rem;
		background: #fff;
		border-top:1px solid #e5e5e5;
		
	}
	.wenyanshou2 .isok div{
		width: 1rem;
		height: 0.32rem;
		line-height: 0.32rem;
		background: #008CFF;
		color: #fff;
		font-size: 0.16rem;
		margin: 0 auto;
		margin-top: 0.1rem;
		border-radius: 3px ;
	}



</style>