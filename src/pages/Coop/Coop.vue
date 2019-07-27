<template>
    <div>
      <Banner message="1" class="padd"></Banner>
      <coopbanner></coopbanner>
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

          }
      }
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
</style>
