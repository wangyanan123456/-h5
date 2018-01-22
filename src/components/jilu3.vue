<template>
	<div class="jilu3">
	
		<div class="wrap">
			<div>
				<div class="backto" @click="backTo">
					<div>
						<img src="../assets/img/back.png">
					</div>
					<div class="back">返回</div>
				</div>
				<div class="divTitle">{{this.$route.params.goods_name}}质检/<span class='span' style='color:#008CFF'>配料</span></div>
			</div>
			<ul>

			
				<li v-for='list in list3' @click="next(list)"  >
					<div class="phone">
						<img src="../assets/img/phone.png" class="phone1">
						<img src="../assets/img/phone.png" class="phone2">
					</div>
					<div class="weight">
						<div>{{list.task_name}}</div>
						<div class="begin">已验收</div>
					</div>
					<div class="detail">
						<div class="left">
							<div>操作负责人</div>
							<div>计划完成时间</div>
							<div>待处理问题数量</div>
						</div>
						<div class="right">
							<div>{{list.head_user}}</div>
							<div>{{list.plan_finish_time}}</div>
							<div>{{list.problem_num}}</div>
						</div>
					</div>
				</li>
				
			</ul>
		</div>
		
	</div>
</template>
<script type="text/javascript">
import { mapState } from 'vuex'
export default{
	name:'jilu3',
	data:function(){
		return{
			list3:[]
			
		}
	},
	mounted(){
		console.log(this.$route.params)
		this.$store.state.count = '质检管理'
		this.getlist3()
	},
	methods:{
		
		getlist3(){
			var that= this
			$.ajax({
				type:'POST',
				url:'/wio/Inspection_record/procedure_project',
				data:{
					procedure_id:that.$route.params.procedure_id
				},
				success:function(res){
					if(JSON.parse(res).status == 1){
						that.list3 = JSON.parse(res).data.list
					}
					
					
				}
			})
		},
		backTo(){
			
			 this.$router.push({
	          path:'/jilu2',
	          name:'jilu2',
	          params:{
	          	goods_name:this.$route.params.goods_name,
				goods_id:this.$route.params.goods_id
	          }
	        })
		},
		next(list){
			this.$router.push({
	          path:'/jilu4',
	          name:'jilu4',
	          params:{
	          	goods_name:this.$route.params.goods_name,
				goods_id:this.$route.params.goods_id,
				project_id:list.id,
				procedure_id:this.$route.params.procedure_id
	          }
	        })
		},

	    naviTo({path, query}) {
	        this.$router.push({
	          path, query
	        })
	    },
	    
  }
}
</script>
<style type="text/css">
	.jilu3{
		width:100%;
		height: 84.2vh;
		padding-top: 0.15rem;
		background: #EFEFF4;
	}
	.jilu3 .wrap{
		width:3.45rem;
		margin: 0 auto;
		margin-top: 0.15rem;

	}
	.jilu3 .wrap>div{
		display: flex;
		width:3.30rem;
		height: 0.66rem;
		background: #fff;
		line-height: 0.46rem;
		padding-left: 0.15rem;
		margin-top: 0.1rem;
	}
	.jilu3 .backto{
		display: flex;
		margin-right: 0.71rem;
		font-size: 0.16rem;
		color: #353535;
	}
	.jilu3 .backto img{
		width: 0.06rem;
		height: 0.1rem;
		margin-top: 0.21rem;
		margin-right: 0.05rem;
	}
	.jilu3 .wrap .back{
		color: #008CFF;
		font-size: 0.14rem;
	}
	.jilu3 .wrap ul{
		
		margin-top: 0.1rem;
	}
	.jilu3 .wrap ul li{
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
	.jilu3 .wrap ul li img{
		width:0.16rem;
		height: 0.48rem;
	}
	.jilu3 .wrap  .weight{
		display: flex;
		height: 0.32rem;
		padding-top: 0.29rem;
		border-bottom: 1px solid #e5e5e5;
		position: relative;
		font-size: 0.16rem;
		color: #353535;
	}
	.jilu3 .begin{
		position: absolute;
		top:0.34rem;
		right:0.15rem;
		font-size: 0.14rem;
		color: #1AAD19;
	}
	.jilu3 .detail{
		height: 1.055rem;
		display: flex;
		text-align: left;
		font-size: 0.14rem;
		color: #666;
		margin-top: 0.05rem;
		position: relative;
	}
	.jilu3 .detail div{
		margin-top: 0.05rem;
		
	}
	.jilu3 .right{
		position: absolute;
		right:0.15rem;
		text-align: right;
	}
	.jilu3 .thought{
		position: absolute;
		top:0.34rem;
		right:0.15rem;
		font-size: 0.14rem;
		color: #1AAD19;
	}
	

	
</style>