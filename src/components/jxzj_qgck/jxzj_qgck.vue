<template>
  <div class="jxzj_qgck">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 wow qgcktext qgcktextanimation" data-wow-delay="1.2s"><span>全国仓库布局，拿下万亿级市场</span></div>
      </div>
      <div class="row">
        <div class="qgck_line"></div>
      </div>
      <div><p class="qgck_fbtz">机械之家已建成10000㎡的长沙中心仓和广州中心仓，未来机械之家共享分仓将遍布全国各地为当地客户解决零部件最后一公里的配送服务</p></div>
      <div class="ditu">
        <div class="main-img" id="serve-img-area" style="position: relative;"><img src="../../common/images/hezuomap_10.jpg"/>
          <div class="point-area x1" style="position: absolute; width: 150px; height: 150px; visibility: visible; opacity: 1;">
            <a class="point point-dot" data-spm-anchor-id="5176.8142029.414699.12"></a>
            <div class="point point-10"></div>
            <div class="point point-40"></div>
            <div class="point point-shadow point-80"></div>
          </div>

          <div class="point-area x2" style="position: absolute; width: 150px; height: 150px; visibility: visible; opacity: 1;">
            <a class="point point-dot" data-spm-anchor-id="5176.8142029.414699.13"></a>
            <div class="point point-10"></div>
            <div class="point point-40"></div>
            <div class="point point-shadow point-80"></div>
          </div>

          <div class="point-area x3" style="position: absolute; width: 150px; height: 150px; visibility: visible; opacity: 1;">
            <a class="point point-dot" data-spm-anchor-id="5176.8142029.414699.14"></a>
            <div class="point point-10"></div>
            <div class="point point-40"></div>
            <div class="point point-shadow point-80"></div>
          </div>

          <div class="point-area x4" style="position: absolute; width: 150px; height: 150px; visibility: visible; opacity: 1;">
            <a class="point point-dot" data-spm-anchor-id="5176.8142029.414699.15"></a>
            <div class="point point-10"></div>
            <div class="point point-40"></div>
            <div class="point point-shadow point-80"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "jxzj_qgck"
    }
</script>

<style>

.jxzj_qgck{
  width: 100%;
  background-color: #f8fbfc;
  padding-top: 4rem;
}
  .qgcktext{
    margin: 0 auto;
    letter-spacing: 0.2rem;
    text-align: center;
    font-size: 1.6rem;
    font-family: zxfont;
  }
  .qgcktextanimation{
    -webkit-animation-name: -webkit-qgcktextanimation;
    animation-name: qgcktextanimation;
  }
@keyframes -webkit-qgcktextanimation{
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
@keyframes qgcktextanimation{
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
@keyframes qgcktext
{
  from {top:-1rem;opacity: 0}
  to {top:0rem;opacity: 1}
}
@-webkit-keyframes qgcktext /*Safari and Chrome*/
{
  from {top:-1rem;opacity: 0}
  to {top:0rem;opacity: 1}
}
  .qgck_line{
    width: 5rem;
    height: 2px;
    background-color: #46a976;
    margin: 1rem auto;
  }
  .qgck_fbtz{
    color: #656565;
    font-size: 0.9rem;
    text-align: center;
    letter-spacing: 0.1rem;
    font-family: alhp;
  }

  .ditu{
    /*width: 100%;*/
    /*background: url("../../common/images/hezuomap_10.jpg") no-repeat center;*/
  }



#serve-img-area.paused .point-area .point-40:after {
  animation-play-state: paused;
  -webkit-animation-play-state: paused;
  /* Safari å’Œ Chrome */
}


#serve-img-area.paused .point-area .point-80:after {
  animation-play-state: paused;
  -webkit-animation-play-state: paused;
  /* Safari å’Œ Chrome */
}

#serve-img-area .point-area {
  text-align: center;
  position: relative;
  width: 150px;
  height: 150px;
  -webkit-transition: opacity 0.5s ease-out;
  -moz-transition: opacity 0.5s ease-out;
  -o-transition: opacity 0.5s ease-out;
  transition: opacity 0.5s ease-out;
}
#serve-img-area .point-area .point {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 10px;
  height: 10px;
  margin: auto;
  -webkit-border-radius: 50%;
  -webkit-background-clip: padding-box;
  -moz-border-radius: 50%;
  -moz-background-clip: padding;
  border-radius: 50%;
  background-clip: padding-box;
  background: transparent;
}
#serve-img-area .point-area .point-shadow:after {
  -webkit-box-shadow: inset 0 0 5em rgba(1, 176, 83, 0.16);
  -moz-box-shadow: inset 0 0 5em rgba(1, 176, 83, 0.16);
  box-shadow: inset 0 0 5em rgba(1, 176, 83, 0.16);
}

#serve-img-area .point-area .point-dot {
  z-index: 1;
  background-color: #46a976;
  border: 1px solid rgba(1, 176, 83, 0.37);
}
#serve-img-area .point-area .point-10 {
  width: 100%;
  height: 100%;
}
#serve-img-area .point-area .point-10:after {
  content: '';
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border-radius: 50%;
  border: 2px solid #46a976;
  opacity: 0;
  -webkit-animation: ripple 4500ms ease-out 225ms infinite;
  -moz-animation: ripple 4500ms ease-out 225ms infinite;
  -o-animation: ripple 4500ms ease-out 225ms infinite;
  animation: ripple 4500ms ease-out 225ms infinite;
}

#serve-img-area .point-area .point-40 {
  width: 100%;
  height: 100%;
}
#serve-img-area .point-area .point-40:after {
  content: '';
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border-radius: 50%;
  border: 2px solid #46a976;
  opacity: 0;
  -webkit-animation: ripple 4500ms ease-out 900ms infinite;
  -moz-animation: ripple 4500ms ease-out 900ms infinite;
  -o-animation: ripple 4500ms ease-out 900ms infinite;
  animation: ripple 4500ms ease-out 900ms infinite;
}

#serve-img-area .point-area .point-80 {
  width: 100%;
  height: 100%;
}
#serve-img-area .point-area .point-80:after {
  content: '';
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border-radius: 50%;
  border: 2px solid #46a976;
  opacity: 0;
  -webkit-animation: ripple 4500ms ease-out 1800ms infinite;
  -moz-animation: ripple 4500ms ease-out 1800ms infinite;
  -o-animation: ripple 4500ms ease-out 1800ms infinite;
  animation: ripple 4500ms ease-out 1800ms infinite;
}

lesshat-selector {
  -lh-property: 0; }
@-webkit-keyframes ripple{ 0%{opacity:0;-webkit-transform:scale(0.1,0.1); } 5%{ opacity:1; }  100%{ opacity:0; -webkit-transform:scale(1)}}
@-moz-keyframes ripple{ 0%{opacity:0;-moz-transform:scale(0.1,0.1); } 5%{ opacity:1; }  100%{ opacity:0; -moz-transform:scale(1)}}
@-o-keyframes ripple{ 0%{opacity:0;-o-transform:scale(0.1,0.1); } 5%{ opacity:1; }  100%{ opacity:0; -o-transform:scale(1)}}
@keyframes ripple{ 0%{opacity:0;-webkit-transform:scale(0.1,0.1);-moz-transform:scale(0.1,0.1);-ms-transform:scale(0.1,0.1);transform:scale(0.1,0.1); } 5%{ opacity:1; }  100%{ opacity:0;-webkit-transform:scale(1);-moz-transform:scale(1);-ms-transform:scale(1);transform:scale(1);}}
[not-existing] {
  zoom: 1;
}
.main-img img{
  width: 100%;
}
.aliyun-index-serve-2016 .module-wrap .ali-main-serve-head h1 {
  text-align: center;
  font-size: 24px;
  color: #46a976;
}

.
.aliyun-index-serve-2016 .module-wrap .ali-main-serve .main-img img {
  width: 100%;
}

.aliyun-index-serve-2016 .module-wrap .ali-main-serve .main-bar .main-bar-list img {
  width: 50px;
  height: 50px;
  float: left;
}
  @media screen and (min-width: 1200px) {
    .x1{
      top: 7rem;
      left: 29rem;
    }
    .x2{
      top: 12rem;
      left: 30rem;
    }
    .x3{
      top: 14rem;
      left: 33rem;
    }
    .x4{
      top: 8rem;
      left: 35rem;
    }
  }
@media screen and (min-width: 992px) and (max-width: 1199px) {
  .x1{
    top: 5rem;
    left: 23.5rem;
  }
  .x2{
    top:9rem;
    left: 25rem;
  }
  .x3{
    top: 11rem;
    left: 27rem;
  }
  .x4{
    top: 6rem;
    left: 29rem;
  }
}
@media screen and (min-width: 768px) and (max-width: 991px) {
  .x1{
    top: 3rem;
    left: 16rem;
  }
  .x2{
    top:5.5rem;
    left: 17rem;
  }
  .x3{
    top: 7rem;
    left: 18.5rem;
  }
  .x4{
    top: 3.5rem;
    left: 20rem;
  }
}
@media screen and (max-width: 767px){
  .x1{
    top: 1rem;
    left: 10rem;
  }
  .x2{
    top:2rem;
    left: 12rem;
  }
  .x3{
    top: 3rem;
    left: 13rem;
  }
  .x4{
    top: 0rem;
    left: 14rem;
  }
}
</style>
