<template>
    <div>
      <el-row class="newtopbg" >
      </el-row>
      <el-row type="flex" justify="center" >
        <el-col :span="12" class="navdingwei" >
          <topnav message="2" class="newtopdingwei" ></topnav>
        </el-col>
      </el-row>
      <el-row v-show="isShow" class="fixed-layer contrl-display">
        <topnav message="2"></topnav>
      </el-row>
      <youshangkuang></youshangkuang>
      <newscontain class="newsnrdignwei"></newscontain>
      <footerGuide class="newsfooterposition"></footerGuide>
      <fanhuishouding6></fanhuishouding6>
      </div>

</template>

<script>
  import FooterGuide from '../../components/FooterGuide/FooterGuide'
  import topnav from '../../components/Banner/Banner'
  import newscontain from '../../components/newscontain/newscontain'
  import youshangkuang from '../../components/youshangtupian/youshangtupian'
  import fanhuishouding6 from '../../components/fanhuiding/fanhuiding'
  import footerGuide from '../../components/FooterGuide/FooterGuide'
    export default {
        name: "News",
        data(){
          return{
            isShow:false
          }
        },
      components:{
        FooterGuide,
        topnav,
        newscontain,
        youshangkuang,
        fanhuishouding6,
        footerGuide
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
.newtopbg{
  width: 100%;
  background-color: #46a976;
  padding-bottom: 5rem;
  z-index: -1;
  position: absolute;
}
.navdingwei{
  margin-top: 0.5rem;
}
  .newtopdingwei{
    position: absolute;
    top: 0;
    z-index: 99;
    font-family: mfont;
  }
  .newsnrdignwei{
    margin-top: 5rem;
  }
  .newsfooterposition{
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
