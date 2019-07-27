<template>
    <div class="aboutusbg">
      <div class="container">

          <div class="col-lg-12 wow aboutbannerwz aboutneranimtion" data-wow-delay=".5s"><p class="wow myt1" data-wow-delay=".5s">成为机械行业领先的后市场服务平台</p>
<!--          <p class="wow myt2 myt2animation" data-wow-delay=".8s"><span>致力于工程机械后市场交易和服务化的标准化、智能化</span></p>-->
          </div>

      </div>
    </div>
</template>

<script>
    export default {
        name: "aboutusbanner"
    }
</script>

<style>
.aboutusbg{
  background: url("../../common/images/bout_us_banner_03.jpg") no-repeat center;
  padding-top: 8rem;
  padding-bottom: 8rem;
}
  .aboutbannerwz{
    color: white;
  }
  .aboutneranimtion{
    -webkit-animation-name: -webkit-aboutneranimtion;
    animation-name: aboutneranimtion;
  }
@keyframes -webkit-aboutneranimtion{
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
@keyframes aboutneranimtion{
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
  .aboutbannerwz p {
    text-align: center;
    font-size: 2rem;
    letter-spacing: 0.2rem;

  }
  .aboutbannerwz p span {
    font-size: 1rem;
    text-align: center;
  }
  .myt1{

  }

.myt2{

}
.myt2animation{
  -webkit-animation-name: -webkit-myt2animation;
  animation-name: myt2animation;
}
@keyframes -webkit-myt2animation{
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
@keyframes myt2animation{
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
@keyframes myt2
{
  from {top:-1rem;opacity: 0}
  to {top:0rem;opacity: 1}
}
@-webkit-keyframes myt2 /*Safari and Chrome*/
{
  from {top:-1rem;opacity: 0}
  to {top:0rem;opacity: 1}
}
</style>
