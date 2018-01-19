<template>
	<div class="xiugai">
		<div class="backto" @click="backto({path: '/wenlist2'})">
	      <img src="../assets/img/backto.png">
	      <div>返回</div>
	    </div>
		<div class="detail">问题描述</div>
		<textarea class="text" v-model='mesg'></textarea>
		<div class="name" style="border-bottom: 1px solid #e5e5e5">
			<div class="img">
				<img src="../assets/img/name.png">
			</div>
			<div class="gai">整改人</div>
			<div class="xuan" style="margin-left: 2.05rem;">
				<div>{{name}}</div>
				<div class="kai">
					<img src="../assets/img/kai.png">
				</div>
			</div>
		</div>
		<div class="name" >
			<div class="img">
				<img src="../assets/img/data.png">
			</div>
			<div class="gai">整改时间</div>
			<div class="xuan" style="margin-left: 1.7rem;">
				<div> {{today}}</div>
				<div class="kai">
					<img src="../assets/img/kai.png">
				</div>
			</div>
		</div>
		<div class="name" style="margin-top:0.1rem;border-bottom: 1px solid #e5e5e5">
			<div class="img">
				<img src="../assets/img/gai.png">
			</div>
			<div class="gai">检查项</div>
		</div>
		<div class="checkdetali">{{check_item}}</div>

		<div class="btn" @click="keep">修改</div>
	</div>
</template>
<script type="text/javascript">
	export default{
		name:'xiugai',
		data:function(){
			return{
				mesg:'',
				today:'',
				check_item:'',
				name:''
			}
		},
		mounted(){
			console.log(this.$route.params)
			this.getmeg()
			var d = new Date();
			this.today = d.getFullYear()+"-"+(d.getMonth()+1)+"-"+d.getDate();
			// console.log(this.today)
		},
		methods:{

			getmeg(){
				var that = this
				$.ajax({
					type:'POST',
					url:'/wio/subproject_problem/show',
					data:{
						id:that.$route.params.problem_id
					},
					success:function(res){
						console.log(JSON.parse(res).data)
						that.mesg = JSON.parse(res).data.problem_desc
						that.check_item = JSON.parse(res).data.check_item
						that.name = JSON.parse(res).data.head_user
					}
				})
				
			},

			backto(){
				this.$router.push({
		          path:'/wenlist2',
		          name:'wenlist2',
		          params:{
		          	project_id:this.$route.params.project_id,
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
						url:'/wio/subproject_problem/edit',
						data:{
							id:that.$route.params.problem_id,
							problem_desc:that.mesg

						},
						success:function(res){
							if(JSON.parse(res).status==1){
								that.$router.push({
					          	 path:'/wenlist2',
					          	 name:'wenlist2',
					          	  params:{
						          project_id:that.$route.params.project_id,
			          			 problem_id:that.$route.params.problem_id,
								 problem_desc:that.mesg
									
						          }
								})
							}
						}
					})
					
		        
				}
		        
	      },
			naviTo({path, query}) {
	        this.$router.push({
	          path, query
	        })
	      }
		}
	}

</script>
<style type="text/css">
	.xiugai{
		padding-top: 0.64rem;
		width:100%;
		min-height: 90vh;
		background: #EFEFF4;
		position: relative;
	}
	.xiugai .backto{
	    position: fixed;
	    top:0.32rem;
	    z-index: 1200;
	    color: #fff;
	    display: flex;
	    left: 0.05rem;
   }
   	.xiugai .backto img{
		width: 0.1rem;
		height: 0.18rem;
		margin-right: 0.05rem;
		
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
   		background: #fff;
   		padding-left: 0.15rem;
   		
   	}
   	.xiugai .name .img{
   		width:0.24rem;
   		height: 0.24rem;
   		margin-top: 0.15rem;
   		margin-right: 0.1rem;
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


	


</style>