<template>
	<div class="two">
	 <div class="backto" @click.stop="naviTo({path: '/'})">
      <img src="../assets/img/backto.png">
      <div>返回</div>
    </div>
    	
		<ul>
			<li v-for='list in lists' @click="torenwu(list)">
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
// var config = require('../assets/js/common.js')
export default{
	name:'zhijian2',
	data:function(){
		return{
			lists:[]
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
				url:'/wio/Inspection_record/goods_list',
				success:function(res){
					if(JSON.parse(res).status==1){
						that.lists = JSON.parse(res).data
						console.log(that.lists)
					}
					
				}
			})
		},
		naviTo({path, query}) {
        this.$router.push({
          path, query
        })
      },
      torenwu(item){

      	this.$router.push({
          path:'/jilu2',
          name:'jilu2',
          params:{
          	goods_id:item.id,
          	goods_name:item.goods_name
          }
        })
      }
	}
}
</script>
<style type="text/css">
	
	.two{
		width: 100%;
		min-height: 86.3vh;
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
	}
	.two .backto{
	    position: fixed;
	    top:0.12rem;
	    z-index: 1200;
	    color: #fff;
	    display: flex;
	    left: 0.1rem;
	   }
   	.two .backto img{
		width: 0.1rem;
		height: 0.18rem;
		margin-right: 0.05rem;
   	}
   	.two .backto div{
   		margin-top: -0.08rem;
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