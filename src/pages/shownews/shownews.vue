<template>
  <div>
    <el-row class="newtopbg" >
    </el-row>
    <el-row type="flex" justify="center" >
      <el-col :span="12" class="navdingwei" >
        <topnav message="2" class="newtopdingweiswsw"></topnav>
      </el-col>
    </el-row>
    <el-row v-show="isShow" class="fixed-layer contrl-display">
        <topnav message="2"></topnav>
      </el-row>
    <newsshwoinfo class="newsnrdignwei123"></newsshwoinfo>
    <fanhuishouding5></fanhuishouding5>
  </div>
</template>

<script>
  import topnav from '../../components/Banner/Banner'
  import newsshwoinfo from '../../components/newsshowinfo/newsshowinfo'
  import fanhuishouding5 from '../../components/fanhuiding/fanhuiding'
    export default {
      data(){
        return{
          isShow:false
        }
      },
      components:{
        topnav,
        newsshwoinfo,
        fanhuishouding5,
      },
      methods:{
        handleScroll(){
          // 得到页面滚动的距离
          let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
          if(scrollTop > 80){
            this.isShow = true;
          }else{
            this.isShow = false;
          }
          // 判断页面滚动的距离是否大于吸顶元素的位置
          // this.headerFixed = scrollTop > (this.offsetTop - this.offsetHeight * 2);
        },
      },
      mounted(){
        window.addEventListener('scroll', this.handleScroll);
      },
      destroyed(){
        window.removeEventListener('scroll', this.handleScroll);
      },
    }
    
</script>

<style>
  .newtopdingweiswsw{
    position: absolute;
    top: 0;
  }
  .newsnrdignwei123{
    margin-top: 5rem;
  }
  .contrl-display{
    position: fixed;
    top: 0;
  }
  .fixed-layer{
    width: 100%;
    background: #46a976;
    height: 74px;
    z-index: 999;
  }
</style>
