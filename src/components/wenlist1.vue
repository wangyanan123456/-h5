<template>
	<div class="wenlist1">
		<div class="backto" @click.stop="naviTo({path: '/'})">
	      <img src="../assets/img/backto.png">
	      <div>返回</div>
	    </div>
		<div class="wrap">
			<ul>
				<li v-for='list in lists' @click="todetail(list)">
					<div class="weight">
						<div>{{list.item}}</div>
						<div class="begin">待整改</div>
					</div>
					<div class="detail">
						<div class="left">
							<div>操作负责人</div>
							<div>计划完成时间</div>
							<div>待处理问题数量</div>
						</div>
						<div class="right">
							<div>{{list.head_user_name}}</div>
							<div>{{list.expect_finish_date}}</div>
							<div>{{list.problem}}</div>
						</div>
					</div>
				</li>
				
			</ul>
		</div>
		
	</div>
</template>
<script type="text/javascript">
export default{
	name:'wenlist1',
	data:function(){
		return{
			lists: []
		}
	},
	mounted(){
		this.getList()
	},
	methods:{
		getList(){
			var that = this
			$.ajax({
				type:'POST',
				url:'/api/subproject_problem/lists',
				success:function(res){
					console.log(JSON.parse(res).data)
					that.lists = JSON.parse(res).data
				}
			})
		},
   
	    naviTo({path, query}) {
	        this.$router.push({
	          path, query
	        })
	    },
	    todetail(list){
	    	 this.$router.push({
	          path:'wenlist2',
	          name:'wenlist2',
	          params:{
	          	project_id:list.task_id
	          }
	        })
	    },
	    baidu:function(e){
	    	 window.location.href = e
	    }
  }
}
</script>
<style type="text/css">
	.wenlist1{
		width:100%;
		min-height: 81vh;
		/*padding-top: 1.28rem;*/
		background: #EFEFF4;
		/*background: red;*/
	}
	.wenlist1 .wrap{
		width:3.45rem;
		margin: 0 auto;
	}
	
	.wenlist1 .backto{
	    position: fixed;
	    top:0.32rem;
	    z-index: 1200;
	    color: #fff;
	    display: flex;
	    left: 0.05rem;
	   }
   	.wenlist1 .backto img{
		width: 0.1rem;
		height: 0.18rem;
		margin-right: 0.05rem;
		
   	}
	.wenlist1 .wrap ul{
		
		/*margin-top: 0.1rem;*/
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