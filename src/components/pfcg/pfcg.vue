<template>
<div class="pfcgbg">
  <div class="container">
    <div class="row">
      <div class="col-lg-12 cgpfdingwei">
        <div class="wow cgpftitle cgpfdh" data-wow-delay=".5s"><span>配件采购方 ：</span>配件轻松采，省心又省钱</div>
      </div>
    </div>
    <div class="row cpgfcontext">
      <div class="col-lg-6">
          <div class="wow row cpgfn1 cpgfn4animation" data-wow-delay=".6s">
            <div class="col-md-2"><p class="tszt">全</p></div>
            <div class="col-md-10 puzt"><p>品类齐全-“起重、泵送、挖机”超过1000+合作优选供应商，可售SKU高达20万+</p></div>
          </div>
        <div class="wow row cpgfn2 cpgfn4animation" data-wow-delay=".8s">
          <div class="col-md-2"><p class="tszt">准</p></div>
          <div class="col-md-10 puzt"><p>精准无误-EPC数据100万+，500万+车型配件匹配数据，4000+可配机型</p></div>
        </div>
        <div class="wow row cpgfn3 cpgfn4animation" data-wow-delay="1s">
          <div class="col-md-2"><p class="tszt">省</p></div>
          <div class="col-md-10 puzt"><p>物美价廉-所有商品都是严选，不仅质量好而且价格厚道</p></div>
        </div>
        <div class="wow row cpgfn4 cpgfn4animation" data-wow-delay="1.2s">
          <div class="col-md-2"><p class="tszt">快</p></div>
          <div class="col-md-10 puzt"><p>极速配送-共享云仓全国布局，且与国内知名物流服务商深度合作，订单快速送达</p></div>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="wow pfcgimg cgpfimganimation" data-wow-delay=".4s"><img src="../../common/images/conput2_07.jpg"class="img-responsive"/></div>
        </div>
    </div>
  </div>
</div>
</template>

<script>


    export default {
        name: "pfcg",

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
  .cgpfdingwei{
    text-align: center;
    margin-top: 5rem;
  }
.pfcgbg{
  width: 100%;
  padding-bottom: 4rem;
  background-color: #fafcfd;
}
  .cgpftitle{
    letter-spacing: 0.3rem;
    font-size: 1.6rem;
    position: relative;
  }
.cgpfdh{
  -webkit-animation-name: -webkit-cgpfdh;
  animation-name: cgpfdh;
}
  @keyframes -webkit-cgpfdh{
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
  @keyframes cgpfdh{
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
  
  .cgpftitle span{
    color: #46a976;
  }
  .cpgfcontext{
    margin-top: 4rem;
  }
  .cpgfn1{
    position: relative;
  }
  /*@keyframes cpgfn1*/
  /*{*/
  /*  from {left:-32px;opacity: 0}*/
  /*  to {left:0px;opacity: 1}*/
  /*}*/
  /*@-webkit-keyframes cpgfn1 !*Safari and Chrome*!*/
  /*{*/
  /*  from {left:-32px;opacity: 0}*/
  /*  to {left:0px;opacity: 1}*/
  /*}*/
  .cpgfn2{
    position: relative;
  }
  /*@keyframes cpgfn2*/
  /*{*/
  /*  from {left:-32px;opacity: 0}*/
  /*  to {left:0px;opacity: 1}*/
  /*}*/
  /*@-webkit-keyframes cpgfn2 !*Safari and Chrome*!*/
  /*{*/
  /*  from {left:-32px;opacity: 0}*/
  /*  to {left:0px;opacity: 1}*/
  /*}*/
  .cpgfn3{
    position: relative;
  }
  /*@keyframes cpgfn3*/
  /*{*/
  /*  from {left:-32px;opacity: 0}*/
  /*  to {left:0rem;opacity: 1}*/
  /*}*/
  /*@-webkit-keyframes cpgfn3 !*Safari and Chrome*!*/
  /*{*/
  /*  from {left:-32px;opacity: 0}*/
  /*  to {left:0px;opacity: 1}*/
  /*}*/
  .cpgfn4{
    position: relative;
  }
  .cpgfn4animation {
    -webkit-animation-name: cpgfn4animation;
    animation-name: cpgfn4animation;
  }
  @keyframes -webkit-cpgfn4animation{
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
  @keyframes cpgfn4animation{
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
  /*@keyframes cpgfn4*/
  /*{*/
  /*  from {left:-32px;opacity: 0}*/
  /*  to {left:0;opacity: 1}*/
  /*}*/
  /*@-webkit-keyframes cpgfn4 !*Safari and Chrome*!*/
  /*{*/
  /*  from {left:-32px;opacity: 0}*/
  /*  to {left:0;opacity: 1}*/
  /*}*/
  .tszt{
    font-size: 2.3rem;
    margin-top: 1rem;
    color: #46a976;
  }
  .puzt{
    color: #abacac;
  }
  .puzt p{
    text-align: left;
    letter-spacing: 0.3rem;
    margin-top: 1.1rem;
    line-height: 1.85rem;
  }
  .pfcgimg {
    position: relative;
  }
  .pfcgimg:hover {
    transform:scale(1.07,1.07);
    transition: all .5s;
  }
  .cgpfimganimation {
    -webkit-animation-name: cgpfimganimation;
    animation-name: cgpfimganimation;
  }
  @keyframes -webkit-cgpfimganimation{
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
  @keyframes cgpfimganimation{
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
  
  .dazi{
    margin-top: 0.2rem;
  }
</style>
