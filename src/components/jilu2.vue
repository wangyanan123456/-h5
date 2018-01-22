<template>
	<div class="jilu2"  >
	<div class="hui"></div>
	<div class="today">
			<div>
				<img src="../assets/img/data.png">
			</div>
			<div >
				<!-- <input   v-model='today'  v-if="sure"> -->
				<div @click="open('picker1')" size="large">
					<input   v-model='today'  v-if="sure">
					<div  v-if= "!sure" style="margin-top: 0.05rem">日期选择</div>
				</div>
			<br>
			<mt-datetime-picker
			  ref="picker1"
			  type="date"
			  v-model="value1"
			  year-format="{value} 年"
			  month-format="{value} 月"
			  date-format="{value} 日"
			  :startDate="startDate"
			  :endDate="endDate"
			  @confirm="handleChange">
			</mt-datetime-picker>
					</div>
			</div>
		<div class="box">
		
			<div >
				<div class="backto">
					<div @click.stop="naviTo({path: '/jilu'})">
						<img src="../assets/img/back.png">
					</div>
					<div>返回</div>
				</div>
				<div class="divTitle">{{this.$route.params.goods_name}}质检</div>
			</div>
			<ul>
			<li v-for= 'list in list2' @click="next(list)">
				<div class="flex">
					<div>{{list.process_name}}</div>
					<div class="kai">
						<div>任务数{{list.project_numer}}</div>
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
import { mapState } from 'vuex'
export default{
	name:'zhijian3',
	
	data:function(){
		return{
			list2:[],
			value: null,
      		value1: null,
      		startDate: new Date('2018'),
      		endDate: new Date(),
      		today:'请选择日期',
      		sure:false
		}
	},
	mounted(){
		this.getList2()
		console.log(this.$route.params)
		this.$store.state.count = '质检管理'
	},
	methods:{
		open(picker) {
        this.$refs[picker].open();
      },
      formatDate(date) {
	    const y = date.getFullYear()
	    let m = date.getMonth() + 1
	    m = m < 10 ? '0' + m : m
	    let d = date.getDate()
	    d = d < 10 ? ('0' + d) : d
	    return y + ' ' + m + ' ' + d
	  },
      handleChange(value) {
        this.date1 = value.toString();
       	var d = new Date(this.date1);
          var  nowd = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate() 
          console.log(nowd)
          this.sure = true
          this.today = nowd
      },
		getList2(){
			var that = this
			$.ajax({
			type:'POST',
			url:'/wio/Inspection_record/goods_procedure',
			data:{
				goods_id:that.$route.params.goods_id
			},
			success:function(res){
				if(JSON.parse(res).status == 1){
					that.list2 = JSON.parse(res).data
				}
				
			}

			})
		},
		naviTo({path, query}) {
			console.log(9)
        this.$router.push({
          path, query
        })
      },
      next(item){
      	
        this.$router.push({
          path:'/jilu3',
          name:'jilu3',
          params:{
          	procedure_id:item.id,
          	goods_name:this.$route.params.goods_name,
          	goods_id:this.$route.params.goods_id

          }
        })
      }
	}
}
</script>
<style type="text/css">
	.jilu2{
		/*padding-top: 0.5rem;*/
		width:100%;
		height: 86.3vh;
		background: #EFEFF4;
	}
	.jilu2 .box{
		margin-top: 0.5rem;
	}
	/*.zhijian3 .box>div{
		width:3.45rem;
		margin: 0 auto;
	}*/
	.jilu2 .box>div{
		margin: 0 auto;
		display: flex;
		width:3.30rem;
		height: 0.52rem;
		background: url('../assets/img/run1.png') no-repeat;
		background-image: 100% 100%;
		background-size: 100% 100%;
		line-height: 0.52rem;
		padding-left: 0.15rem;
		/*background: red;*/
	}
	.jilu2 .backto{
		display: flex;
		margin-right: 0.71rem;
		font-size: 0.14rem;
		color: #008CFF;
	}
	.jilu2 .backto img{
		width: 0.06rem;
		height: 0.1rem;
		margin-top: 0.21rem;
		margin-right: 0.05rem;
	}
	.jilu2 ul{
		width:3.30rem;
		padding-left: 0.15rem;
	}
	.jilu2 li{
		height: 0.51rem;
		background: #fff;
		padding-left: 0.2rem;
		width:3.25rem;
		/*width:96%;*/
		/*padding-left: 4%;*/
		border-bottom:1px solid #e5e5e5;
		line-height: 0.51rem;
		background: red;
	}
	.jilu2 li:first-child{
		background: url('../assets/img/run2.png') no-repeat;
		background-image: 100% 100%;
		background-size: 100% 100%;
		height: 0.51rem;
	}
	/*.jilu2 li:last-child{
		background: url('../assets/img/lastli.png') no-repeat;
		background-image: 100% 100%;
		background-size: 100% 100%;
		height: 0.51rem;
	}*/
	.jilu2 .flex{
		display: flex;
		position: relative;
	}
	.jilu2 .kai{
		display: flex;
		position: absolute;
		right: 0.2rem;	
	}
	.jilu2 .kai img{
		width: 0.06rem;
		height: 0.1rem;
		margin-top:0.2rem;
		margin-left: 0.05rem;	
	}
	.jilu2 li:last-child{
		border: none;
	}
	.jilu2 .today {
		width:3.45rem;
		height: 0.35rem;
		background: #fff;
		margin-bottom: 0.15rem;
		border-radius: 0.24rem;
		display: flex;
		position: fixed;
		top:1.05rem;
		left: 0.15rem;
		color: #999;
		z-index: 2000;
	}
	.jilu2 .today  input{
		border:none;
		height: 0.25rem;
		line-height: 0.25rem;
		width:1.5rem;
		color: #999;
		margin-top: 0.05rem;
	}
	.jilu2 .today img{
		width:0.17rem;
		height: 0.16rem;
		margin-left:0.17rem;
		margin-top: 0.1rem;
		margin-right: 0.05rem;
	}
</style>