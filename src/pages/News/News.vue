<template>
    <div>
      <el-row class="newtopbg" >
      </el-row>
      <el-row type="flex" justify="center" >
        <el-col :span="12" class="navdingwei" >
          <topnav message="2" class="newtopdingwei" ></topnav>
        </el-col>
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
      components:{
        FooterGuide,
        topnav,
        newscontain,
        youshangkuang,
        fanhuishouding6,
        footerGuide
      }
    }
</script>

<style>
.newtopbg{
  width: 100%;
  background-color: #39c195;
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
</style>
