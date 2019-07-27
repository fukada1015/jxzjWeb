<template>
  <div class="mainctrol" @mouseenter="clearset" @mouseleave="setImgShow">
    <div class="control-arrow">
      <div class="pre-div" @click="leftmoveban">
        <div class="pre-arrow"></div>
      </div>
      <div class="next-div" @click="rightmoveban">
        <div class="next-arrow"> </div>
      </div>
    </div>
    <div class="navposition">
      <div class="navvitem">
        <div :class="[movesck,ismoveshow]"></div>
        <div class="itemop" @click="clickmove"></div>
        <div class="itemop" @click="clickmove2"></div>
      </div>
    </div>
    <homebanner1 ref="nn1" v-if="bn1"></homebanner1>
    <homebanner2 ref="nn2" v-if="bn2"></homebanner2>

  </div>
</template>

<script>
  import Icon from 'vue2-svg-icon/Icon.vue'
  import homebanner1 from '../homebanner1/homebanner1'
  import homebanner2 from '../homebanner2/homebanner2'
    export default {
        name: "banner2",
      components:{
        Icon,
        homebanner1,
        homebanner2
      },
      data(){
          return{
            bn1:true,
            bn2:false,
            homeMytimer:null,
            movesck:'movesck',
            ismoveshow:'movepositiondefalut',
            recordpick:1
          }
      },
      methods:{
        clickmove(){
          this.ismoveshow = 'movetransition';
          this.bn1 = true;
          this.bn2 = false;
          this.recordpick = 1;
        },
        clickmove2(){
          this.bn1 = false;
          this.bn2 = true;
          this.ismoveshow = 'movetransition2';
          this.recordpick = 2;
        },
        setImgShow(){
            this.homeMytimer = setInterval(()=>{
              if(this.recordpick === 1){
                this.clickmove2()
                this.recordpick = 2;
              }else{
                this.clickmove();
                this.recordpick = 1;
              }

              // this.$nextTick(function () {
              //   this.bn1 = !this.bn1
              //   this.bn2 = !this.bn2
              // });
            },4000)
          },
        clearset(){
          clearInterval(this.homeMytimer)
        },
        leftmoveban(){
          this.clickmove()
        },
        rightmoveban(){
          this.clickmove2()
        }
      },
      mounted() {
        this.setImgShow()

      },
    }
</script>

<style>
  .bancomputer{
    position: absolute;
    left: 250px;
    top: 50px;
  }
  .bancomputer img{
    width: 164px;
  }
  .bandipian1{
    position: absolute;
    left: 400px;
    top: 20px;
  }
  .bandipian1 img{
    width: 110px;
  }
  .bannerrightdd{
    position: relative;
  }
  .bannerimgainimation{
    -webkit-animation-name: -webkit-bannerimgainimation;
    animation-name: bannerimgainimation;
  }
  @keyframes -webkit-bannerimgainimation{
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
  @keyframes bannerimgainimation{
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
  .bannerrightdd img{
   width: 550px;
  }

  .banmiandingxing{
    max-width: 1200px;
    margin: 0 auto;
  }
  .bannertupiandingwei{
    padding-top: 8rem;
    -webkit-animation-name: -webkit-bannertupiandingwei;
    animation-name: bannertupiandingwei;
  }
  .bannertupiandingwei img {
    width: 396px;
    height: auto;
  }
  @keyframes -webkit-bannertupiandingwei{
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
  @keyframes bannertupiandingwei{
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
.banertain {
  width: 100%;
  height: auto;
  background: url("../../common/images/bar1bg_01.jpg") no-repeat center;
  /*height: 53rem;*/
}
  .bannerguolv {
    width: 75rem;
    overflow: hidden;
    height: 53rem;
  }
  .row1{
    opacity:0;
    top: 15rem;
    position: relative;
    animation:mymove 2s;
    animation-fill-mode: forwards;
    animation-delay:.6s;

  }
@keyframes mymove
{
  from {left:-1rem;opacity: 0}
  to {left:1rem;opacity: 1}
}
@-webkit-keyframes mymove /*Safari and Chrome*/
{
  from {left:-1rem;opacity: 0}
  to {left:1rem;opacity: 1}
}
.row2{
  opacity:0;
  top: 5rem;
  left: -3rem;
  position:relative;
  animation:mymove2 2s;
  animation-fill-mode: forwards;
  animation-delay:.6s;

}
@keyframes mymove2
{
  from {top:5rem;opacity: 0;left: 33rem}
  to {top:5rem;opacity: 1;left: 31rem}
}
@-webkit-keyframes mymove /*Safari and Chrome*/
{
  from {top:5rem;opacity: 0;left: 33rem}
  to {top:22rem;opacity: 1;left: 31rem}
}
  @media screen and (max-width: 1002px){
    .bannertupiandingwei{
      padding-top: 8rem;
      text-align: center;
      -webkit-animation-name: -webkit-bannertupiandingwei;
      animation-name: bannertupiandingwei;
    }
    .bannertupiandingwei img {
      width: 396px;
      height: auto;
    }
  }
  @media screen and (min-width: 1003px) {
    .bannertupiandingwei{
      padding-top: 8rem;
      -webkit-animation-name: -webkit-bannertupiandingwei;
      animation-name: bannertupiandingwei;
    }
    .bannertupiandingwei img {
      width: 550px;
      height: auto;
    }
  }
  .clearfix:before, clearfix:after {
    content:"";
    display: table;
    clear: both;
  }
  .bannnding{
    float: left;
  }
  .bannding2{
    float: right;
  }
  @media screen and (max-width: 1216px){
    .bannding2 img{
      width: 445px;
      height: auto;
    }
    .bannnding img{
      width: 554px;
    }
    .bannnding{
      float: none;
      text-align: center;
    }
    .bannding2{
      float: none;
      text-align: center;
      margin-top: 4rem;
    }
  }
  @media screen and (min-width: 1217px) {
    .bannding2 img{
      width: 545px;
      height: auto;
    }
    .bannnding img{
      width: 584px;
      height: auto;
    }
  }
  .navposition{
    width: 100%;
    position: absolute;
    margin-top: 43rem;
  }
  .navvitem{
    width: 120px;
    height: 4px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    position: relative;
  }
  .itemop{
    opacity: 0.4;
    border-radius: 5px;
    width: 50px;
    height: 4px;
    background-color: #fff;
    position: relative;
  }
  .movesck{
    width: 50px;
    height: 4px;
    border-radius: 5px;
    background-color: #fff;
    position: absolute;
  }
  .movepositiondefalut{
    left:0;
  }
  .movetransition2{

    animation:movetransition2 2s;
    animation-fill-mode: forwards;
  }
  @keyframes movetransition2{
    from {left: 0px}
    to {left:70px}
  }
  @-webkit-keyframes movetransition2 /*Safari and Chrome*/
  {
    from {left: 0px}
    to {left:70px}
  }
  .movetransition{

    animation:movetransition 2s;
    animation-fill-mode: forwards;
  }
  @keyframes movetransition{
    from {left: 70px}
    to {left:0px}
  }
  @-webkit-keyframes movetransition /*Safari and Chrome*/
  {
    from {left: 70px}
    to {left:0px}
  }
.control-arrow{
  opacity: 0;
  top: 45%;
  box-sizing: border-box;
  padding-left: 2rem;
  padding-right: 2rem;
  width: 100%;
  display: flex;
  position: absolute;
  z-index: 2;
  justify-content: space-between;
}
  .pre-div{
    width: 60px;
    height: 60px;
    background-color: rgba(46,53,68,.2);
    border-radius: 50%;
    position: relative;
  }
  .pre-div:hover .pre-arrow{
    opacity: 1;
  }
  .next-div{
    width: 60px;
    height: 60px;
    background-color: rgba(46,53,68,.2);
    border-radius: 50%;
    position: relative;
  }
  .next-div:hover .next-arrow{
    opacity: 1;
  }
  .pre-arrow{
    opacity: 0.5;
    position: absolute;
    width: 30px;
    height: 30px;
    border-top:2px solid #fff;
    border-left: 2px solid #fff;
    top: 1rem;
    left: 1.4rem;
    transform: rotate(-45deg);
  }
  .next-arrow{
    opacity: 0.5;
    position: absolute;
    width: 30px;
    height: 30px;
    border-top:2px solid #fff;
    border-left: 2px solid #fff;
    top: 1rem;
    left: 0.5rem;
    transform: rotate(135deg);
  }
  .mainctrol:hover .control-arrow{
    opacity: 1;
    transition: opacity .2s;
  }
</style>
