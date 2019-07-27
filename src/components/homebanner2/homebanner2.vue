<template>
    <div class="homebg2">
      <div class="img2content">
        <div class="homg2textgpx home2-img">
          <img src="../../common/images/homebg2text.png"/>
        </div>
        <div class="imgpositiongpx home2-rightimg">
          <img src="../../common/images/homeimg2img.png"/>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "homebanner2"
    }
</script>

<style>
.homebg2{
  background: url("../../common/images/homebanner2bg.jpg") no-repeat center;
  padding-top: 8rem;
  padding-bottom: 8rem;
}
  .img2content{
    max-width: 1200px;
    margin: 0 auto;
    height: 554px;
    display: flex;
    box-sizing: border-box;
    justify-content: space-between;
    align-items: center;
  }
  .home2-img{
    box-sizing: border-box;
    position: relative;
    animation:homeimgtext2 1s;
    -webkit-animation:homeimgtext2 1s;
    /*-webkit-animation-name: -webkit-home2imgc;*/
    /*animation-name: -webkit-home2imgc;*/

  }
@keyframes homeimgtext2
{
  from {left:-32px; opacity: 0;}
  to {left:0px; opacity: 1;}
}

@-webkit-keyframes homeimgtext2 /*Safari and Chrome*/
{
  from {left:32px; opacity: 0;}
  to {left:0px; opacity: 1;}
}
  .home2-img img{
    width: 474px;
  }

  .home2-rightimg{
    position: relative;
    left: 120px;
    animation:homeimgimg2 1s;
    -webkit-animation:homeimgimg2 1s;
    /*-webkit-animation-name: -webkit-home2rightimg;*/
    /*animation-name: -webkit-home2rightimg;*/
  }
@keyframes homeimgimg2
{
  from {left:152px; opacity: 0;}
  to {left:120px; opacity: 1;}
}

@-webkit-keyframes homeimgimg2 /*Safari and Chrome*/
{
  from {left:152px; opacity: 0;}
  to {left:120px; opacity: 1;}
}
  .home2-rightimg img{
    width: 529px;
  }

  .imgpositiongpx{
    margin-top: -5rem;
    margin-right: 5rem;
  }
  .homg2textgpx{
    margin-top: -5rem;
  }
</style>
