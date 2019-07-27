<template>
    <div class="container hexinfuwu">
      <div class="row">
        <div class="col-lg-12">
          <div class="wow col-lg-12 hexinfuwul hexinfuwutitleanimation" data-wow-delay=".5s"><span>{{hexinfuwu}}</span></div>
          <div class="row">
            <div class="qgck_linehexinfuwu"></div>
          </div>
          <div class="row">

          </div>
          <div class="wow col-lg-12 hexinfuwuwz hexinfuwutitleanimation2" data-wow-delay=".8s"><p style="padding-top: 2rem"><span>配件生产商 | 供应商：</span>配件轻松卖，客户遍天下</p></div>
        </div>
        <div>
          <div class="row nudingwei">
            <div class="myzdyclass">
            <div style="max-width: 600px">
            <div class="wow imgdingwei hexinfuwuimganimation" data-wow-delay=".6s"><img src="../../common/images/gg_03.jpg" class="img-responsive center-block"/></div>
            </div>
            <div class="chongxinding" style="max-width: 600px">
<!--            <div class="mydingwei">-->
              <div class="wow mywez col-sm-12  wenzianimation" data-wow-delay=".4s">
                <p class="dadukongzhi">全网覆盖</p>
                <p class="wenziyu">从区域到全网覆盖，增加更多客源，销量大规模增长</p>
              </div>
              <div class="wow mywez2 col-sm-12 wenzianimation" data-wow-delay=".6s" style="margin-top: 2rem"  >
                <p class="dadukongzhi">云共享仓</p>
                <p class="wenziyu">云仓储托管，大数据支撑合理备库，优化库存，提升仓库管理水平和流通效率</p>
              </div>
              <div class="wow mywez3 col-sm-12 wenzianimation" data-wow-delay=".8s" style="margin-top: 2rem">
                <p class="dadukongzhi">信息化服务</p>
                <p class="wenziyu">提供全流程信息化管理，降低人工成本，高效工作</p>
              </div>
            </div>
            </div>
            </div>
          </div>
<!--        </div>-->
      </div>
    </div>
</template>

<script>
    export default {
        name: "hexinfuwu",
      data(){
          return{
            hexinfuwu:'核心服务',

          }
      }
    }
</script>

<style>
  @font-face {
    font-family: alhp;
    src:url("../../../src/common/font/Alibaba-PuHuiTi-Light.otf");
  }
  @font-face {
    font-family: zfont;
    src:url("../../../src/common/font/Alibaba-PuHuiTi-Medium.otf");
  }
  @font-face {
    font-family: dfont;
    src:url("../../../src/common/font/Alibaba-PuHuiTi-Heavy.otf");
  }
  @font-face {
    font-family: zxfont;
    src:url("../../../src/common/font/Alibaba-PuHuiTi-Regular.otf");
  }
.hexinfuwu{
  width: 75rem;
}
.nudingwei{
  margin-top: 3rem;
  position: relative;
}
  .hexinfuwul {
  text-align: center;
  font-family: zxfont;
  }
  .hexinfuwutitleanimation{
    -webkit-animation-name: -webkit-hexinfuwutitleanimation;
    animation-name: hexinfuwutitleanimation;
  }
@keyframes -webkit-hexinfuwutitleanimation{
  0% {
    opacity: 0;
    -webkit-transform: translateY(-32px);
    transform: translateY(-32px);
  }

  100% {
    opacity: 1;
    -webkit-transform: translateY(0);
    transform: translateY(0);

  }
}
@keyframes hexinfuwutitleanimation{
  0% {
    opacity: 0;
    -webkit-transform: translateY(-32px);
    -ms-transform: translateY(-32px);
    transform: translateY(-32px);
  }

  100% {
    opacity: 1;
    -webkit-transform: translateY(0);
    -ms-transform: translateY(0);
    transform: translateY(0);
  }
}
  .mywez {
    /*text-align: center;*/
    position: relative;
  }
.wenzianimation p {
  margin-bottom: 1px;
}
  .wenzianimation{
    -webkit-animation-name: -webkit-wenzianimation;
    animation-name: wenzianimation;
  }
@keyframes -webkit-wenzianimation{
  0% {
    opacity: 0;
    -webkit-transform: translateX(32px);
    transform: translateX(32px);
  }

  100% {
    opacity: 1;
    -webkit-transform: translateX(0);
    transform: translateX(0);

  }
}
@keyframes wenzianimation{
  0% {
    opacity: 0;
    -webkit-transform: translateX(32px);
    -ms-transform: translateX(32px);
    transform: translateX(32px);
  }

  100% {
    opacity: 1;
    -webkit-transform: translateX(0);
    -ms-transform: translateX(0);
    transform: translateX(0);
  }
}
.mywez p {
  margin-left: 2rem;
}

.mywez2 {
  text-align: center;
  position: relative;
}
.mywez2 p {
  margin-left: 2rem;
}
.mywez3 {
  text-align: center;
  position: relative;
}
.mywez3 p {
  margin-left: 2rem;
}
.hexinfuwul span {

  padding-bottom: 1rem;
  font-size: 1.6rem;
  letter-spacing: 0.3rem;
}
.qgck_linehexinfuwu{
  width: 5rem;
  height: 2px;
  background-color: #46a976;
  margin: 1rem auto;
}
  .hexinfuwuwz {
    letter-spacing: 0.3rem;
    text-align: center;
    font-family: zxfont;
  }
  .hexinfuwutitleanimation2{
    -webkit-animation-name: -webkit-hexinfuwutitleanimation2;
    animation-name: hexinfuwutitleanimation2;
  }
@keyframes -webkit-hexinfuwutitleanimation2{
  0% {
    opacity: 0;
    -webkit-transform: translateY(32px);
    transform: translateY(32px);
  }

  100% {
    opacity: 1;
    -webkit-transform: translateY(0);
    transform: translateY(0);

  }
}
@keyframes hexinfuwutitleanimation2{
  0% {
    opacity: 0;
    -webkit-transform: translateY(32px);
    -ms-transform: translateY(32px);
    transform: translateY(32px);
  }

  100% {
    opacity: 1;
    -webkit-transform: translateY(0);
    -ms-transform: translateY(0);
    transform: translateY(0);
  }
}
.hexinfuwuwz span{
  color: #46a976;

}
  .dadukongzhi{
    color: #46a976;
    letter-spacing: 0.3rem;
    text-align: left;
    font-size: 1.4rem;
  }
  .dadukongzhi:before {
    content: '●';
  }
  .wenziyu {
    color: #b1b2b2;
    letter-spacing: 0.1rem;
    text-align: left;
    padding-left: 1.2rem;
    line-height: 1.7rem;
  }
  .mydingwei{
    margin-left: 1rem;
    margin-top: 3rem;
  }
  .imgdingwei{
    -webkit-animation-name: -webkit-imgdingwei;
    animation-name: imgdingwei;
  }
.imgdingwei:hover {
  transform:scale(1.07,1.07);
  transition: all .5s;
}
  .hexinfuwuimganimation{

  }
@keyframes -webkit-imgdingwei{
  0% {
    opacity: 0;
    -webkit-transform: translateX(-32px);
    transform: translateX(-32px);
  }

  100% {
    opacity: 1;
    -webkit-transform: translateX(0);
    transform: translateX(0);

  }
}
@keyframes imgdingwei{
  0% {
    opacity: 0;
    -webkit-transform: translateX(-32px);
    -ms-transform: translateX(-32px);
    transform: translateX(-32px);
  }

  100% {
    opacity: 1;
    -webkit-transform: translateX(0);
    -ms-transform: translateX(0);
    transform: translateX(0);
  }
}
  .chongxinding{
    padding-top: 4rem;
  }
  .myzdyclass{
    display: flex;
    justify-content: flex-start;
  }
@media screen and (max-width: 991px) {
  .myzdyclass{
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
  }
}
@media screen and (min-width: 992px) {
  .myzdyclass{
    display: flex;
    justify-content: flex-start;

  }
}
</style>
