<template>
	<div class="yanshou2">
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
	    <div class="daiyanshou">
	    	<div>待整改</div>
	    	<div class="begincheck"  @click='yanshou'>验收</div>
	    </div>
	    <ul>
				<li   v-for='list in list2' >
					<div class="weight" v-if='list.problem_id==0'>
						<div>
			  	 			<label><input type="checkbox" name="items" v-model='arr' v-bind:value="list.id"><span></span></label><br>
			  			</div>
						<div class="zhong">{{list.sub_project_name}}</div>
						<div class="begin" @click="problem(list)">
							<div>添加问题</div>
							<div>
								<img src="../assets/img/jia.png">
							</div>
						</div>
					</div>
					<div class="weight" v-if='list.problem_id!==0'>
						<div class="checkxuan">
			  	 			<label></label><br>
			  			</div>
						<div class="zhong">称重结果足秤</div>
						<div class="begin" @click="checkproblem(list)">
							<div>查看问题</div>
							<div>
								<img src="../assets/img/kan.png">
							</div>
						</div>
					</div>
					<div class="detail">
						<div class="left">
							<div>待处理问题数量</div>
							<div>生产人员已经完成本项检查工作</div>
						</div>
						<div class="right">
							<div>{{list.wait_check_num}}</div>
						</div>
					</div>
					<div class="isok" @click="noproblem(list)"  v-if='list.problem_id!==0'>
						<div>问题已解决</div>
					</div>
				</li>
				
				 
			</ul>
		<div class="toast" v-if='apper'>请先处理有问题的任务</div>
	</div>
</template>
<script type="text/javascript">
	export default{
		name:'jilu2',
		data:function(){
			return{
				isthought:false,
				apper:false,
				list2: [],
				check_project_id:'',
				arr:[],
				total:''
			}
		},
		mounted(){
			this.apper = true
	      		var that = this
	      		 setTimeout(function(){
          			that.apper = false
        			},1000)
				console.log(this.$route.params)
				this.gitlists()
		},
		methods:{
			
				gitlists(){
				var that = this
				$.ajax({
					type:'POST',
					url:'/api/Inspection_task/sub_project',
					data:{
						project_id:that.$route.params.project_id,
						
					},
					success:function(res){
						that.list2= JSON.parse(res).data.list
						that.check_project_id = JSON.parse(res).data.check_project_id,

						// that.check_project_id = JSON.parse(res).data.check_project_id
						
						that.total = JSON.parse(res).total
						console.log(res)
					}
				})
				},
			
			
			naviTo({path, query}) {
	        this.$router.push({
	          path, query
	        })
	      },
	      // 查看问题
	       checkproblem(list){
	    	 this.$router.push({
	          path:'/xiugai',
	          name:'xiugai',
	          params:{
	          	problem_id:list.problem_id,
	          	project_id:this.$route.params.project_id,
	          	// check_item:this.$route.params.check_item
	          }
	        })
	    },
	    // 问题已解决
	    noproblem(list){
	    	this.$router.push({
	          path:'/wenyanshou',
	          name:'wenyanshou',
	          params:{
	          	problem_id:list.problem_id,
	          	project_id:this.$route.params.project_id,
	          	check_item:this.$route.params.check_item
	          }
	      })
	    },
	    // 添加问题
	    problem(list){
	    	this.$router.push({
	          path:'/wenproblem',
	          name:'wenproblem',
	          params:{
	          	check_subproject_id:list.check_subproject_id,
	          	check_project_id:this.check_project_id,
	          	project_id:this.$route.params.project_id
	          	// check_item:this.$route.params.check_item
	          }
	      })
	    },
	      nothough:function(){
	      	this.isthought = false
	      },
	      yanshou:function(){
	      	if(this.arr.length==this.total){
	      		var that = this
	      		
	      		this.isthought = true
	      	}
	      	if(this.arr.length!=this.total){
	      		console.log(this.arr)
	      		this.apper = true
	      		var that = this
	      		 setTimeout(function(){
          			that.apper = false
        			},1000)
	      	}
	      },

		}
	}

</script>
<style type="text/css">
	.yanshou2{
		padding-top: 0.64rem;
		width:100%;
		min-height: 80vh;
		background: #EFEFF4;
		position: relative;
	}
	.yanshou2 .yanshou1{
		top: 0.64rem;
		width:100%;
		height: 90vh;
		background: #000;
		position: absolute;
		z-index: 3000;
		opacity: 0.6;
	}
	.yanshou2 .checkxuan{
		width:0.2rem;
		height: 0.2rem;
		background: #e5e5e5;
		/*margin-left: -0.05rem;*/
	}
   	.yanshou2 .backto{
	    position: fixed;
	    top:0.32rem;
	    z-index: 1200;
	    color: #fff;
	    display: flex;
	    left: 0.05rem;
	   }
   	.yanshou2 .backto img{
		width: 0.1rem;
		height: 0.18rem;
		margin-right: 0.05rem;
		
   	}
   	.yanshou2 .daiyanshou{
   		display: flex;
   		padding-left: 0.15rem;
   	}
   	.yanshou2 .daiyanshou  div{
   		margin-top: 0.15rem;
   		line-height: 0.32rem;
   	}
   	.yanshou2 .begincheck{
   		width:0.84rem;
   		height: 0.32rem;
   		
   		color: #fff;
   		font-size: 0.16rem;
   		background: #008CFF;
   		border-radius: 0.03rem;
   		
   		margin-left: 2.17rem;
   	}
   	.yanshou2  ul{
   		width:3.45rem;
   		margin:0 auto;
		
		margin-top: 0.1rem;
	}
	.yanshou2 ul li{
		padding-left: 0.15rem;
		margin-bottom: 0.11rem;
		background: #fff;
		/*border-bottom:1px solid #e5e5e5;*/
	}
	.yanshou2  .weight{
		display: flex;
		height: 0.31rem;
		padding-top: 0.11rem;
		border-bottom: 1px solid #e5e5e5;
		position: relative;
		font-size: 0.16rem;
		color: #353535;
	}
	.yanshou2 .begin{
		position: absolute;
		top:0.15rem;
		right:0.15rem;
		font-size: 0.14rem;
		color: #008CFF;
		display: flex;
	}
	.yanshou2 .begin img{
		width:0.15rem;
		height: 0.15rem;
		margin-left: 0.05rem;

	}
	.yanshou2 .detail{
		height: 0.67rem;
		display: flex;
		text-align: left;
		font-size: 0.14rem;
		color: #666;
		/*margin-top: 0.05rem;*/
		position: relative;
	}
	.yanshou2 .detail div{
		margin-top: 0.07rem;
		
	}
	.yanshou2 .right{
		position: absolute;
		right:0.15rem;
		text-align: right;
	}
	.yanshou2 .thought{
		position: absolute;
		top:0.15rem;
		right:0.15rem;
		font-size: 0.14rem;
		color: #1AAD19;
	}
	.yanshou2 .zhong{
		margin-left: 0.05rem;
	}
	.yanshou2 input[type="checkbox"]{
		appearance: none; 
		-webkit-appearance: none;
		outline: none;
		display:none;
	}
	.yanshou2 label{
		width:20px;
		height:20px;
		display:inline-block;
		cursor:pointer;
		line-height: 0.14rem;
		font-size: 0.34rem;
		color: #666;
		/*margin-top:0.2rem;*/
	}
	.yanshou2 label input[type="checkbox"] + span{
		width:20px;
		height:20px;
		display:inline-block;
		background:url(../assets/img/dui1.png)  no-repeat;
	}
	.yanshou2 label input[type="checkbox"]:checked + span{
		width:20px;
		height:20px;
		display:inline-block;
		background:url(../assets/img/dui.png)  no-repeat;
	}
	
	.yanshou2 .toast{
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
	.yanshou2 .problem{
		width:2.85rem;
		height: 3.26rem;
		background: url('../assets/img/problem.png') no-repeat;
		position: absolute;
		z-index: 4000;
		top:1.26rem;
		left: 0.45rem;
	}
	.yanshou2 .renwu{
		margin-top: 1.63rem;
		font-size: 0.26rem;
		color: #363D48;
	}
	.yanshou2 .isthought{
		margin-top:0.05rem;
		font-size: 0.16rem;
		color: #666;
	}
	.yanshou2 .sure{
		display: flex;
		margin-top: 0.41rem;
	}
	.yanshou2 .sure div{
		margin-left: 0.15rem;
		width:1.2rem;
		height: 0.38rem;
		line-height: 0.38rem;
		font-size: 0.2rem;
	}
	.yanshou2 .sure .no{
		background: #E7E7E7;
		color: #999;
	}
	.yanshou2 .sure .ok{
		background: #008CFF;
		color: #fff;
	}
	.yanshou2 .isok{
		width:100%;
		height: 0.52rem;
		background: #fff;
		border-top:1px solid #e5e5e5;
		
	}
	.yanshou2 .isok div{
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