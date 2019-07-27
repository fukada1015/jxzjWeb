<template>
    <div class="rongziyjbg">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <div class="wow rongzit2divdw1 rongziyuanjinganimation" data-wow-delay=".5s"><p class="rongzit2title">愿景</p>
            <p class="rongzit2text">成为机械行业领先的后市场服务平台</p></div>
          </div>
          <div class="col-md-6">
            <div class="wow rongzit2divdw2 rongzit2divainimaition" data-wow-delay=".5s"><p class="rongzit2title">使命</p>
            <p class="rongzit2text">让机械后市场服务更高效</p></div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "rongziyj"
    }
</script>

<style>
.rongziyjbg{
  background:url("../../common/images/jlt.png") no-repeat center -121px;
  padding-top: 5rem;
  padding-bottom: 5rem;
}
  .rongzit2title{
    font-size: 2rem;
    color: white;
    font-family: zfont;
  }
  .rongzit2text{
    font-size: 1.1rem;
    color: white;
    font-family: zxfont;
  }
  .rongzit2divdw1 p{
    text-align: center;
  }
  .rongziyuanjinganimation{
    -webkit-animation-name: -webkit-rongziyuanjinganimation;
    animation-name: rongziyuanjinganimation;
  }
@keyframes -webkit-rongziyuanjinganimation{
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
@keyframes rongziyuanjinganimation{
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
.rongzit2divdw1{
  position: relative;
}

.rongzit2divdw2 p{
  text-align: center;
}
.rongzit2divainimaition{
  -webkit-animation-name: -webkit-rongzit2divainimaition;
  animation-name: rongzit2divainimaition;
}
@keyframes -webkit-rongzit2divainimaition{
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
@keyframes rongzit2divainimaition{
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
.rongzit2divdw2{
  position: relative;

}

</style>
