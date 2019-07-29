<template>
    <div>
      <bannav message="3" class="bandingd"></bannav>
      <zsnsbanner></zsnsbanner>
      <el-row v-show="isShow" class="fixed-layer contrl-display">
        <bannav message="3"></bannav>
      </el-row> 
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
        data(){
          return{
            isShow:false
          }
        },
      components:{
        bannav,
        zsnsbanner,
        zsns_zpzw,
        FooterGuide,
        youshangkuang,
        fanhuishouding4,
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
