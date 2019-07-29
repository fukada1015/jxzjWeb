<template>
    <div>
      <Banner message="4" class="abutusdingwei"></Banner>
      <aboutusbanner ></aboutusbanner>
      <el-row v-show="isShow" class="fixed-layer contrl-display">
        <Banner message="4"></Banner>
      </el-row> 
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
        data(){
          return{
            isShow:false
          }
        },
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
