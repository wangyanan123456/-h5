<template>
  <div class="hello">
    <div v-if='img'>
          <ul class="jobList">
            <li>
              <img src="../assets/img/kucun.png">
            </li>
            <li  @click.stop="naviTo({path: '/zhijian'})">
               <img src="../assets/img/zhiliang.png">
            </li>
            <li >
               <img src="../assets/img/boss.png">
            </li>
          </ul>
    </div>
    <div  v-if='!img'>hi</div>
    <div class="footer">
      <ul>
      <li @click="tojobtai">
           <div  :class="img?'img1':'img4'"  ></div>
          
          <p :style="{color: img? '#008CFF' : '#999'}">工作台</p>
      </li>
      <li @click="tosetting">
       <div  :class=" !img?'img2':'img5'" ></div>
          <p :style="{color:!img ? '#008CFF' : '#999'}">退出</p>
      </li>
      </ul>
    </div>
   
      
     
    </ul>
   
  </div>
</template>

<script>
import $ from 'jquery'
export default {
  name: 'jobTai',
  data () {
    return {
     img:true
    }
  },
  mounted(){
      this.getCode() 
  },
  methods:{
    
    getCode(){
      $.ajax({
        type:'POST',
        url:'/api/weixin_user/check_login',
        success:function(res){
          // console.log(res)
        }
      })
    },
    tojobtai:function(){
      this.img = true
    },
    tosetting:function(){
      this.img = false
    },
    naviTo({path, query}) {
        this.$router.push({
          path, query
        })
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello{
  padding-top:0.69rem;
  width:100%;
  min-height: 82vh;
  background: #EFEFF4;
}
  .footer{
      position: fixed;
      bottom: 0rem;
      font-size: 0.2rem;
      background:#fff;
      height: 0.44rem; 
      padding-top: 0.05rem;
      width:100%; 
      border-top: 1px solid #e7e7e7;    
    }
  .footer ul{
    display: flex;
  }
  .footer li{
    margin-left: 0.78rem;
    margin-right: 1.6rem;
  }
  .footer li:last-child{
    margin-right: 0rem;
     margin-left: 0;
  }
  .footer p{
   font-size: 0.11rem;
  }
  
  .footer .img1{
   background: url('../assets/img/foot11.png') ;
    background-size: 100% 100%;
    height: 0.24rem;
    width:0.22rem;
    margin: 0 auto;
  }
  .footer .img2{
    background: url('../assets/img/img7.png') ;
    background-size: 100% 100%;
    height: 0.24rem;
    width:0.22rem;
    margin: 0 auto;

  }
  .footer .img4{
   background: url('../assets/img/foot1.png') ;
    background-size: 100% 100%;
   height: 0.24rem;
    width:0.22rem;
    margin: 0 auto;
  }
  .footer .img5{
    background: url('../assets/img/foot7.png') ;
    background-size: 100% 100%;
   height: 0.24rem;
    width:0.22rem;
    margin: 0 auto;

  }
  .jobList li{
    width:100;
    height: 1.3rem;
    margin-top: 0.1rem;
  }

  
  
</style>
