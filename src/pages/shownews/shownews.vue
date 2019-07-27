<template>
  <div>
    <el-row class="newtopbg" >
    </el-row>
    <el-row type="flex" justify="center" >
      <el-col :span="12" class="navdingwei" >
        <topnav class="newtopdingweiswsw"></topnav>
      </el-col>
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
      components:{
        topnav,
        newsshwoinfo,
        fanhuishouding5,
      }
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
</style>
