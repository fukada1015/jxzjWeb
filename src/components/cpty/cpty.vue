<template>
    <div class="container">
      <div class="row">
        <div class="col-lg-12 wow zzfwtoptitle cptyanimation" data-wow-delay=".6s"><span>产品体验</span></div>
      </div>
      <div class="row">
        <div class="cptyline"></div>
      </div>
      <div class="row">
        <div class="col-lg-12 row  erweimactrol">
          <div class="wow col-md-2 cptyding cptybordmove1 ttanimation" data-wow-delay=".8s"><img src="../../common/images/erweima_30.jpg"/><div class="product-hover"></div></div>
          <div class="wow col-md-2 cptyding cptybordmove1 ttanimation" data-wow-delay="1s"><img src="../../common/images/erweima_32.jpg"/><div class="product-hover2"></div></div>
          <div class="wow col-md-2 cptyding cptybordmove1 ttanimation" data-wow-delay="1.2s"><img src="../../common/images/erweima_34.jpg"/><div class="product-hover3"></div></div>
          <div class="wow col-md-2 cptyding cptybordmove1 ttanimation" data-wow-delay="1.4s"><img src="../../common/images/erweima_36.jpg"/><div class="product-hover4"></div></div>
          <div class="wow col-md-2 cptyding cptybordmove1 ttanimation" data-wow-delay="1.6s"><img src="../../common/images/erweima_38.jpg"/><div class="product-hover5"></div></div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "cpty"
    }
</script>

<style>
  .cptyanimation{
    -webkit-animation-name: -webkit-cptyanimation;
    animation-name: cptyanimation;
  }
  @keyframes -webkit-cptyanimation{
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
  @keyframes cptyanimation{
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
  .zzfwtoptitle{
    margin: 0 auto;
    text-align: center;
    font-size: 1.6rem;
    font-family: zxfont;
  }
  .ttanimation{
    -webkit-animation-name: -webkit-ttanimation;
    animation-name: ttanimation;
  }
  @keyframes -webkit-ttanimation{
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
  @keyframes ttanimation{
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
  .cptyline{
    width: 5rem;
    height: 2px;
    background-color: #01b053;
    margin: 1rem auto;
  }
  .erweimactrol {
    margin: 0 auto;
  }
  .erweimactrol img {
    width: 100%;
    height: auto;
    display: block;

  }
  .cptyding{
    margin: 0 auto;
  }
  .cptybordmove1 img {
    /*border: 0.12rem dashed #03c28c;*/
    margin: 0.1rem;
    width: 100%;
  }
  .cptybordmove1 {
    margin-top: 3rem;
  }
  /*.cptybordmove1:hover .product-hover, .cptybordmove1:active .product-hover{opacity:1;}*/

  .product-hover{

    z-index: -1;
    position:absolute;
    top:0;
    left:0.91rem;
    right:0.7rem;
    bottom:0;
    opacity:1;
    -webkit-transition:opacity 0.3s ease;
    -moz-transition:opacity 0.3s ease;
    transition:opacity 0.3s ease;
    background-size:10px 10px;
    background-image:-webkit-linear-gradient(45deg, rgba(3, 194, 140, 1) 25%, transparent 25%, transparent 50%, rgba(3, 194, 140, 1) 50%, rgba(3, 194, 140, 1) 75%, transparent 75%, transparent);
    background-image:-moz-linear-gradient(45deg, rgba(3, 194, 140, 1) 25%, transparent 25%, transparent 50%, rgba(3, 194, 140, 1) 50%, rgba(3, 194, 140, 1) 75%, transparent 75%, transparent);
    background-image:linear-gradient(45deg, rgba(3, 194, 140, 1) 25%, transparent 25%, transparent 50%, rgba(3, 194, 140, 1) 50%, rgba(3, 194, 140, 1) 75%, transparent 75%, transparent);
    -webkit-animation:barberpole 2s linear infinite;
    -moz-animation:barberpole 2s linear infinite;
    animation:barberpole 2s linear infinite;
  }

  .product-hover2{

    z-index: -1;
    position:absolute;
    top:0;
    left:0.91rem;
    right:0.7rem;
    bottom:0;
    opacity:1;
    -webkit-transition:opacity 0.3s ease;
    -moz-transition:opacity 0.3s ease;
    transition:opacity 0.3s ease;
    background-size:10px 10px;
    background-image:-webkit-linear-gradient(45deg, rgba(24, 179, 169, 1) 25%, transparent 25%, transparent 50%, rgba(24, 179, 169, 1) 50%, rgba(24, 179, 169, 1) 75%, transparent 75%, transparent);
    background-image:-moz-linear-gradient(45deg, rgba(24, 179, 169, 1) 25%, transparent 25%, transparent 50%, rgba(24, 179, 169, 1) 50%, rgba(24, 179, 169, 1) 75%, transparent 75%, transparent);
    background-image:linear-gradient(45deg, rgba(24, 179, 169, 1) 25%, transparent 25%, transparent 50%, rgba(24, 179, 169, 1) 50%, rgba(24, 179, 169, 1) 75%, transparent 75%, transparent);
    -webkit-animation:barberpole 2s linear infinite;
    -moz-animation:barberpole 2s linear infinite;
    animation:barberpole 2s linear infinite;
  }
  .product-hover3{

    z-index: -1;
    position:absolute;
    top:0;
    left:0.91rem;
    right:0.7rem;
    bottom:0;
    opacity:1;
    -webkit-transition:opacity 0.3s ease;
    -moz-transition:opacity 0.3s ease;
    transition:opacity 0.3s ease;
    background-size:10px 10px;
    background-image:-webkit-linear-gradient(45deg, rgba(18, 124, 171, 1) 25%, transparent 25%, transparent 50%, rgba(18, 124, 171, 1) 50%, rgba(18, 124, 171, 1) 75%, transparent 75%, transparent);
    background-image:-moz-linear-gradient(45deg, rgba(18, 124, 171, 1) 25%, transparent 25%, transparent 50%, rgba(18, 124, 171, 1) 50%, rgba(18, 124, 171, 1) 75%, transparent 75%, transparent);
    background-image:linear-gradient(45deg, rgba(18, 124, 171, 1) 25%, transparent 25%, transparent 50%, rgba(18, 124, 171, 1) 50%, rgba(18, 124, 171, 1) 75%, transparent 75%, transparent);
    -webkit-animation:barberpole 2s linear infinite;
    -moz-animation:barberpole 2s linear infinite;
    animation:barberpole 2s linear infinite;
  }
  .product-hover4{

    z-index: -1;
    position:absolute;
    top:0;
    left:0.91rem;
    right:0.7rem;
    bottom:0;
    opacity:1;
    -webkit-transition:opacity 0.3s ease;
    -moz-transition:opacity 0.3s ease;
    transition:opacity 0.3s ease;
    background-size:10px 10px;
    background-image:-webkit-linear-gradient(45deg, rgba(63, 96, 209, 1) 25%, transparent 25%, transparent 50%, rgba(63, 96, 209, 1) 50%, rgba(63, 96, 209, 1) 75%, transparent 75%, transparent);
    background-image:-moz-linear-gradient(45deg, rgba(63, 96, 209, 1) 25%, transparent 25%, transparent 50%, rgba(63, 96, 209, 1) 50%, rgba(63, 96, 209, 1) 75%, transparent 75%, transparent);
    background-image:linear-gradient(45deg, rgba(63, 96, 209, 1) 25%, transparent 25%, transparent 50%, rgba(63, 96, 209, 1) 50%, rgba(63, 96, 209, 1) 75%, transparent 75%, transparent);
    -webkit-animation:barberpole 2s linear infinite;
    -moz-animation:barberpole 2s linear infinite;
    animation:barberpole 2s linear infinite;
  }
  .product-hover5{

    z-index: -1;
    position:absolute;
    top:0;
    left:0.91rem;
    right:0.7rem;
    bottom:0;
    opacity:1;
    -webkit-transition:opacity 0.3s ease;
    -moz-transition:opacity 0.3s ease;
    transition:opacity 0.3s ease;
    background-size:10px 10px;
    background-image:-webkit-linear-gradient(45deg, rgba(30, 184, 247, 1) 25%, transparent 25%, transparent 50%, rgba(30, 184, 247, 1) 50%, rgba(30, 184, 247, 1) 75%, transparent 75%, transparent);
    background-image:-moz-linear-gradient(45deg, rgba(30, 184, 247, 1) 25%, transparent 25%, transparent 50%, rgba(30, 184, 247, 1) 50%, rgba(30, 184, 247, 1) 75%, transparent 75%, transparent);
    background-image:linear-gradient(45deg, rgba(30, 184, 247, 1) 25%, transparent 25%, transparent 50%, rgba(30, 184, 247, 1) 50%, rgba(30, 184, 247, 1) 75%, transparent 75%, transparent);
    -webkit-animation:barberpole 2s linear infinite;
    -moz-animation:barberpole 2s linear infinite;
    animation:barberpole 2s linear infinite;
  }
  @-webkit-keyframes barberpole{
    from{
      background-position:0 0;
    }
    to{
      background-position:60px 30px;
    }
  }

  @-moz-keyframes barberpole{
    from{
      background-position:0 0;
    }
    to{
      background-position:60px 30px;
    }
  }

  @keyframes barberpole{
    from{
      background-position:0 0;
    }
    to{
      background-position:60px 30px;
    }
  }


</style>
