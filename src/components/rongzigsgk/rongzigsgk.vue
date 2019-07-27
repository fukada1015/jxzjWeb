<template>
    <div class="bgclor">
      <div class="container">
        <div class="row">
          <div class="wow shuangyinghao shuangyinghaoanimation" data-wow-delay=".3s"><img src="../../common/images/syinh_03.png"/></div>
        </div>
        <div>
          <div class="wow  pp1 pp1animation" data-wow-delay=".4s"><p style="text-align: left;">湖南机械之家信息科技有限公司成立于2015年1月，是一家以工程机械后市场服务为核心的产业互联网公司，致力于机械后市场服务的标准化、智能化。</p></div>
          <div class="wow  pp2 pp1animation" data-wow-delay=".7s"><p style="text-align: left;">公司已获得包括58产业基金、钟鼎创投、金沙江联合资本、梅花创投、开物相泰、华颖投资、领易投资、开元资本、长沙麓谷高新移动互联网创业投资的4轮近亿元风险投资，被誉为工程机械后市场最具潜力的未来独角兽企业。</p></div>
          <div class="wow  pp3 pp1animation" data-wow-delay="1s"><p style="text-align: left;">公司创始团队成员来自中联重科、三一重工、阿里巴巴、金山、京东等知名企业，在工程机械后市场领域是传统产业+互联网极具影响力的创业团队组合。</p></div>
          <div class="wow  pp4 pp1animation" data-wow-delay="1.3s"><p style="text-align: left;">旗下产品包括：工程机械零配件供应链服务平台”机械之家”、吊车之家、泵车之家、好挖、自建行业唯一EPC零配件电子目录数据系统。</p></div>
          <div class="wow  pp5 pp1animation" data-wow-delay="1.7s"><p style="text-align: left;">创业仅4年时间，工程机械零配件供应链服务平台”机械之家”年GMV突破亿元，目前已拓展的品类包括起重机械、混凝土机械、土方机械等，业务已覆盖全国20多个省。</p></div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "rongzigsgk"
    }
</script>

<style>
.bgclor{
  width: 100%;
  background-color: #f8fbfd;
  position: relative;
  padding-bottom: 5rem;
}
.shuangyinghaoanimation{
  -webkit-animation-name: -webkit-shuangyinghaoanimation;
  animation-name: shuangyinghaoanimation;
}
@keyframes -webkit-shuangyinghaoanimation{
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
@keyframes shuangyinghaoanimation{
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
  .shuangyinghao{
    position: relative;
    top: -4.5rem;

  }

.shuangyinghao img {
    width: 100%;
  }
.pp1 p{
  font-size: 1rem;
  max-width: 1200px;
  letter-spacing: 0.1rem;
  font-family:zxfont;
  color: #333;
}
.pp1animation{
  -webkit-animation-name: -webkit-pp1animation;
  animation-name: pp1animation;
}
@keyframes -webkit-pp1animation{
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
@keyframes pp1animation{
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
  .pp2 p{
    margin-top: 2rem;
    font-size: 1rem;
    max-width: 1200px;
    letter-spacing: 0.1rem;
    font-family:zxfont;
    color: #333;
  }
.pp3 p{
  margin-top: 2rem;
  font-size: 1rem;
  max-width: 1200px;
  letter-spacing: 0.1rem;
  font-family:zxfont;
  color: #333;
}
.pp4 p{
  margin-top: 2rem;
  font-size: 1rem;
  max-width: 1200px;
  letter-spacing: 0.1rem;
  font-family:zxfont;
  color: #333;
}
.pp5 p{
  margin-top: 2rem;
  font-size: 1rem;
  max-width: 1200px;
  letter-spacing: 0.1rem;
  font-family:zxfont;
  color: #333;
  }
</style>
