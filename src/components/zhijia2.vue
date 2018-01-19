<template>
	<div class="two">
	 <div class="backto" @click="backTo">
      <img src="../assets/img/backto.png">
      <div>返回</div>
     </div>
     <div class="hui"></div>
		<ul>
			<li  v-for='list in lists'   @click="naviTo(list)">
				<div class="flex">
					<div>{{list.goods_name}}</div>
					<div class="kai">
						<img src="../assets/img/kai.png">
					</div>
					
				</div>
			</li>
		</ul>
		
	</div>
</template>
<script type="text/javascript">
import $ from 'jquery'
import { mapState } from 'vuex'
export default{
	name:'zhijian2',
	data:function(){
		return{
			lists: []
		}
	},
	mounted(){
		this.getList()
		this.$store.state.count = '质检任务 '
	},
	
	methods:{
		getList:function(){
			var that = this
			$.ajax({
				type:'POST',
				url:'/api/wio/Inspection_task/goods_list',
				success:function(res){
					if(JSON.parse(res).status==1){
						that.lists = JSON.parse(res).data
					}
					
				}
			})
		},
		backTo(){
			 this.$router.push({
	          path: '/' 
	         
	      	 
	        })
		},
		naviTo(list) {
	        this.$router.push({
	          path: '/zhijian3', 
	          name:'zhijian3',
	          params: { 
	          	goods_name: list.goods_name,
	          	goods_id:list.id 
	          }
	      	 
	        })
      }
	}
}
</script>
<style type="text/css">
	
	.two{
		width: 100%;
		min-height: 86.5vh;
		background:#EFEFF4;
	}
	.two ul{
		
	}
	.two li{
		height: 0.5rem;
		background: #fff;
		width:96%;
		padding-left: 4%;
		border-bottom:1px solid #e5e5e5;
		line-height: 0.5rem;
		position: relative;
	}
	.two .backto{
	    position: fixed;
	    top:0.12rem;
	    z-index: 1200;
	    color: #fff;
	    display: flex;
	    left: 0.1rem;
	    /*color:red;*/
	   }
   	.two .backto img{
		width: 0.1rem;
		height: 0.18rem;
		margin-right: 0.05rem;
   	}
	.two .flex{
		display: flex;
		position: relative;
	}
	.two .kai{
		width: 0.06rem;
		height: 0.1rem;
		position: absolute;
		top:0.2rem;
		right: 0.2rem;
	}
	.two li:last-child{
		border: none;
	}

</style>