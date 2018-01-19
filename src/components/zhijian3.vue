<template>
	<div class="zhijian3"  >
	<div class="hui"></div>
		<div class="box">
			<div>
				<div class="backto" @click='backTo'>
					<div>
						<img src="../assets/img/back.png">
					</div>
					<div>返回</div>
				</div>
				<div class="divTitle">{{this.$route.params.goods_name}}/<span class='span' style='color:#008CFF'>质检</span></div>
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
					<div class="checked"  v-if='item.status==100'>
						<img src="../assets/img/checked.png">
					</div>

				</div>
			</li>
			<li v-for='item in list2' @click.stop="naviTo(item)">
				<div class="flex">
					<div>{{item.process_name}}</div>
					<div class="kai">
						<div>任务数{{item.project_numer}}</div>
						<div>
							<img src="../assets/img/kai.png">
						</div>

						
					</div>
					<div class="checked"  v-if='item.status==100'>
						<img src="../assets/img/checked.png">
					</div>

				</div>
			</li><li v-for='item in list2' @click.stop="naviTo(item)">
				<div class="flex">
					<div>{{item.process_name}}</div>
					<div class="kai">
						<div>任务数{{item.project_numer}}</div>
						<div>
							<img src="../assets/img/kai.png">
						</div>

						
					</div>
					<div class="checked"  v-if='item.status==100'>
						<img src="../assets/img/checked.png">
					</div>

				</div>
			</li>
		</ul>
		</div>
	</div>
</template>
<script type="text/javascript">
import $ from 'jquery'
import { mapState } from 'vuex'
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
		this.$store.state.count = '质检任务'
	},
	methods:{
		getList2(){
			var that = this
			$.ajax({
			type:'POST',
			url:'/wio/Inspection_task/goods_procedure',
			data:{
				goods_id:this.$route.params.goods_id
			},
			success:function(res){
				if(JSON.parse(res).status == 1){
					that.list2 = JSON.parse(res).data
				}
				
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
          	procedure_id:item.id,
          	goods_name:this.$route.params.goods_name,
          	goods_id:this.$route.params.goods_id,
          	process_name:item.process_name,

          }
        })
      }
	}
}
</script>
<style type="text/css">
	.zhijian3{
		/*padding-top: 0.1rem;*/
		width:100%;
		height: 86.5vh;
		background: #EFEFF4;
	}
	.box>div{
		width:2.45rem;
		margin: 0 auto;
	}
	.box>div{
		display: flex;
		width:3.30rem;
		height: 0.52rem;
		background: url('../assets/img/run1.png') no-repeat;
		background-image: 100% 100%;
		background-size: 100% 100%;
		/*background: red;*/
		line-height: 0.52rem;
		padding-left: 0.15rem;
	}
	.zhijian3 .backto{
		display: flex;
		margin-right: 0.45rem;
		font-size: 0.14rem;
		color: #008CFF;
	}
	.zhijian3 .backto img{
		width: 0.06rem;
		height: 0.1rem;
		margin-top: 0.21rem;
		margin-right: 0.05rem;
	}
	.zhijian3 .checked{
		position: absolute;
		left: 1.2rem;
		top:0.08rem;
	}
	.zhijian3 .checked img{
		width: 0.54rem;
		height: 0.36rem;
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
		background-image: 100% 100%;
		background-size: 100% 100%;
		height: 0.51rem;
	}
	.zhijian3 li:last-child{
		background: url('../assets/img/lastli.png') no-repeat;
		background-image: 100% 100%;
		background-size: 100% 100%;
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