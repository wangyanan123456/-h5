<template>
	<div class="jilu">
	 <div class="backto" @click.stop="naviTo({path: '/'})">
      <img src="../assets/img/backto.png">
      <div>返回</div>
    </div>
    <div class="hui"></div>
    	
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
import { mapState } from 'vuex'
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
		this.$store.state.count = '质检管理'
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
	
	.jilu{
		width: 100%;
		min-height: 86.3vh;
		background:#EFEFF4;
	}
	.jilu ul{
		padding-top: 
	}
	.jilu li{
		height: 0.5rem;
		background: #fff;
		width:96%;
		padding-left: 4%;
		border-bottom:1px solid #e5e5e5;
		line-height: 0.5rem;
	}
	.jilu .backto{
	    position: fixed;
	    top:0.12rem;
	    z-index: 1200;
	    color: #fff;
	    display: flex;
	    left: 0.1rem;
	   }
   	.jilu .backto img{
		width: 0.1rem;
		height: 0.18rem;
		margin-right: 0.05rem;
   	}
   	.jilu .backto div{
   		margin-top: -0.05rem;
   	}
	.jilu .flex{
		display: flex;
		position: relative;
	}
	.jilu .kai{
		width: 0.06rem;
		height: 0.1rem;
		position: absolute;
		top:0.2rem;
		right: 0.2rem;
	}
	.jilu li:last-child{
		border: none;
	}

</style>