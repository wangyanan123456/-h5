<template>
	<div class="zhijian3"  >
	<div class="today">
			<div>
				<img src="../assets/img/data.png">
			</div>
			<div >
				<!-- <input   v-model='today'  v-if="sure"> -->
				<div @click="open('picker1')" size="large">
					<input   v-model='today'  v-if="sure">
					<div  v-if= "!sure" style="margin-top: 0.1rem">日期选择</div>
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
			url:'/api/Inspection_record/goods_procedure',
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
	.today {
		width:3.45rem;
		height: 0.35rem;
		background: #fff;
		margin: 0 auto;
		margin-bottom: 0.15rem;
		border-radius: 0.24rem;
		display: flex;
	}
	.today  input{
		border:none;
		height: 0.25rem;
		line-height: 0.25rem;
		width:1.5rem;
		color: #999;
		margin-top: 0.05rem;
	}
	.today img{
		width:0.17rem;
		height: 0.16rem;
		margin-left:0.17rem;
		margin-top: 0.1rem;
		margin-right: 0.05rem;
	}
</style>