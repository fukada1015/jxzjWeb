<template>
    <div class="img1bg">
        <div class="img1content">
          <div class="bannertupiandingwei">
            <img src="../../common/images/wz.png"/>
          </div>
          <div class="rightimg bannerimgainimation">
            <img src="../../common/images/afafa.png"/>
          </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "homebanner1"
    }
</script>

<style>
.img1bg{
  background: url("../../common/images/bar1bg_01.jpg") no-repeat center;
  padding-top: 8rem;
  padding-bottom: 8rem;
}
  .img1content{
    max-width: 1200px;
    margin: 0 auto;
    height: 554px;
    display: flex;
    justify-content: space-between;
  }
  .rightimg img{
    width: 554px;
  }

.bannerimgainimation{
  position: relative;
  left: 50px;
  animation:bannerimg1 1s;
  -webkit-animation:bannerimg1 1s;
  /*-webkit-animation-name: -webkit-bannerimgainimation;*/
  /*animation-name: bannerimgainimation;*/
}
@keyframes bannerimg1
{
  from {left:82px; opacity: 0;}
  to {left:50px; opacity: 1;}
}

@-webkit-keyframes bannerimg1 /*Safari and Chrome*/
{
  from {left:82px; opacity: 0;}
  to {left:50px; opacity: 1;}
}

.bannertupiandingwei{
  padding-top: 8rem;
  position: relative;
  animation:bannertext1 1s;
  -webkit-animation:bannertext1 1s
  /*-webkit-animation-name: -webkit-bannertupiandingwei;*/
  /*animation-name: bannertupiandingwei;*/
}
@keyframes bannertext1
{
  from {left:-32px; opacity: 0;}
  to {left:0px; opacity: 1;}
}

@-webkit-keyframes bannertext1 /*Safari and Chrome*/
{
  from {left:-32px; opacity: 0;}
  to {left:0px; opacity: 1;}
}

</style>
