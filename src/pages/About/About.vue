<template>
    <div>
      <Banner message="4" class="abutusdingwei"></Banner>
      <aboutusbanner ></aboutusbanner>
      <rongzizs class="rongzidingwei"></rongzizs>
      <rongzigsgk class="xiangshangdingwei"></rongzigsgk>
      <rongziyj></rongziyj>
      <rongzifzlc class="fzlcdingwei"></rongzifzlc>
      <rongziimgban class="rongziimgdingwei"></rongziimgban>
      <youshangkuang></youshangkuang>
      <fanhuishouding2></fanhuishouding2>
      <FooterGuide></FooterGuide>
    </div>
</template>

<script>
  import Banner from '../../components/Banner/Banner'
  import aboutusbanner from '../../components/aboutusbanner/aboutusbanner'
  import rongzizs from '../../components/rongzizs/rongzizs'
  import rongzigsgk from '../../components/rongzigsgk/rongzigsgk'
  import rongziyj from '../../components/rongziyj/rongziyj'
  import rongzifzlc from '../../components/rongzifzlc/rongzifzlc'
  import FooterGuide from '../../components/FooterGuide/FooterGuide'
  import rongziimgban from '../../components/rongziimgban/rongziimgban'
  import youshangkuang from '../../components/youshangtupian/youshangtupian'
  import fanhuishouding2 from '../../components/fanhuiding/fanhuiding'
    export default {
        name: "About",
      components:{
        Banner,
        aboutusbanner,
        rongzizs,
        rongzigsgk,
        rongziyj,
        rongzifzlc,
        rongziimgban,
        FooterGuide,
        youshangkuang,
        fanhuishouding2,
      }
    }
</script>

<style>
.rongzidingwei{
  margin-top: 6rem;
}
  .fzlcdingwei{
    margin-top: 6rem;
  }
  .rongziimgdingwei{
    margin-top: 4rem;
  }
  .abutusdingwei{
    position: absolute;
    top: 0;
    z-index: 99;
  }
  .xiangshangdingwei{
    margin-top: 4rem;
  }
</style>
