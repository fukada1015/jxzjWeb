<template>
    <div class="jxzj_hzmsbg">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 wow hzms1 hzms1animation" data-wow-delay="1s"><span>供应商伙伴和机械之家的合作模式</span></div>
        </div>
        <div class="row">
          <div class="hzms_line"></div>
        </div>
        <div class="row">
          <div class="wow hzmsimg hzmsimganimation" data-wow-delay="1.2s">
            <embed src="../../static/ppn.swf" width="1203px" align="center" height="506px" type="application/x-shockwave-flash" wmode="opaque" quality="high" pluginspage="http://www.macromedia.com/go/getflashplayer">
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "jxzj_hzms"
    }
</script>

<style>
.jxzj_hzmsbg{
  background-color: #e6f3f2;
  padding-top: 5rem;
  padding-bottom: 2rem;
}
  .hzms1{
    margin: 0 auto;
    letter-spacing: 0.2rem;
    color: #46a976;
    text-align: center;
    font-size: 1.6rem;
    font-family: zxfont;
  }
  .hzms1animation{
    -webkit-animation-name: -webkit-hzms1animation;
    animation-name: hzms1animation;
  }
@keyframes -webkit-hzms1animation{
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
@keyframes hzms1animation{
  0% {
    opacity: 0;
    -webkit-transform: translateX(32px);
    -ms-transform: translateX(32px);
    transform: translateX(32px);
  }

  100% {
    opacity: 1;
    -webkit-transform: translateY(0);
    -ms-transform: translateY(0);
    transform: translateY(0);
  }
}

  .hzms_line{
    width: 5rem;
    height: 2px;
    background-color: #46a976;
    margin: 1rem auto;
  }
.hzmsimg img{
  width: 100%;
}
  .hzmsimg{
    position: relative;
    opacity: 0;
    animation:hzmsimg 4s;
    animation-fill-mode: forwards;
    animation-delay:.8s;
  }
  .hzmsimganimation{
    -webkit-animation-name: -webkit-hzmsimganimation;
    animation-name: hzmsimganimation;
  }
@keyframes -webkit-hzmsimganimation{
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
@keyframes hzmsimganimation{
  0% {
    opacity: 0;
    -webkit-transform: translateX(-32px);
    -ms-transform: translateX(-32px);
    transform: translateX(-32px);
  }

  100% {
    opacity: 1;
    -webkit-transform: translateY(0);
    -ms-transform: translateY(0);
    transform: translateY(0);
  }
}

</style>
