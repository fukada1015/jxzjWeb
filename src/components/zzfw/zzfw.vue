<template>
    <div class="container">
      <div class="row">
        <div class="wow col-lg-12 zzfwtoptitle zzfwanimation" data-wow-delay=".4s"><span>增值服务</span></div>
      </div>
      <div class="row ctrline">
        <div class="zzfwline"></div>
      </div>
      <div class="imgsdingwei">
        <div class="again-position">
          <div class="wow tpdiv shadow tpdivanimation" data-wow-delay="1s">
            <div class="row">
              <div class="imgjuzhong"><div class="img-wrapper"><img src="../../common/images/severimg_15.jpg" class="img-responsive imgwidth"/>
                <div class="overlay"></div>
              </div></div>
            </div>
            <div class="row imagewz">
              <div class="imgdivtp"><p style="font-family: zfont">保险</p></div>
            </div>
          </div>
        </div>
        <div class="again-position">
          <div class="wow tpdiv shadow tpdivanimation" data-wow-delay="1.2s">
            <div class="row">
              <div class="imgjuzhong"><div class="img-wrapper"><img src="../../common/images/severimg_17.jpg" class="img-responsive imgwidth"/>
                <div class="overlay"></div>
              </div></div>
            </div>
            <div class="row imagewz">
              <div class="imgdivtp"><p style="font-family: zfont">二手机</p></div>
            </div>
          </div>
        </div >
        <div class="again-position">
          <div class="wow tpdiv shadow tpdivanimation" data-wow-delay=".6s">
            <div class="row">
              <div class="imgjuzhong"><div class="img-wrapper"><img src="../../common/images/severimg_11.jpg" class="img-responsive imgwidth"/>
                <div class="overlay"></div>
              </div></div>
            </div>
            <div class="row imagewz">
              <div class="imgdivtp"><p style="font-family: zfont">供应链金融</p></div>
            </div>
          </div>
        </div>
        <div class="again-position">
          <div class="wow tpdiv shadow tpdivanimation" data-wow-delay=".8s">
            <div class="row">
              <div class="imgjuzhong"><div class="img-wrapper"><img src="../../common/images/severimg_13.jpg" class="img-responsive imgwidth"/>
                <div class="overlay"></div>
              </div></div>
            </div>
            <div class="row imagewz">
              <div class="imgdivtp"><p style="font-family: zfont">求职招聘</p></div>
            </div>
          </div>
        </div>
        <div class="again-position">
          <div class="wow tpdiv shadow tpdivanimation" data-wow-delay="1.2s">
            <div class="row">
              <div class="imgjuzhong"><div class="img-wrapper"><img src="../../common/images/severimg_18.jpg" class="img-responsive imgwidth"/>
                <div class="overlay"></div>
              </div></div>
            </div>
            <div class="row imagewz">
              <div class="imgdivtp"><p style="font-family: zfont">租赁服务</p></div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "zzfw"
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
.zzfwtoptitle{
  text-align: center;
  font-size: 1.6rem;
  font-family: zxfont;
}
.zzfwanimation{
  -webkit-animation-name: -webkit-zzfwanimation;
  animation-name: zzfwanimation;
}
@keyframes -webkit-zzfwanimation{
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
@keyframes zzfwanimation{
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
  .zzfwtoptitle span{
    font-size: 1.6rem;
    letter-spacing: 0.3rem;
  }
  .zzfwline{
    width: 5rem;
    height: 2px;
    background-color: #01b053;
    margin: 1rem auto;
  }
  .imgjuzhong{
    margin: 0 auto;
  }
  .tpdiv{
    width: 12.3rem;
    height: 9rem;
    margin: 1rem auto;
  }
  .tpdivanimation{
    -webkit-animation-name: -webkit-tpdivanimation;
    animation-name: tpdivanimation;
  }
@keyframes -webkit-tpdivanimation{
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
@keyframes tpdivanimation{
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

.tpdiv2{
  width: 12.3rem;
  height: 10.5rem;
  margin: 1rem auto;

}

.tpdiv3{
  width: 11.3rem;
  height: 10.5rem;
  margin: 1rem auto;
}

.tpdiv4{
  width: 12.3rem;
  height: 10.5rem;
  margin: 1rem auto;
}
  .imagewz{
    height: 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
.imgsdingwei{
  margin-top: 3rem;
  display: flex;
  justify-content: center;
}
.shadow{
  -moz-box-shadow: 0px 3px 10px #a19e9e; /* 老的 Firefox */
  box-shadow: 0px 3px 10px #a19e9e;
}
.tpdiv .img-wrapper {
  position: relative;
  overflow: hidden;
}
.tpdiv2 .img-wrapper {
  position: relative;
  overflow: hidden;
}
.tpdiv3 .img-wrapper {
  position: relative;
  overflow: hidden;
}
.tpdiv4 .img-wrapper {
  position: relative;
  overflow: hidden;
}
.tpdiv img {
  -webkit-transform: scale3d(1, 1, 1);
  transform: scale3d(1, 1, 1);
  -webkit-transition: -webkit-transform 400ms;
  transition: transform 400ms;
}
.tpdiv2 img {
  -webkit-transform: scale3d(1, 1, 1);
  transform: scale3d(1, 1, 1);
  -webkit-transition: -webkit-transform 400ms;
  transition: transform 400ms;
}
.tpdiv3 img {
  -webkit-transform: scale3d(1, 1, 1);
  transform: scale3d(1, 1, 1);
  -webkit-transition: -webkit-transform 400ms;
  transition: transform 400ms;
}
.tpdiv4 img {
  -webkit-transform: scale3d(1, 1, 1);
  transform: scale3d(1, 1, 1);
  -webkit-transition: -webkit-transform 400ms;
  transition: transform 400ms;
}
.tpdiv:hover img {
  -webkit-transform: scale3d(1.2, 1.2, 1);
  transform: scale3d(1.2, 1.2, 1);
}
.tpdiv2:hover img {
  -webkit-transform: scale3d(1.2, 1.2, 1);
  transform: scale3d(1.2, 1.2, 1);
}
.tpdiv3:hover img {
  -webkit-transform: scale3d(1.2, 1.2, 1);
  transform: scale3d(1.2, 1.2, 1);
}
.tpdiv4:hover img {
  -webkit-transform: scale3d(1.2, 1.2, 1);
  transform: scale3d(1.2, 1.2, 1);
}
.tpdiv:hover .overlay {
  opacity: 0.5;
}
.tpdiv2:hover .overlay {
  opacity: 0.5;
}
.tpdiv3:hover .overlay {
  opacity: 0.5;
}
.tpdiv4:hover .overlay {
  opacity: 0.5;
}
.tpdiv .overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 10px;
  text-align: center;
  background: rgba(0, 0, 0, 0.7);
  opacity: 0;
  -webkit-transition: opacity 400ms;
  transition: opacity 400ms;
}
.tpdiv2 .overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 10px;
  text-align: center;
  background: rgba(0, 0, 0, 0.7);
  opacity: 0;
  -webkit-transition: opacity 400ms;
  transition: opacity 400ms;
}
.tpdiv3 .overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 10px;
  text-align: center;
  background: rgba(0, 0, 0, 0.7);
  opacity: 0;
  -webkit-transition: opacity 400ms;
  transition: opacity 400ms;
}
.tpdiv4 .overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 10px;
  text-align: center;
  background: rgba(0, 0, 0, 0.7);
  opacity: 0;
  -webkit-transition: opacity 400ms;
  transition: opacity 400ms;
}
.tpdiv .overlay a:hover {
  text-decoration: none;
}
.tpdiv2 .overlay a:hover {
  text-decoration: none;
}
.tpdiv3 .overlay a:hover {
  text-decoration: none;
}
.tpdiv4 .overlay a:hover {
  text-decoration: none;
}
.tpdiv:hover {
  -webkit-transform: translateY(-2rem);
  transform: translateY(-1rem);
  transition: transform 400ms;

}
.tpdiv2:hover {
  -webkit-transform: translateY(-2rem);
  transform: translateY(-1rem);
  transition: transform 400ms;

}
.tpdiv3:hover {
  -webkit-transform: translateY(-2rem);
  transform: translateY(-1rem);
  transition: transform 400ms;

}
.tpdiv4:hover {
  -webkit-transform: translateY(-2rem);
  transform: translateY(-1rem);
  transition: transform 400ms;

}
.again-position{
  width: 250px;
}
  .imgwidth{
    width: 198px;
  }
</style>
