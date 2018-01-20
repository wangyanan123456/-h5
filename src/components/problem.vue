<template>
	<div class="xiugai">
		<div class="backto" @click='backTo'>
	      <img src="../assets/img/backto.png">
	      <div>返回</div>
	    </div>
		<div class="detail">问题描述</div>
		<textarea class="text" v-model='mesg'></textarea>
		<div class="name" style="border-bottom: 1px solid #e5e5e5">
			<div class="img">
				<img src="../assets/img/name.png"  style="width:0.24rem;height0.24rem">
			</div>
			<div class="gai">整改人</div>
			<div class="xuan" style="margin-left: 2.1rem;">
				<div>{{name}}</div>
				<!-- <div class="kai">
					<img src="../assets/img/kai.png" >
				</div> -->
			</div>
		</div>
		<div class="name" >
			<div class="img">
				<img src="../assets/img/data.png" style="width:0.24rem;height0.24rem">
			</div>
			<div class="gai">整改时间</div>
			<div class="xuan" style="margin-left: 1.72rem;">
				<div> {{today}}</div>
				<!-- <div class="kai">
					<img src="../assets/img/kai.png">
				</div> -->
			</div>
		</div>
		<div class="name" style="margin-top:0.1rem;border-bottom: 1px solid #e5e5e5">
			<div class="img">
				<img src="../assets/img/gai.png" style="width:0.24rem;height0.24rem">
			</div>
			<div class="gai">检查项</div>
		</div>
		
		<div class="checkdetali">{{this.$route.params.goods_name}}/{{this.$route.params.process_name}}/{{this.$route.params.task_name}}</div>
		<div class="btn" @click="keep()">保存</div>
		<div class="toast" v-if='apper'>字符限制3-200</div>
	</div>
</template>
<script type="text/javascript">
	export default{
		name:'check',
		data:function(){
			return{
				mesg:'',
				apper:false,
				today:'',
				name:''
			}
		},
		mounted(){
			console.log(this.$route.params)

			
			var d = new Date();
			this.today = d.getFullYear()+"-"+(d.getMonth()+1)+"-"+d.getDate();
			console.log(this.today)
			this.getname()
		},
		methods:{
			getname:function(){
			var that = this
			$.ajax({
				type:'POST',
				url:'/wio/subproject_problem/problem_info',
				data:{
					project_id:this.$route.params.project_id,
				},
				success:function(res){
					if(JSON.parse(res).status==1){
						that.name = JSON.parse(res).data.head_user
					}
					
				}
			})
		},
			backTo(){
				 this.$router.push({
		          path:'/yanshou',
		          name:'yanshou',
		          params:{
		          	goods_name:this.$route.params.goods_name,
					project_id:this.$route.params.project_id,
					goods_id:this.$route.params.goods_id,
					procedure_id:this.$route.params.procedure_id,
					goods_id:this.$route.params.goods_id,
					task_name:this.$route.params.task_name,
					process_name:this.$route.params.process_name
		          }
		        })
			},
			keep() {
				if(3>parseInt(this.mesg.length)  ||  200<parseInt(this.mesg.length) || parseInt(this.mesg.length) ==0){
						this.apper = true
			      		var that = this
			      		setTimeout(function(){
		          			that.apper = false
		        		},1000)
				}
				if(3<=parseInt(this.mesg.length) && parseInt(this.mesg.length) <=200 ){
					var that = this
					$.ajax({
						type:'POST',
						url:'/wio/subproject_problem/add',
						data:{
							check_project_id:that.$route.params.check_project_id,
							check_subproject_id:that.$route.params.check_subproject_id,
							problem_desc:that.mesg
						},
						success:function(res){
							// console.log(that.$route.params.check_subproject_id)
							if(JSON.parse(res).status==1){
								that.$router.push({
					          	 path:'/yanshou2',
					          	 name:'yanshou2',
						          params:{
						          	goods_name:that.$route.params.goods_name,
						          	procedure_id:that.$route.params.procedure_id,
									project_id:that.$route.params.project_id,
									goods_id:that.$route.params.goods_id,
									goods_id:that.$route.params.goods_id,
									task_name:that.$route.params.task_name,
									process_name:that.$route.params.process_name

						          }
								})
							}
						}
					})
					
		        
				}
		        
	      }
		}
	}

</script>
<style type="text/css">
	.xiugai{
		padding-top: 0.44rem;
		width:100%;
		min-height: 90vh;
		background: #EFEFF4;
		position: relative;
	}
	.xiugai .backto{
	    position: fixed;
	    top:0.12rem;
	    z-index: 1200;
	    color: #fff;
	    display: flex;
	    left: 0.1rem;
   }
   	.xiugai .backto img{
		width: 0.1rem;
		height: 0.18rem;
		margin-right: 0.05rem;
		
   	}
   	.xiugai .backto div{
   		margin-top: -0.05rem;
   	}
   	.xiugai .detail{
   		margin-top: 0.1rem;
   		margin-left: 0.15rem;
   		color: #353535;
   		font-size: 0.14rem;
   		text-align: left;
   	}
   	.xiugai .text{
   		width: 99%;
   		height: 1.2rem;
   		border:none;
  		resize : none;
  		margin-top: 0.1rem;
  		margin-bottom: 0.06rem;
   	}
   	.xiugai .name{
   		display: flex;
   		width: 3.6rem;
   		height: 0.54rem;
   		line-height: 0.2rem;
   		background: #fff;
   		padding-left: 0.15rem;
   		
   	}
   	.xiugai .name .img{
   		width:0.24rem;
   		height: 0.24rem;
   		margin-top: 0.15rem;
   		margin-right: 0.1rem;
   	}
 	.xiugai .name .img img{
		width:0.24rem;
		height: 0.24rem;
	}
   	.xiugai .name .gai{
   		font-size: 0.14rem;
   		color: #353535;
   		margin-top: 0.17rem;
   	}
   	.xiugai .xuan{
   		display: flex;
   		margin-top: 0.17rem;
   		color: #666;
   		font-size: 0.14rem;
   		margin-top: 0.17rem;
   	}
   	.xiugai .xuan .kai{
   		width:0.15rem;
   		height: 0.15rem;
   		margin-left: 0.05rem;
   		margin-top:0.03rem;
   	}
   	.xiugai .checkdetali{
   		width: 3.26rem;
   		height: 0.4rem;
   		line-height: 0.4rem;
   		background: #fff;
   		color: #353535;
   		font-size: 0.14rem;
   		padding-left: 0.49rem;
   		text-align: left;
   	}
   	.xiugai .btn{
   		width:100%;
   		height: 0.48rem;
   		line-height: 0.48rem;
   		background: #008CFF;
   		color: #fff;
   		font-size: 0.18rem;
   		position: fixed;
   		bottom: 0;
   	}
   	.xiugai .toast{
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


	


</style>