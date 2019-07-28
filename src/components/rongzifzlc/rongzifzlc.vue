<template>
    <div class="container">
      <div class="row">
        <div class="col-lg-12 wow rongyufzlctitle rongzilicanimation" data-wow-delay=".6s"><span>发展历程</span></div>
      </div>
      <div class="row">
        <div class="cptyline"></div>
      </div>
      <div class="fzlcdase">
        <div class="wow row op1 op1animaition" data-wow-delay=".4s">
          <div class="col-md-6 hdingwei1"><div><img src="../../common/images/fzlc_year2019_07.gif" class="img-responsive"/></div><div><div class="cirle-pot"></div></div></div>
          <div class="col-md-6 hdingwei2"><p>2月   湖南省副省长陈飞、副秘书长易佳良莅临机械之家调研考察</p><p>1月   获得58产业基金、开元资本，金沙江联合资本、华颖投资A+轮3000万融资，广州中心仓成立</p></div>
        </div>
        <div class="wow row op2 op1animaition" data-wow-delay=".7s">
          <div class="col-md-6 hdingwei1"><div><p>ATOM系统上线   11月</p><p>工程机械零配件供应链服务平台月GMV突破千万  10月 </p><p>成立广州运营中心  9月 </p><p>获得钟鼎创投、金沙江资本A轮数千万融资  6月 </p><p>公众号粉丝突破50万  5月 </p></div><div><div class="cirle-pot"></div></div></div>
          <div class="col-md-6 hdingwei2"><img src="../../common/images/fzlc_yeart_11.gif" class="img-responsive"/></div>
        </div>
        <div class="wow row op3 op1animaition" data-wow-delay="1s">
          <div class="col-md-6 hdingwei1"><div><img src="../../common/images/fzlc_yeart_15.gif" class="img-responsive"/></div><div><div class="cirle-pot"></div></div></div>
          <div class="col-md-6 hdingwei2"><p>9月   工程机械零配件供应链服务平台上线成立长沙中心仓</p><p>7月  机械之家获国内知名投资机构梅花天使基金等多家机构联合Pre-A轮投资 </p><p>3月  工程机械行业首个零配件电子目录系统（EPC）上线 </p><p>2月  月GMV突破百万 </p></div>
        </div>
        <div class="wow row op4 op1animaition" data-wow-delay="1.3s">
          <div class="col-md-6 hdingwei1"><div><p>维修服务平台机配城开始运营   10月</p><p>获得开物创投天使投资  8月</p><p>公司正式更名为：湖南机械之家信息科技有限公司  3月 </p><p>吊车之家粉丝突破10万  2月 </p></div><div><div class="cirle-pot"></div></div></div>
          <div class="col-md-6 hdingwei2"><img src="../../common/images/fzlc_yeart_19.gif" class="img-responsive"/></div>
        </div>
        <div class="wow row op5 op1animaition" data-wow-delay="1.6s">
          <div class="col-md-6 hdingwei1"><div><img src="../../common/images/fzlc_yeart_22.gif" class="img-responsive"/></div><div><div class="cirle-pot"></div></div></div>
          <div class="col-md-6 hdingwei2"><p>9月   吊车之家服务平台正式上线</p><p>8月  月GMV突破10万</p><p>2月  吊车之家公众号第一次发布图文</p><p>1月 机械之家前身“湖南众易配电子商务有限公司”成立</p></div>
        </div>
      </div>

    </div>
</template>

<script>

    export default {
        name: "rongzifzlc",

    }
</script>

<style>
  .rongyufzlctitle{
    margin: 0 auto;
    letter-spacing: 0.2rem;
    text-align: center;
    font-size: 1.6rem;
    font-family: zxfont;
  }
  .rongzilicanimation{
    -webkit-animation-name: -webkit-rongzilicanimation;
    animation-name: rongzilicanimation;
  }
  @keyframes -webkit-rongzilicanimation{
    0% {
      opacity: 0;
      -webkit-transform: translateY(32px);
      transform: translateY(32px);
    }

    100% {
      opacity: 1;
      -webkit-transform: translateY(30);
      transform: translateY(30);

    }
  }
  @keyframes rongzilicanimation{
    0% {
      opacity: 0;
      -webkit-transform: translateY(32px);
      -ms-transform: translateY(32px);
      transform: translateY(32px);
    }

    100% {
      opacity: 1;
      -webkit-transform: translateY(30);
      -ms-transform: translateY(30);
      transform: translateY(30);
    }
  }

  .fzlcdase{
    background:url("../../common/images/xx_02.gif") repeat-y center;
    margin: 3rem auto;

  }
  .fzlcdase .row {
    margin-top: 5rem;
  }
  .hdingwei1{
    text-align: right;
    font-family: zxfont;
    display: flex;
    justify-content: flex-end;
  }
  .hdingwei2{
    text-align: left;
    font-family: zxfont;
  }
  .op1 {
    position: relative;

  }
  .op1animaition{
    -webkit-animation-name: -webkit-op1animaition;
    animation-name: op1animaition;
  }
  @keyframes -webkit-op1animaition{
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
  @keyframes op1animaition{
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

  .op2 {
    position: relative;

  }

  .op3 {
    position: relative;

  }

  .op4 {
    position: relative;

  }

  .op5 {
    position: relative;

  }
.cirle-pot{
  background-color: #46a976;
  border-radius: 50%;
  width: 15px;
  height: 15px;
  position: relative;
  right: -23px;
}
</style>
