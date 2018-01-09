<template>
  <div class="hello">
    <div v-if='img'>
      <div @click.stop="naviTo({path: '/zhijian'})">hello</div>
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
          <p :style="{color:!img ? '#008CFF' : '#999'}">订单</p>
      </li>
      </ul>
    </div>
   
      
     
    </ul>
   
  </div>
</template>

<script>
export default {
  name: 'jobTai',
  data () {
    return {
     img:true
    }
  },
  methods:{
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
  padding-top: 1.28rem;
}
  .footer{
      position: fixed;
      bottom: 0rem;
      font-size: 0.2rem;
      background:#fff;
      height: 0.7rem; 
      padding-top: 0.07rem;
      width:100%; 
      border-top: 1px solid #e7e7e7;    
    }
  .footer ul{
    display: flex;
  }
  .footer li{
    margin-left: 1.3rem;
    margin-right: 0.7rem;
  }
  .footer p{
   font-size: 0.16rem;
  }
  
  .img1{
   background: url('../assets/img/foot11.png') ;
    background-size: 100% 100%;
    height: 0.38rem;
    width:0.38rem;
    margin: 0 auto;
  }
  .img2{
    background: url('../assets/img/foot22.png') ;
    background-size: 100% 100%;
    height: 0.38rem;
    width:0.38rem;
    margin: 0 auto;

  }
  .img4{
   background: url('../assets/img/foot1.png') ;
    background-size: 100% 100%;
    height: 0.38rem;
    width:0.38rem;
    margin: 0 auto;
  }
  .img5{
    background: url('../assets/img/foot2.png') ;
    background-size: 100% 100%;
    height: 0.38rem;
    width:0.38rem;
    margin: 0 auto;

  }

  
  
</style>
