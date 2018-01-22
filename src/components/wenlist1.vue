<template>
	<div class="wenlist1">
		<div class="backto" @click.stop="naviTo({path: '/'})">
	      <img src="../assets/img/backto.png">
	      <div>返回</div>
	    </div>

	    <div class="hui"></div>
		<div class="wrap" v-if='!all'>
			<ul>
				<li v-for='list in lists' @click="todetail(list)">
					<div class="weight">
						<div>{{list.goods_name}}/{{list.procedure_name}}/{{list.project_name}}</div>
						<div class="begin" v-if='list.problem== 1' >待整改</div>
						<div class="begin" v-if='list.problem==2 '>已整改</div>
					</div>
					<div class="detail">
						<div class="left">
							<div>操作负责人</div>
							<div>计划完成时间</div>
							<div>待处理问题数量</div>
						</div>
						<div class="right">
							<div>{{list.head_user}}</div>
							<div>{{list.expect_finish_date}}</div>
							<div>{{list.problem}}</div>
						</div>
					</div>
				</li>
				
			</ul>
		</div>
		<div class="wrap"  v-if='all'>
			<div class="nothing"></div>
			<div>暂时没有问题需要解决</div>
		</div>
		
	</div>
</template>
<script type="text/javascript">
import { mapState } from 'vuex'
export default{
	name:'wenlist1',
	data:function(){
		return{
			lists: [],
			all:''
		}
	},
	mounted(){
		this.getList()
		this.$store.state.count = '问题清单'
	},
	methods:{
		getList(){
			var that = this
			$.ajax({
				type:'POST',
				url:'/wio/subproject_problem/lists',
				success:function(res){
					if(JSON.parse(res).status ==1){
						that.all = 0
						that.lists = JSON.parse(res).data


					}
					
				}
			})
		},
   
	    naviTo({path, query}) {
	        this.$router.push({
	          path, query
	        })
	    },
	    todetail(list){
	    	if(list.problem==2){
	    		this.$router.push({
		          path:'/wenyanshou2',
		          name:'wenyanshou2',
		          params:{
		          	project_id:list.project_id,
		          	project_name:list.project_name,
		          	procedure_id:list.check_procedure_id,
		          	goods_name:list.goods_name,
		          	procedure_name:list.procedure_name
		          }
	        	})
	    	}else{
	    		 this.$router.push({
		          path:'wenlist2',
		          name:'wenlist2',
		          params:{
		          	project_id:list.id,
		          	project_name:list.project_name,
		          	procedure_id:list.check_procedure_id,
		          	goods_name:list.goods_name,
		          	procedure_name:list.procedure_name
		          }
		        })
	    	}


	    	
	    },

  }
}
</script>
<style type="text/css">
	.wenlist1{
		width:100%;
		min-height: 86.5vh;
		padding-top: 0.01rem;
		padding-bottom: 0.01rem;
		background: #EFEFF4;
		/*background: red;*/
	}
	.wenlist1 .wrap{
		width:3.45rem;
		margin: 0 auto;
	}
	
	.wenlist1 .backto{
	    position: fixed;
	    top:0.12rem;
	    z-index: 1200;
	    color: #fff;
	    display: flex;
	    left: 0.1rem;
	   }
   	.wenlist1 .backto img{
		width: 0.1rem;
		height: 0.18rem;
		margin-right: 0.05rem;
		
   	}
   	.wenlist1 .backto div{
   		margin-top: -0.05rem;
   	}
   	.wenlist1 .wrap  .nothing{
   		width:100%;
   		margin: 0 auto;
   		margin-top: 1.18rem;
   		width:1.81rem;
   		height:1.74rem;
   		background: url('../assets/img/nothing.png') no-repeat;
   		background-image: 100% 100%;
   		background-size: 100% 100%;
   	}
   	.wenlist1 .wrap  .nothing img{
   		width:3.62rem;
   		height: 3.5rem;
   	}
	.wenlist1 .wrap ul{

	}
	.wenlist1 .wrap ul li{
		padding-left: 0.15rem;
		margin-bottom: 0.11rem;
		background: #fff;
	}
	.wenlist1 .wrap  .weight{
		display: flex;
		height: 0.32rem;
		padding-top: 0.15rem;
		border-bottom: 1px solid #e5e5e5;
		position: relative;
		font-size: 0.16rem;
		color: #353535;
	}
	.wenlist1 .begin{
		position: absolute;
		top:0.15rem;
		right:0.15rem;
		font-size: 0.14rem;
		color: #008CFF;
	}
	.wenlist1 .detail{
		height: 0.9rem;
		display: flex;
		text-align: left;
		font-size: 0.14rem;
		color: #666;
		margin-top: 0.05rem;
		position: relative;
	}
	.wenlist1 .detail div{
		margin-top: 0.05rem;
		
	}
	.wenlist1 .right{
		position: absolute;
		right:0.15rem;
		text-align: right;
	}
	.wenlist1 .thought{
		position: absolute;
		top:0.15rem;
		right:0.15rem;
		font-size: 0.14rem;
		color: #1AAD19;
	}

	
</style>