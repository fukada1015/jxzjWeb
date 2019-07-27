<template>
  <div>
      <Banner message="0" class="navdd"></Banner>
     <banner2></banner2>
    <hengfu> class="hengfu"></hengfu>
    <hexinfuwu></hexinfuwu>
    <pfcg class="pfcgdw"></pfcg>
    <zzfw class="zzfwctrol"></zzfw>
    <duihua class="duihuactrol"></duihua>
    <cpty class="cptyctrol"></cpty>
    <fanhuishouding></fanhuishouding>
    <youshangkuang></youshangkuang>
    <FooterGuide class="footCtrol"></FooterGuide>
  </div>
</template>

<script>
  import Banner from '../../components/Banner/Banner'
  import banner2 from '../../components/banner2/banner2'
  import hengfu from '../../components/hengfu/hengfu'
  import hexinfuwu from '../../components/hexinfuwu/hexinfuwu'
  import pfcg from '../../components/pfcg/pfcg'
  import zzfw from '../../components/zzfw/zzfw'
  import duihua from '../../components/duihua/duihua'
  import cpty from '../../components/cpty/cpty'
  import FooterGuide from '../../components/FooterGuide/FooterGuide'
  import fanhuishouding from '../../components/fanhuiding/fanhuiding'
  import youshangkuang from '../../components/youshangtupian/youshangtupian'


    export default {
        components:{
          Banner,
          banner2,
          hengfu,
          hexinfuwu,
          pfcg,
          zzfw,
          duihua,
          cpty,
          FooterGuide,
          fanhuishouding,
          youshangkuang,
        },
      methods:{

      },

    }
</script>

<style>
  .hengfu{
      position: relative;
      top: -3.8rem;
  }
  .zzfwctrol{
    margin-top: 5rem;
  }
  .duihuactrol{
    margin-top: 5rem;
  }
  .cptyctrol{
    margin-top: 5rem;
  }
  .footCtrol{
    margin-top: 10rem;
  }
  .navdd{
    position: absolute;
    top: 0rem;
    z-index: 99;
  }
  .pfcgdw{
    margin-top: 5rem;
  }
</style>
