<template>
	<div class="zhijian3"  >
		<div class="box">
			<div>
				<div class="backto" @click='backTo'>
					<div>
						<img src="../assets/img/back.png">
					</div>
					<div>返回</div>
				</div>
				<div class="divTitle">{{this.$route.params.goods_name}}质检</div>
			</div>
			<ul>
			<li v-for='item in list2' @click.stop="naviTo(item)">
				<div class="flex">
					<div>{{item.process_name}}</div>
					<div class="kai">
						<div>任务数{{item.project_numer}}</div>
						<div>
							<img src="../assets/img/kai.png">
						</div>
						
					</div>
				</div>
			</li>
			
		</ul>
		</div>
	</div>
</template>
<script type="text/javascript">
import $ from 'jquery'
export default{
	name:'zhijian3',
	data:function(){
		return{
			goodsTitle:'',
			"list2":[]
		}
	},
	mounted(){
		
		console.log(this.$route.params)
		this.getList2()
	},
	methods:{
		getList2(){
			var that = this
			$.ajax({
			type:'POST',
			url:'/api/Inspection_task/goods_procedure',
			data:{
				goods_id:this.$route.params.goods_id
			},
			success:function(res){
				console.log(JSON.parse(res))
				that.list2 = JSON.parse(res).data
			}

			})
		},
      backTo(){
      	this.$router.push({
          path:'/zhijian',
         
        })
      },
		naviTo(item) {
		
        this.$router.push({
          path:'/zhijian4',
          name:'zhijian4',
          params:{
          	process_id:item.id,
          	goods_name:this.$route.params.goods_name,
          	goods_id:this.$route.params.goods_id

          }
        })
      }
	}
}
</script>
<style type="text/css">
	.zhijian3{
		/*padding-top: 0.5rem;*/
		width:100%;
		height: 81vh;
		background: #EFEFF4;
	}
	.box>div{
		width:3.45rem;
		margin: 0 auto;
	}
	.box>div{
		display: flex;
		width:3.30rem;
		height: 0.52rem;
		background: url('../assets/img/run1.png') no-repeat;
		line-height: 0.52rem;
		padding-left: 0.15rem;
	}
	.zhijian3 .backto{
		display: flex;
		margin-right: 0.71rem;
		font-size: 0.14rem;
		color: #008CFF;
	}
	.zhijian3 .backto img{
		width: 0.06rem;
		height: 0.1rem;
		margin-top: 0.21rem;
		margin-right: 0.05rem;
	}
	.zhijian3 ul{
		width:3.30rem;
		padding-left: 0.15rem;
	}
	.zhijian3 li{
		height: 0.51rem;
		background: #fff;
		padding-left: 0.2rem;
		width:3.25rem;
		/*width:96%;*/
		/*padding-left: 4%;*/
		border-bottom:1px solid #e5e5e5;
		line-height: 0.51rem;
	}
	.zhijian3 li:first-child{
		background: url('../assets/img/run2.png') no-repeat;
		height: 0.51rem;
	}
	.flex{
		display: flex;
		position: relative;
		font-size: 0.14rem;
		color: #666;
	}
	.zhijian3 .kai{
		display: flex;
		position: absolute;
		right: 0.2rem;	
	}
	.zhijian3 .kai img{
		width: 0.06rem;
		height: 0.1rem;
		margin-top:0.2rem;
		margin-left: 0.05rem;	
	}
	.zhijian3 li:last-child{
		border: none;
	}
</style>