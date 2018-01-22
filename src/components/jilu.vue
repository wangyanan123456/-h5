<template>
	<div class="jilu">
	 <div class="backto" @click.stop="naviTo({path: '/'})">
      <img src="../assets/img/backto.png">
      <div>返回</div>
    </div>
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
			lists:[],
			value: null,
      		value1: null,
      		startDate: new Date('2018'),
      		endDate: new Date(),
      		today:'请选择日期',
      		sure:false
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
          var that =  this
          $.ajax({
          	type:'POST',
          	url:'/wio/Inspection_record/goods_list',
          	data:{
          		date:that.today
          	},
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
		min-height: 86.1vh;
		background:#EFEFF4;
	}
	.jilu ul{
		margin-top: 0.4rem; 
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
	.jilu .today {
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
	.jilu .today  input{
		border:none;
		height: 0.25rem;
		line-height: 0.25rem;
		width:1.5rem;
		color: #999;
		margin-top: 0.05rem;
	}
	.jilu .today img{
		width:0.17rem;
		height: 0.16rem;
		margin-left:0.17rem;
		margin-top: 0.1rem;
		margin-right: 0.05rem;
	}

</style>