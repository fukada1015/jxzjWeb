<template>
    <div class="container">
      <div class="row">
        <div class="col-lg-12 wow ywms1 ywmsanimations" data-wow-delay=".6s"><span>机械之家业务模式</span></div>
      </div>
      <div class="row">
        <div class="ywms_lineo"></div>
      </div>
      <div class="row">
        <div class="wow ywmsimg ywmsimganimgation" data-wow-delay=".8s">
<!--          <img src="../../common/images/ywms1_03.png"/>-->
          <embed src="../../static/ppn2.swf" width="1203px" align="center" height="522px" type="application/x-shockwave-flash" wmode="opaque" quality="high" pluginspage="http://www.macromedia.com/go/getflashplayer">
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "jxzj_ywms"
    }
</script>

<style>
.ywms1{
  margin: 0 auto;
  letter-spacing: 0.2rem;
  text-align: center;
  font-size: 1.6rem;
  font-family: zxfont;
}
.ywmsanimations{
  -webkit-animation-name: -webkit-ywmsanimations;
  animation-name: ywmsanimations;
}
@keyframes -webkit-ywmsanimations{
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
@keyframes ywmsanimations{
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
  .ywms_lineo{
    width: 5rem;
    height: 2px;
    background-color: #01b053;
    margin: 1rem auto;
  }
  .ywmsimg img{
    width: 100%;
  }
  .ywmsimg {

  }
  .ywmsimganimgation{
    -webkit-animation-name: -webkit-ywmsimganimgation;
    animation-name: ywmsimganimgation;
  }
@keyframes -webkit-ywmsimganimgation{
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
@keyframes ywmsimganimgation{
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

</style>
