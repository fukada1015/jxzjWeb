<template>
    <div>
      <Banner message="1" class="padd"></Banner>
      <coopbanner></coopbanner>
      <el-row v-show="isShow" class="fixed-layer contrl-display">
        <Banner message="1"></Banner>
      </el-row>
      <ywmsline class="ywmsding"></ywmsline>
      <hzmsline class="hzmsdingwei"></hzmsline>
      <zlgys class="zlgysding"></zlgys>
      <qgck class="qgckding"></qgck>
      <jdys class="jdysding"></jdys>
      <fanhuishouding3></fanhuishouding3>
      <youshangkuang></youshangkuang>
      <FooterGuide class="footding"></FooterGuide>
    </div>
</template>

<script>
  import Banner from '../../components/Banner/Banner'
  import coopbanner from '../../components/coop_banner/coop_banner'
  import ywmsline from '../../components/jxzj_ywms/jxzj_ywms'
  import hzmsline from '../../components/jxzj_hzms/jxzj_hzms'
  import zlgys from '../../components/jxzj_zlgys/jxzj_zlgys'
  import qgck from '../../components/jxzj_qgck/jxzj_qgck'
  import jdys from '../../components/jxzj_jdys/jxzj_jdys'
  import FooterGuide from '../../components/FooterGuide/FooterGuide'
  import fanhuishouding3 from '../../components/fanhuiding/fanhuiding'
  import youshangkuang from '../../components/youshangtupian/youshangtupian'

    export default {
        name: "Coop",
      components:{
        Banner,
        coopbanner,
        ywmsline,
        hzmsline,
        zlgys,
        qgck,
        jdys,
        FooterGuide,
        fanhuishouding3,
        youshangkuang,
      },
      data(){
          return{
            isShow:false
          }
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
.ywmsding{
  margin-top: 5rem;
}
  .zlgysding{
    margin-top: 6rem;
  }
  .qgckding{
    margin-top: 7rem;
  }
  .jdysding{
    margin-top: 4rem;
  }
  .footding{
    margin-top: 7rem;
  }
  .padd{
    position: absolute;
    top: 0;
    z-index: 99;
  }
  .hzmsdingwei{
    margin-top: 6rem;
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
