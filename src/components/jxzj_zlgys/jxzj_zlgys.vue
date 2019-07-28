<template>
    <div class="container">
      <div class="row">
        <div class="col-lg-12 wow zlgystext zlgysanimation" data-wow-delay="1.2s"><span>助力供应商开源节流</span></div>
      </div>
      <div class="row">
        <div class="zlgys_linex"></div>
      </div>
      <div class="row" style="margin-top: 2rem">
        <div class="col-md-6">
          <div class="wow kap kapanimation" data-wow-delay=".3s">
            <div class="row" style="box-sizing: border-box; padding-bottom: 10px">
              <div class="col-md-3" style="box-sizing:border-box"><h1 class="ds" style="margin-top: 6px">加</h1></div>
              <div class="col-md-9"  style="box-sizing:border-box">
               <h5 class="tsz">全网覆盖  销售增加</h5>
                <p class="fbtz">从区域覆盖到全网覆盖的转变，<br/>增加更多客源，促进销量几何式增长</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="wow kap kapanimation" data-wow-delay=".6s">
            <div class="row" style="box-sizing: border-box; padding-bottom: 10px">
              <div class="col-md-3" style="box-sizing:border-box"><h1 class="ds" style="margin-top: 6px">减</h1></div>
              <div class="col-md-9">
                <h5 class="tsz">减缩环节  降低成本</h5>
                <p class="fbtz">大幅减少中间环节，自动交易，<br/>数据化后台支持，降低人工成本</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <div class="wow kap kapanimation" data-wow-delay=".9s">
            <div class="row" style="box-sizing: border-box; padding-bottom: 10px">
              <div class="col-md-3" style="box-sizing:border-box"><h1 class="ds" style="margin-top: 6px">乘</h1></div>
              <div class="col-md-9">
                <h5 class="tsz">提升效率  优化管理</h5>
                <p class="fbtz">大数据支撑合理备库，提升仓库管理水<br/>平，优化库存；集约式储存，提升流通效率</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="wow kap kapanimation" data-wow-delay="1.2s">
            <div class="row" style="box-sizing: border-box; padding-bottom: 10px">
              <div class="col-md-3" style="box-sizing:border-box"><h1 class="ds" style="margin-top: 6px">除</h1></div>
              <div class="col-md-9">
                <h5 class="tsz">去人为化交易  人为化干扰</h5>
                <p class="fbtz">去除线下结算周期长、拖款、回扣<br/>等；避免恶性竞争，促进行业健康发展</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "jxzj_zlgys"
    }
</script>

<style>
.zlgystext{
  margin: 0 auto;
  letter-spacing: 0.2rem;
  text-align: center;
  font-size: 1.6rem;
  font-family: zxfont;
}
.zlgysanimation{
  -webkit-animation-name: -webkit-zlgysanimation;
  animation-name: zlgysanimation;
}
@keyframes -webkit-zlgysanimation{
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
@keyframes zlgysanimation{
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

  .zlgys_linex{
    width: 5rem;
    height: 2px;
    background-color: #46a976;
    margin: 1rem auto;
  }
  .kap{
    width: 100%;
    padding-left: 5rem;
    padding-top: 2rem;
    -webkit-box-sizing:border-box;
    -moz-box-sizing:border-box;
    -ms-box-sizing:border-box;
    -o-box-sizing:border-box;
    box-sizing:border-box
  }

  .kapanimation{
    -webkit-animation-name: -webkit-kapanimation;
    animation-name: kapanimation;
  }
@keyframes -webkit-kapanimation{
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
@keyframes kapanimation{
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

.kap:hover {
  z-index: 2;
  box-shadow: 1px 5px 10px 5px rgba(0, 0, 0, 0.1);
  -webkit-transition: all .5s;
  transition: all .5s;
}
.kap:first-child:hover {
  z-index: 2;
  box-shadow: 1px 5px 10px 5px rgba(0, 0, 0, 0.05);
}
  .ds{
    color: #46a976;
    text-align: center;
  }
  .tsz{
    color: #050000;
    letter-spacing: 0.1rem;
    /*padding-left: 10%;*/
    text-align: left;
    font-family: zxfont;
  }
  .fbtz{
    color: #859192;
    font-size: 0.9rem;
    text-align: left;
    font-family: zxfont;
  }
</style>
