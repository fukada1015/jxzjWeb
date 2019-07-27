<template>
    <div>
      <bannav message="3" class="bandingd"></bannav>
      <zsnsbanner></zsnsbanner>
      <zsns_zpzw class="zpzwding"></zsns_zpzw>
      <youshangkuang></youshangkuang>
      <FooterGuide class="fgdingwei"></FooterGuide>
      <fanhuishouding4></fanhuishouding4>
    </div>
</template>

<script>
  import zsnsbanner from '../../components/zsns_banner/zsns_banner'
  import bannav from '../../components/Banner/Banner'
  import zsns_zpzw from '../../components/zsns_zpzw/zsns_zpzw'
  import FooterGuide from '../../components/FooterGuide/FooterGuide'
  import youshangkuang from '../../components/youshangtupian/youshangtupian'
  import fanhuishouding4 from '../../components/fanhuiding/fanhuiding'
    export default {
        name: "Recruit",
      components:{
        bannav,
        zsnsbanner,
        zsns_zpzw,
        FooterGuide,
        youshangkuang,
        fanhuishouding4,
      }
    }
</script>

<style>
.fgdingwei{
  margin-top: 6rem;
}
  .bandingd{
    position: absolute;
    top: 0rem;
    z-index: 99;
  }
  .zpzwding{
    margin-top: 5rem;
  }
</style>
